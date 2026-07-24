import * as THREE from 'three';

interface Orbit {
  group: THREE.Group;
  speed: number;
  tiltX: number;
  tiltY: number;
}

export class DebrisField {
  public group: THREE.Group;
  public orbits: Orbit[];

  constructor() {
    this.group = new THREE.Group();

    this.orbits = [
      { group: new THREE.Group(), speed: 0.25, tiltX: 0.1, tiltY: 0.15 },
      { group: new THREE.Group(), speed: -0.18, tiltX: -0.2, tiltY: 0.1 },
      { group: new THREE.Group(), speed: 0.3, tiltX: 0.25, tiltY: -0.2 },
    ];

    this.orbits.forEach((orbit) => {
      orbit.group.rotation.x = orbit.tiltX;
      orbit.group.rotation.y = orbit.tiltY;
      this.group.add(orbit.group);
    });

    this.createDebris();
  }

  private createDebris() {
    const sesameGeo = new THREE.SphereGeometry(0.05, 8, 6);
    sesameGeo.scale(0.8, 1.8, 0.6);
    const whiteMat = new THREE.MeshStandardMaterial({
      color: 0xfefae0,
      roughness: 0.4,
      metalness: 0.1,
    });
    const blackMat = new THREE.MeshStandardMaterial({
      color: 0x1f1f23,
      roughness: 0.6,
      metalness: 0.1,
    });
    const saltGeo = new THREE.BoxGeometry(0.055, 0.055, 0.055);
    const saltMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      transparent: true,
      opacity: 0.85,
    });

    const populateOrbit = (orbitGroup: THREE.Group, count: number, minR: number, maxR: number) => {
      const whiteMesh = new THREE.InstancedMesh(sesameGeo, whiteMat, count);
      const blackMesh = new THREE.InstancedMesh(sesameGeo, blackMat, count);
      const saltMesh = new THREE.InstancedMesh(saltGeo, saltMat, Math.floor(count * 0.5));

      const dummy = new THREE.Object3D();

      const scatter = (mesh: THREE.InstancedMesh, itemCount: number) => {
        for (let i = 0; i < itemCount; i++) {
          const r = minR + Math.random() * (maxR - minR);
          const angle = Math.random() * Math.PI * 2;
          const zOffset = (Math.random() - 0.5) * 1.2;

          dummy.position.set(
            Math.cos(angle) * r,
            Math.sin(angle) * r,
            zOffset
          );
          dummy.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          );
          const scale = 0.6 + Math.random() * 0.7;
          dummy.scale.set(scale, scale, scale);
          dummy.updateMatrix();

          mesh.setMatrixAt(i, dummy.matrix);
        }
        mesh.instanceMatrix.needsUpdate = true;
        mesh.castShadow = true;
      };

      scatter(whiteMesh, count);
      scatter(blackMesh, count);
      scatter(saltMesh, Math.floor(count * 0.5));

      orbitGroup.add(whiteMesh);
      orbitGroup.add(blackMesh);
      orbitGroup.add(saltMesh);
    };

    populateOrbit(this.orbits[0].group, 35, 3.6, 4.8);
    populateOrbit(this.orbits[1].group, 45, 5.0, 6.5);
    populateOrbit(this.orbits[2].group, 55, 6.8, 8.5);
  }

  public update(time: number) {
    this.orbits.forEach((orbit, index) => {
      orbit.group.rotation.z = time * orbit.speed;
      orbit.group.rotation.x = orbit.tiltX + Math.sin(time * 0.4 + index) * 0.04;
    });
  }
}
