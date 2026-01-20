import * as THREE from 'three'; 


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