# Everything Bagel 3D Hero Migration Implementation Plan (Refined & Corrected)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fully port the original Everything Bagel 3D physics engine (`ScrollPhysics`) into Melo landing page's Hero section, restoring original inertia, friction damping, and true tire rolling physics while using a page scroll-lock state to ensure subsequent page content (`BentoFeatures`) remains completely off-screen during the rolling sequence.

**Architecture:** 
1. Port `ScrollPhysics.js` to `ScrollPhysics.ts` with cubic bezier acceleration, velocity friction damping (`0.94`), max speed limit, exact tire roll angle (`-positionX / radius`), and weight-shifting tilt (`tiltAngle`).
2. Implement a Scroll Lock Controller inside `BagelCanvas.tsx`:
   - When at `scrollY === 0` and bagel is rolling (`progress < 1.0`), lock page scroll (`overflow: hidden` / wheel intercept).
   - Wheel/touch events feed impulse directly to `physics.velocity`.
   - When `positionX` reaches `rightX` (100% roll complete), unlock page scroll allowing normal vertical scrolling to `BentoFeatures`.
   - When scrolling back to top (`scrollY === 0`), re-lock scroll and allow scrolling up to roll the bagel back from `rightX` to `leftX`.
3. Render transparent 3D Bagel Canvas over `<Galaxy />` starfield in `Hero.tsx`, removing the 2 floating image cards (`personSmile` / `runner`).

**Tech Stack:** React 18, TypeScript, Three.js, GSAP, Tailwind CSS, Vite.

## Global Constraints

- **Physics Fidelity**: Must retain 100% original impulse calculation, cubic bezier curve factor, `velocity *= 0.94` friction, tire rolling angle `-positionX / radius`, and `tiltAngle`.
- **Zero Content Bleed**: `BentoFeatures` and lower page sections MUST NOT bleed into view or slide up while the bagel is rolling.
- **Hero Image Removal**: Remove `personSmile` and `runner` cards from `Hero.tsx`.
- **Canvas Transparency**: WebGLRenderer `alpha: true` with clear opacity `0`.

---

### Task 1: Create `ScrollPhysics.ts`

**Files:**
- Create: `src/app/components/ui/Bagel3D/ScrollPhysics.ts`

**Interfaces:**
- Consumes: None
- Produces: `ScrollPhysics` class with `.positionX`, `.velocity`, `.rollAngle`, `.tiltAngle`, `.update()`, `.addImpulse(delta)`, `.reset()`.

- [ ] **Step 1: Create `ScrollPhysics.ts`**

Create `src/app/components/ui/Bagel3D/ScrollPhysics.ts`:
```typescript
function cubicBezier(t: number, p1x = 0.25, p1y = 0.1, p2x = 0.25, p2y = 1.0): number {
  const cx = 3 * p1x;
  const bx = 3 * (p2x - p1x) - cx;
  const ax = 1 - cx - bx;

  const cy = 3 * p1y;
  const by = 3 * (p2y - p1y) - cy;
  const ay = 1 - cy - by;

  const sampleCurveY = (t: number) => ((ay * t + by) * t + cy) * t;
  return sampleCurveY(t);
}

export class ScrollPhysics {
  public bagelRadius: number;
  public positionX = 0;
  public velocity = 0;
  public friction = 0.94; // Exponential friction damping (original project)
  public maxSpeed = 1.2;

  public rollAngle = 0;
  public tiltAngle = 0;

  public minX = -5;
  public maxX = 5;

  constructor(bagelRadius = 2.1) {
    this.bagelRadius = bagelRadius;
  }

  public setBounds(minX: number, maxX: number) {
    this.minX = minX;
    this.maxX = maxX;
    if (this.positionX < minX) this.positionX = minX;
    if (this.positionX > maxX) this.positionX = maxX;
  }

  public addImpulse(deltaY: number) {
    const absDelta = Math.min(Math.abs(deltaY) / 100, 1.0);
    const easedFactor = cubicBezier(absDelta);
    const impulse = Math.sign(deltaY) * easedFactor * 0.08;

    this.velocity += impulse;
    this.velocity = Math.max(-this.maxSpeed, Math.min(this.maxSpeed, this.velocity));
  }

  public addTouchDelta(deltaY: number) {
    this.velocity += deltaY * 0.003;
    this.velocity = Math.max(-this.maxSpeed, Math.min(this.maxSpeed, this.velocity));
  }

  public update(): { isAtBoundary: boolean } {
    // 1. Friction Damping
    this.velocity *= this.friction;
    if (Math.abs(this.velocity) < 0.0001) {
      this.velocity = 0;
    }

    // 2. Position Update
    this.positionX += this.velocity;

    // 3. Boundary Clamping
    let isAtBoundary = false;
    if (this.positionX >= this.maxX) {
      this.positionX = this.maxX;
      if (this.velocity > 0) this.velocity = 0;
      isAtBoundary = true;
    } else if (this.positionX <= this.minX) {
      this.positionX = this.minX;
      if (this.velocity < 0) this.velocity = 0;
      isAtBoundary = true;
    }

    // 4. True Tire Roll Angle (-positionX / radius)
    this.rollAngle = -this.positionX / this.bagelRadius;

    // 5. Weight-shifting acceleration tilt
    const targetTilt = -this.velocity * 0.35;
    this.tiltAngle += (targetTilt - this.tiltAngle) * 0.1;

    return { isAtBoundary };
  }

  public reset(startX: number) {
    this.positionX = startX;
    this.velocity = 0;
    this.rollAngle = -startX / this.bagelRadius;
    this.tiltAngle = 0;
  }
}
```

