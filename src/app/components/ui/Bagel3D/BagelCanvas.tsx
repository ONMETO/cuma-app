import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { BagelGenerator } from './BagelGenerator';
import { DebrisField } from './DebrisField';
import { ScrollPhysics } from './ScrollPhysics';

interface BagelCanvasProps {
  heroRef?: React.RefObject<HTMLDivElement | null>;
}

export const BagelCanvas: React.FC<BagelCanvasProps> = () => {
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
    renderer.setClearColor(0x000000, 0); // Transparent to show Galaxy background
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 2. Procedural Environment Map
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

    // 5. Calculate Bounds & Initialize ScrollPhysics
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

    // Lock Controller: Lock body overflow while rolling on top
    let isLocked = true;

    const lockPage = () => {
      if (!isLocked) {
        isLocked = true;
        document.body.style.overflow = 'hidden';
      }
    };

    const unlockPage = () => {
      if (isLocked) {
        isLocked = false;
        document.body.style.overflow = '';
      }
    };

    lockPage();

    // 6. Wheel and Touch Event Interceptors
    let touchStartY = 0;

    const handleWheel = (e: WheelEvent) => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // If at top of page
      if (scrollY <= 5) {
        // Case A: Bagel is rolling (not yet at right edge) -> lock page and apply wheel impulse
        if (physics.positionX < bounds.rightX - 0.01) {
          if (e.cancelable) e.preventDefault();
          lockPage();
          physics.addImpulse(e.deltaY);
          return;
        }

        // Case B: Bagel is at right edge, but user scrolls UP (deltaY < 0) -> re-lock page and roll bagel back left!
        if (physics.positionX >= bounds.rightX - 0.01 && e.deltaY < 0) {
          if (e.cancelable) e.preventDefault();
          lockPage();
          physics.addImpulse(e.deltaY);
          return;
        }

        // Case C: Bagel is at right edge and user scrolls DOWN (deltaY > 0) -> unlock page scroll!
        if (physics.positionX >= bounds.rightX - 0.01 && e.deltaY > 0) {
          unlockPage();
        }
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

        if (physics.positionX < bounds.rightX - 0.01 || (physics.positionX >= bounds.rightX - 0.01 && deltaY < 0)) {
          if (e.cancelable) e.preventDefault();
          lockPage();
          physics.addTouchDelta(deltaY);
        } else if (physics.positionX >= bounds.rightX - 0.01 && deltaY > 0) {
          unlockPage();
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY <= 0 && physics.positionX < bounds.rightX - 0.01) {
        lockPage();
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 7. Animation Loop
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Physics update with friction decay & tire roll angle
      physics.update();

      // Synchronize 3D Bagel Group position and rotation
      bagel.group.position.x = physics.positionX;
      bagel.group.rotation.z = physics.rollAngle; // Tire roll: -positionX / effectiveRadius
      bagel.group.rotation.x = physics.tiltAngle; // Acceleration tilt
      bagel.group.rotation.y = physics.velocity * 0.2; // Y spin

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
      unlockPage();
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      // Clean up GPU resources
      envTexture.dispose();
      bagel.dispose();
      debrisField.dispose();

      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden"
    />
  );
};
