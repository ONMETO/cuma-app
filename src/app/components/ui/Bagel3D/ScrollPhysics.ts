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

  public update(): { isAtRightBound: boolean; isAtLeftBound: boolean } {
    // 1. Friction Damping
    this.velocity *= this.friction;
    if (Math.abs(this.velocity) < 0.0001) {
      this.velocity = 0;
    }

    // 2. Position Update
    this.positionX += this.velocity;

    // 3. Boundary Clamping
    let isAtRightBound = false;
    let isAtLeftBound = false;

    if (this.positionX >= this.maxX) {
      this.positionX = this.maxX;
      if (this.velocity > 0) this.velocity = 0;
      isAtRightBound = true;
    } else if (this.positionX <= this.minX) {
      this.positionX = this.minX;
      if (this.velocity < 0) this.velocity = 0;
      isAtLeftBound = true;
    }

    // 4. True Tire Roll Angle (-positionX / radius)
    this.rollAngle = -this.positionX / this.bagelRadius;

    // 5. Weight-shifting acceleration tilt
    const targetTilt = -this.velocity * 0.35;
    this.tiltAngle += (targetTilt - this.tiltAngle) * 0.1;

    return { isAtRightBound, isAtLeftBound };
  }

  public reset(startX: number) {
    this.positionX = startX;
    this.velocity = 0;
    this.rollAngle = -startX / this.bagelRadius;
    this.tiltAngle = 0;
  }
}
