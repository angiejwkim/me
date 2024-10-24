import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });

function init() {
  // Scene, Camera, Renderer
  scene.background = new THREE.Color(0xffffff);

  camera.position.z = 10;

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true; // Enable shadows
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight();
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 1);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  // Monitor Frame (Outer Box)
  const frameGeometry = new THREE.BoxGeometry(10, 7, 1);
  const frameMaterial = new THREE.MeshStandardMaterial({
    color: 0xdbdbcc,
  });
  const frame = new THREE.Mesh(frameGeometry, frameMaterial);
  frame.castShadow = true;
  frame.receiveShadow = true;
  scene.add(frame);

  // Screen (Inner Box, placed inside the frame)
  const screenGeometry = new THREE.PlaneGeometry(8, 5.5);
  const screenMaterial = new THREE.MeshStandardMaterial({
    color: 0x000000,
  });
  const screen = new THREE.Mesh(screenGeometry, screenMaterial);
  screen.position.z = 0.6; // Slightly in front of the frame
  screen.castShadow = true;
  screen.receiveShadow = true;
  scene.add(screen);

  const windowPrism = createWindowPrismWithInset();
  scene.add(windowPrism);

  animate();
}

// Create the main cube geometry
function createCube() {
  const cubeGeometry = new THREE.BoxGeometry(
    window.innerWidth,
    window.innerHeight,
    5
  );
  const cubeMaterial = new THREE.MeshStandardMaterial({
    color: 0x00ff00,
  });
  return new THREE.Mesh(cubeGeometry, cubeMaterial);
}

// Create the inset geometry with bevel
function createInsetGeometry() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const offset = 10;
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0, width - offset);
  shape.lineTo(height - offset, width - offset);
  shape.lineTo(height - offset, 0);
  shape.lineTo(0, 0);

  const extrudeSettings = {
    steps: 2,
    depth: 16,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 1,
  };

  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  return new THREE.Mesh(geometry, material);
}

function createWindowPrismWithInset(
  insetDepth = 0.1,
  insetScale = 0.9
) {
  const group = new THREE.Group();

  // Get window dimensions
  const width = window.innerWidth;
  const height = window.innerHeight;
  const depth = Math.min(width, height) * 0.1; // Arbitrary depth, adjust as needed

  // Create the main prism
  const prismGeometry = new THREE.BoxGeometry(width, height, depth);
  const prismMaterial = new THREE.MeshStandardMaterial({
    color: 0x444444,
  });
  const prism = new THREE.Mesh(prismGeometry, prismMaterial);
  group.add(prism);

  // Create the inset face
  const insetWidth = width * insetScale;
  const insetHeight = height * insetScale;
  const insetShape = new THREE.Shape();
  insetShape.moveTo(-insetWidth / 2, -insetHeight / 2);
  insetShape.lineTo(-insetWidth / 2, insetHeight / 2);
  insetShape.lineTo(insetWidth / 2, insetHeight / 2);
  insetShape.lineTo(insetWidth / 2, -insetHeight / 2);
  insetShape.lineTo(-insetWidth / 2, -insetHeight / 2);

  const extrudeSettings = {
    steps: 1,
    depth: insetDepth,
    bevelEnabled: false,
  };

  const insetGeometry = new THREE.ExtrudeGeometry(
    insetShape,
    extrudeSettings
  );
  const insetMaterial = new THREE.MeshStandardMaterial({
    color: 0x666666,
  });
  const inset = new THREE.Mesh(insetGeometry, insetMaterial);

  // Position the inset
  inset.position.z = depth / 2 - insetDepth;
  group.add(inset);

  // Center the group
  group.position.set(0, 0, -depth / 2);

  return group;
}

// Combine the cube and inset geometry
function createBeveledInsetCube() {
  const cube = createCube();
  const insetGeometry = createInsetGeometry();

  // Position the inset geometry on the face of the cube
  const insetMesh = new THREE.Mesh(
    insetGeometry,
    new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  );
  insetMesh.position.set(0, 0, 0.5); // Position on the front face

  // Combine both geometries
  const combinedGeometry = BufferGeometryUtils.mergeGeometries([
    cube.geometry,
    insetMesh.geometry,
  ]);

  return new THREE.Mesh(combinedGeometry, cube.material);
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

init();

// Handle Resize
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
