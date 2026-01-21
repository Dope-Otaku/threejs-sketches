import * as THREE from 'three'; 
import {OrbitControls} from "jsm/controls/OrbitControls.js"


const h = window.innerHeight;
const w = window.innerWidth;
const renderer = new THREE.WebGLRenderer({antialias:true})

renderer.setSize(w,h)
document.body.appendChild(renderer.domElement) //here we are adding a canvas element directly in document without adding in html


const fov = 75 //it is 75° feild of vision in the camera: you can set to 0 or 90 also
const aspect = w/h //it's the aspect ratio of scene
const near = 0.1 // it's the nearest position of camera from where you want the animation to run
const far = 10 // it's the farthest point where you want the animation to stretch
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 5

const scene = new THREE.Scene()

//adding an orbit camera

const orbitCamera = new OrbitControls(camera, renderer.domElement)
orbitCamera.enableDamping = true;
orbitCamera.dampingFactor = 0.03;


// added a default earth mesh
const loader = new THREE.TextureLoader()
const geo = new THREE.IcosahedronGeometry(1, 12)
const mat = new THREE.MeshStandardMaterial({
    map: loader.load('./earthmap.jpg'),
    // flatShading: true
})
const mesh = new THREE.Mesh(geo, mat)
scene.add(mesh)


//added a wiremesh on colored object
// const wireMat = new THREE.MeshBasicMaterial({
//     color: 0xffffff,
//     wireframe: true
// })

// const wireMesh = new THREE.Mesh(geo, wireMat)
// wireMesh.scale.setScalar(1.001)
// mesh.add(wireMesh)





// adding sunlight
const sunlight = new THREE.DirectionalLight(0xffffff)
sunlight.position.set(-2, 0.5, 1.5)
scene.add(sunlight)


function animation(t=0){
    requestAnimationFrame(animation)
    // mesh.scale.setScalar(Math.cos(t*0.0001)+1) //animation maths
    mesh.rotation.y = t * 0.0001
    renderer.render(scene, camera)
    orbitCamera.update() //adds sometheness in animation on controlling
}
animation()