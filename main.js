import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
// import { AUPredictor } from "@quarkworks-inc/avatar-webkit"

// Scene, Camera
const scene = new THREE.Scene()
scene.background = new THREE.Color("black")
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0, 0, 3)

// WebGL renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setPixelRatio(2)
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement)

// Mesh
const geometry = new THREE.IcosahedronGeometry()
const material = new THREE.MeshNormalMaterial()
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Render loop
const clock = new THREE.Clock()

function render() {
  const dt = clock.getDelta()

  controls.update()

  renderer.render(scene, camera)
}
renderer.setAnimationLoop(render)

// Window sizing
window.addEventListener("resize", onWindowResize)
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

// // Hallway SDK
// let videoStream = await navigator.mediaDevices.getUserMedia({
//   audio: false,
//   video: {
//     width: { ideal: 640 },
//     height: { ideal: 360 },
//     facingMode: "user",
//   },
// })

// let predictor = new AUPredictor({
//   apiToken: import.meta.env.VITE_AVATAR_WEBKIT_AUTH_TOKEN,
//   srcVideoStream: videoStream,
// })

// predictor.onPredict((results) => {
//   window.results = results
// })

// await predictor.start()
// console.log("Predictor started...")
