import * as THREE from 'three'

const w = window.innerWidth
const h = window.innerHeight
const fov = 90
const aspect = w/h
const near = 0.1
const far = 10


const renderer = new THREE.WebGLRenderer({antialias:true})
renderer.setSize(w, h)
document.body.appendChild(renderer.domElement)


const scene = new THREE.Scene()

const geo = new THREE.TorusKnotGeometry( 10, 3, 100, 16 )
const mat = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    flatShading: true
})
const mesh = new THREE.Mesh(geo, mat)
scene.add(mesh)

const wireMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
})
const wireMesh = new THREE.Mesh(geo, wireMat)
wireMesh.scale.setScalar(1.001)
mesh.add(wireMesh)



const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 10

const light = new THREE.HemisphereLight(0xffffff, 0x000000)
scene.add(light)


function animate(t=0){
    requestAnimationFrame(animate)
    mesh.rotation.y = t * 0.0001
    renderer.render(scene, camera)
}
animate()