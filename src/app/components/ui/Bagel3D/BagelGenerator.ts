import * as THREE from 'three';

function snoise3(x: number, y: number, z: number): number {
  const sin = Math.sin;
  return (
    sin(x * 1.5 + y * 2.1) * 0.4 +
    sin(y * 2.8 + z * 1.7) * 0.35 +
    sin(z * 3.2 + x * 2.9) * 0.25
  );
}

function createBreadBumpTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 512, 512);

  for (let i = 0; i < 25000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const r = Math.random() * 2.2 + 0.4;
    const val = Math.floor(Math.random() * 140 + 50);
    ctx.fillStyle = `rgb(${val},${val},${val})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(12, 6);
  return texture;
}

export class BagelGenerator {
  public majorRadius = 2.4;
  public minorRadius = 1.1;
  public outerRadius = this.majorRadius + this.minorRadius; // ~3.5

  public group: THREE.Group;
  public bodyMesh!: THREE.Mesh;
  public seedsInstancedMesh!: THREE.InstancedMesh;
  public blackSeedsInstancedMesh!: THREE.InstancedMesh;
  public saltInstancedMesh!: THREE.InstancedMesh;
  public bumpTexture: THREE.CanvasTexture;

  constructor() {
    this.group = new THREE.Group();
    this.bumpTexture = createBreadBumpTexture();
    this.createBagelGeometry();
  }

  private createBagelGeometry() {
    const radialSegments = 64;
    const tubularSegments = 160;
    const geometry = new THREE.TorusGeometry(
      this.majorRadius,
      this.minorRadius,
      radialSegments,
      tubularSegments
    );

    const posAttr = geometry.attributes.position;
    const vertex = new THREE.Vector3();
    const normal = new THREE.Vector3();

    geometry.computeVertexNormals();
    const normAttr = geometry.attributes.normal;

    for (let i = 0; i < posAttr.count; i++) {
      vertex.fromBufferAttribute(posAttr, i);
      normal.fromBufferAttribute(normAttr, i);

      const noiseVal = snoise3(vertex.x * 0.8, vertex.y * 0.8, vertex.z * 0.8);
      const fineNoise = snoise3(vertex.x * 4.0, vertex.y * 4.0, vertex.z * 4.0) * 0.05;

      const displacement = noiseVal * 0.15 + fineNoise;
      vertex.addScaledVector(normal, displacement);

      posAttr.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    geometry.computeVertexNormals();
    geometry.computeBoundingBox();

    // Everything Bagel Movie Original PBR Material
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x1c1715,
      roughness: 0.82,
      metalness: 0.18,
      bumpMap: this.bumpTexture,
      bumpScale: 0.04,
    });

    this.bodyMesh = new THREE.Mesh(geometry, baseMaterial);
    this.bodyMesh.castShadow = true;
    this.bodyMesh.receiveShadow = true;
    this.group.add(this.bodyMesh);

    this.scatterToppings(geometry);
  }

  private scatterToppings(torusGeometry: THREE.BufferGeometry) {
    const posAttr = torusGeometry.attributes.position;
    const normAttr = torusGeometry.attributes.normal;
    const totalVertices = posAttr.count;

    const sesameGeo = new THREE.SphereGeometry(0.065, 12, 8);
    sesameGeo.scale(0.8, 1.8, 0.6);

    const saltGeo = new THREE.BoxGeometry(0.08, 0.08, 0.08);

    const whiteSeedMat = new THREE.MeshStandardMaterial({
      color: 0xfefae0,
      roughness: 0.4,
      metalness: 0.05,
    });
    const blackSeedMat = new THREE.MeshStandardMaterial({
      color: 0x1f1f23,
      roughness: 0.7,
      metalness: 0.1,
    });
    const saltMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.1,
      transparent: true,
      opacity: 0.9,
    });

    const whiteCount = 300;
    const blackCount = 200;
    const saltCount = 100;

    this.seedsInstancedMesh = new THREE.InstancedMesh(sesameGeo, whiteSeedMat, whiteCount);
    this.blackSeedsInstancedMesh = new THREE.InstancedMesh(sesameGeo, blackSeedMat, blackCount);
    this.saltInstancedMesh = new THREE.InstancedMesh(saltGeo, saltMat, saltCount);

    const dummy = new THREE.Object3D();
    const v = new THREE.Vector3();
    const n = new THREE.Vector3();
    const dummyUp = new THREE.Vector3(0, 1, 0);

    const populateInstances = (instancedMesh: THREE.InstancedMesh, count: number) => {
      let added = 0;
      let attempts = 0;
      while (added < count && attempts < count * 25) {
        attempts++;
        const index = Math.floor(Math.random() * totalVertices);
        v.fromBufferAttribute(posAttr, index);
        n.fromBufferAttribute(normAttr, index);

        if (n.y > -0.2) {
          dummy.position.copy(v).addScaledVector(n, 0.02);
          const quaternion = new THREE.Quaternion();
          quaternion.setFromUnitVectors(dummyUp, n);
          dummy.quaternion.copy(quaternion);

          dummy.rotateOnAxis(n, Math.random() * Math.PI * 2);
          const scale = 0.7 + Math.random() * 0.6;
          dummy.scale.set(scale, scale, scale);

          dummy.updateMatrix();
          instancedMesh.setMatrixAt(added, dummy.matrix);
          added++;
        }
      }
      instancedMesh.instanceMatrix.needsUpdate = true;
      instancedMesh.castShadow = true;
      instancedMesh.receiveShadow = true;
    };

    populateInstances(this.seedsInstancedMesh, whiteCount);
    populateInstances(this.blackSeedsInstancedMesh, blackCount);
    populateInstances(this.saltInstancedMesh, saltCount);

    this.group.add(this.seedsInstancedMesh);
    this.group.add(this.blackSeedsInstancedMesh);
    this.group.add(this.saltInstancedMesh);
  }
}
