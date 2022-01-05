let container;
let camera;
let renderer;
let scene;
let gun;
let controls;


function init(event) {
    console.log("bruh")
    container = document.querySelector('.scene');
    //scene
    scene = new THREE.Scene();

    const fov = 40;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500;

    let x = event.clientX;
    let y = event.clientY;
    //camera
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far)



    console.log(camera.fov);
    camera.position.set(0, 1, 5)
    camera.lookAt(new THREE.Vector3(-1, 1, 1));



    //lights
    const ambient = new THREE.AmbientLight(0x404040, 5);
    scene.add(ambient)
    const light = new THREE.DirectionalLight(0xf543, 0);
    light.position.set(10, 10, 10);
    scene.add(light);


    //renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    //controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(0, 1.2, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    //square
    const square = new THREE.BoxGeometry(3, 0.1, 3);
    const material = new THREE.MeshBasicMaterial({
        color: 0x541212
    });
    cube = new THREE.Mesh(square, material);
    scene.add(cube);
    // // animate();


    //load model
    let loader = new THREE.GLTFLoader();
    loader.load("/modelka/scene.gltf", function (gg) {
        scene.add(gg.scene);
        gun = gg.scene;
        gun.scale.set(0.01, 0.01, 0.01);

        gun.position.y += 0.05;
        animate();

    });


}

function animate() {
    requestAnimationFrame(animate);
    // gun.rotation.y -=0.005;
    renderer.render(scene, camera);
}

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})
window.onload = init;