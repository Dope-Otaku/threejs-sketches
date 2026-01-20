import * as THREE from 'three'; 


const h = window.innerHeight;
const w = window.innerWidth;
const renderer = new THREE.WebGLRenderer({antialias:true})

renderer.setSize(w,h)
document.body.appendChild(renderer.domElement) //here we are adding a canvas element directly in document without adding in html