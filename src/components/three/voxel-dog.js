import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../../lib/model'
import { DogSpinner, DogContainer } from './voxel-dog-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()
  const urlDogGLB =
    (process.env.NODE_ENV === 'production' ? 'https://genichihashi.me' : '') +
    '/dog.glb'

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight
      renderer.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const { current: container } = refContainer
    if (!container) return

    const scW = container.clientWidth
    const scH = container.clientHeight

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true, alpha: true
    })

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(scW, scH)
    renderer.outputEncoding = THREE.sRGBEncoding
    container.appendChild(renderer.domElement)
    refRenderer.current = renderer

    // Scene
    const scene = new THREE.Scene()

    // Target and camera setup
    const target = new THREE.Vector3(1, 1, 0.5)
    const initialCameraPosition = new THREE.Vector3(
      Math.sin(0.2 * Math.PI),
      Math.sin(0.2 * Math.PI),
      30 * Math.cos(0.2 * Math.PI)
    )
    const scale = scH * 0.005 + 8
    const camera = new THREE.OrthographicCamera(
      -scale,
      scale,
      scale,
      -scale,
      0.01,
      5000
    )
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)

    // LIGHTING SETUP
    // 1) Hemisphere Light (Sky and Ground Illumination)
    const hemisphereLight = new THREE.HemisphereLight(0xa2d5f2, 0x57a773, 0.8) // Sky, Ground, Intensity
    scene.add(hemisphereLight)

    // 2) Ambient Light for Global Illumination
    const ambientLight = new THREE.AmbientLight(0x888888, 0.6) // Slight brightness for the whole scene
    scene.add(ambientLight)

    // 3) Directional Light (Main Sunlight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 5) // White light with strong intensity
    directionalLight.position.set(0, 0, 0) // Adjust for dramatic angle
    directionalLight.castShadow = true
    // directionalLight.shadow.mapSize.width = 2048 // High-resolution shadows
    // directionalLight.shadow.mapSize.height = 2048
    // directionalLight.shadow.camera.left = -50
    // directionalLight.shadow.camera.right = 50
    // directionalLight.shadow.camera.top = 50
    // directionalLight.shadow.camera.bottom = -50
    scene.add(directionalLight)

    // // Optional: Add Spotlight for extra focus (if needed)
    // const spotLight = new THREE.SpotLight(0xffffff, 0.7)
    // spotLight.position.set(15, 30, 10) // Position from above
    // spotLight.angle = 0.4 // Slightly wider spotlight
    // spotLight.penumbra = 0.8 // Soft edges
    // spotLight.castShadow = true
    // spotLight.shadow.mapSize.width = 1024
    // spotLight.shadow.mapSize.height = 1024
    // scene.add(spotLight)


    // CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement)
    // controls.autoRotate = true
    controls.target = target

    // Load model
    loadGLTFModel(scene, urlDogGLB, {
      receiveShadow: true, // make it true
      castShadow: true
    }).then((gltf) => {
      // const model = gltf.scene
      // if (model) {
      //   // Example: Rotate 30 degrees clockwise
      //   model.rotation.x = Math.PI
      //   scene.add(model)
      // }
      animate()
      setLoading(false)
    })

    let req = null
    let frame = 0
    const animate = () => {
      req = requestAnimationFrame(animate)
      frame = frame <= 100 ? frame + 1 : frame

      if (frame <= 100) {
        frame += 1
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20
        camera.position.y = 5
        camera.position.x =
          initialCameraPosition.x * Math.cos(rotSpeed) +
          initialCameraPosition.z * Math.sin(rotSpeed)
        camera.position.z =
          initialCameraPosition.z * Math.cos(rotSpeed) -
          initialCameraPosition.x * Math.sin(rotSpeed)
        camera.lookAt(target)
      } else {
        controls.update()
      }
      renderer.render(scene, camera)
    }

    return () => {
      cancelAnimationFrame(req)
      renderer.domElement.remove()
      renderer.dispose()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <DogContainer ref={refContainer}>
      {loading && <DogSpinner />}
    </DogContainer>
  )
}

export default VoxelDog