---

### Task 2: Update `BagelCanvas.tsx` with Original Physics & Scroll-Lock Controller

**Files:**
- Modify: `src/app/components/ui/Bagel3D/BagelCanvas.tsx`

**Interfaces:**
- Consumes: `ScrollPhysics.ts`, `BagelGenerator.ts`, `DebrisField.ts`
- Produces: `<BagelCanvas heroRef={heroRef} />` with complete physics & zero content bleed lock.

- [ ] **Step 1: Update `BagelCanvas.tsx`**

Modify `src/app/components/ui/Bagel3D/BagelCanvas.tsx`:
```tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { BagelGenerator } from './BagelGenerator';
import { DebrisField } from './DebrisField';
import { ScrollPhysics } from './ScrollPhysics';

interface BagelCanvasProps {
  heroRef: React.RefObject<HTMLDivElement | null>;
}

export const BagelCanvas: React.FC<BagelCanvasProps> = ({ heroRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Setup Three Scene
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.8, 11.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 2. Procedural Reflection Environment
    const envCanvas = document.createElement('canvas');
    envCanvas.width = 512;
    envCanvas.height = 512;
    const ctx = envCanvas.getContext('2d')!;
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.5, '#4a5568');
    grad.addColorStop(1, '#0f172a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    const envTexture = new THREE.CanvasTexture(envCanvas);
    envTexture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = envTexture;

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5ea, 2.5);
    keyLight.position.set(6, 10, 8);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x88bbff, 1.0);
    fillLight.position.set(-8, 4, -4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffaa44, 2.2);
    rimLight.position.set(0, -6, -8);
    scene.add(rimLight);

    // 4. Create 3D Bagel & Debris Field
    const bagel = new BagelGenerator();
    const bagelScale = 0.6;
    bagel.group.scale.set(bagelScale, bagelScale, bagelScale);
    scene.add(bagel.group);

    const debrisField = new DebrisField();
    bagel.group.add(debrisField.group);

    // 5. Bounds & Physics Setup
    const getBounds = () => {
      const aspect = window.innerWidth / window.innerHeight;
      const vFov = (45 * Math.PI) / 180;
      const visibleHeight = 2 * Math.tan(vFov / 2) * 11.5;
      const visibleWidth = visibleHeight * aspect;
      
      const padding = visibleWidth * 0.18;
      const rightX = (visibleWidth / 2) - padding;
      const leftX = -rightX;
      return { leftX, rightX };
    };

    let bounds = getBounds();
    const effectiveRadius = bagel.outerRadius * bagelScale; // 3.5 * 0.6 = 2.1
    const physics = new ScrollPhysics(effectiveRadius);
    physics.setBounds(bounds.leftX, bounds.rightX);
    physics.reset(bounds.leftX);

    // Lock state: initially locked at top while bagel rolls left -> right
    let isRollLocked = true;

    const lockScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    const unlockScroll = () => {
      document.body.style.overflow = '';
    };

    lockScroll();

    // 6. Wheel & Touch Input Event Listeners
    let touchStartY = 0;

    const handleWheel = (e: WheelEvent) => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // If at top of page and scrolling down, or rolling back from right to left
      if (scrollY <= 5) {
        if (physics.positionX < bounds.rightX || (physics.positionX >= bounds.rightX && e.deltaY < 0)) {
          if (e.cancelable) e.preventDefault();
          isRollLocked = true;
          lockScroll();

          physics.addImpulse(e.deltaY);
          return;
        }
      }

      if (physics.positionX >= bounds.rightX && e.deltaY > 0) {
        isRollLocked = false;
        unlockScroll();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY <= 5 && e.touches.length > 0) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY;
        touchStartY = touchY;

        if (physics.positionX < bounds.rightX || (physics.positionX >= bounds.rightX && deltaY < 0)) {
          if (e.cancelable) e.preventDefault();
          isRollLocked = true;
          lockScroll();
          physics.addTouchDelta(deltaY);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Handle scroll to re-lock when user scrolls back to absolute top
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY <= 0 && physics.positionX < bounds.rightX) {
        lockScroll();
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 7. Animation Loop
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Physics update with friction damping & true tire rolling
      physics.update();

      // Apply transformations to Bagel Group
      bagel.group.position.x = physics.positionX;
      bagel.group.rotation.z = physics.rollAngle; // Tire roll: -positionX / radius
      bagel.group.rotation.x = physics.tiltAngle; // Weight-shifting acceleration tilt
      bagel.group.rotation.y = physics.velocity * 0.2; // Minor spin during roll

      debrisField.update(elapsedTime);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      bounds = getBounds();
      physics.setBounds(bounds.leftX, bounds.rightX);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      unlockScroll();
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [heroRef]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden"
    />
  );
};
```

---

### Task 3: Test Build & Verification

- [ ] **Step 1: Test Vite Build**

Run in `/Users/yangpenghao/Downloads/luodiye 2-opus`:
```bash
npm run build
```
Verify build succeeds with zero errors.
