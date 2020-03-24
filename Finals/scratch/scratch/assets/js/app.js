//let them
let scene, camera, renderer, controls; //camera
let ambientLight, directionalLight, pointLight; //lighting


// Scene and Camera
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = -30; //NEAR-FAR
camera.position.y = 0;


// Geometries
let bigFloor = new THREE.Mesh(new THREE.BoxBufferGeometry(30, 0.5, 30), new THREE.MeshPhongMaterial({color:0xffffff}));
bigFloor.receiveShadow = true;
bigFloor.castShadow = true;
scene.add(bigFloor);

// Renderer
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;


//Lightings
ambientLight = new THREE.AmbientLight(0xFFEF33, 0.4); //brightness
scene.add(ambientLight);

directionalLight = new THREE.DirectionalLight(0xf41fff, 1.3);
directionalLight.position.set(0,2,10);
directionalLight.castShadow = true;
scene.add(directionalLight);

pointLight = new THREE.PointLight(0xffffff, 0.4); // like a SUN
pointLight.position.set(0,12,10);
pointLight.castShadow = true;
scene.add(pointLight);


controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 5, 0);
function animate() {
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
