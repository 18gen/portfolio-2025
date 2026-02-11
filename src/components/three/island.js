import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { IslandSpinner, IslandContainer } from "./island-loader";

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

function loadGLTFModel(scene, glbPath) {
  return new Promise((resolve, reject) => {
    const draco = new DRACOLoader();
    draco.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");

    const loader = new GLTFLoader();
    loader.setDRACOLoader(draco);

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "island";
        obj.position.set(0, 0, 0);
        scene.add(obj);
        resolve(obj);
      },
      undefined,
      reject
    );
  });
}

const Island = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef();

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      renderer.setSize(scW, scH);
    }
  }, []);

  useEffect(() => {
    const { current: container } = refContainer;
    if (!container) return;

    const scW = container.clientWidth;
    const scH = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(scW, scH);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);
    refRenderer.current = renderer;

    const scene = new THREE.Scene();

    const target = new THREE.Vector3(1, 1, 0);
    const initialCameraPosition = new THREE.Vector3(
      Math.sin(0.2 * Math.PI),
      Math.sin(0.2 * Math.PI),
      30 * Math.cos(0.2 * Math.PI)
    );
    const scale = scH * 0.005 + 8;
    const camera = new THREE.OrthographicCamera(
      -scale,
      scale,
      scale,
      -scale,
      0.1,
      100
    );
    camera.position.copy(initialCameraPosition);
    camera.lookAt(target);

    // Ambient lighting for overall illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Main spotlight for dramatic lighting (matches original)
    const spotLight = new THREE.SpotLight(0xffffff, 900);
    spotLight.position.set(3, 11, 9);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.5;
    scene.add(spotLight);

    // Fill light from opposite side
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-5, 5, -5);
    scene.add(fillLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.target = target;
    controls.enableZoom = false;
    controls.enablePan = false;

    loadGLTFModel(scene, "/island.glb").then(() => {
      animate();
      setLoading(false);
    });

    let req = null;
    let frame = 0;
    const animate = () => {
      req = requestAnimationFrame(animate);
      frame = frame <= 100 ? frame + 1 : frame;

      if (frame <= 100) {
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 10;
        camera.position.y = 5;
        camera.position.x =
          initialCameraPosition.x * Math.cos(rotSpeed) +
          initialCameraPosition.z * Math.sin(rotSpeed);
        camera.position.z =
          initialCameraPosition.z * Math.cos(rotSpeed) -
          initialCameraPosition.x * Math.sin(rotSpeed);
        camera.lookAt(target);
      } else {
        controls.update();
      }
      renderer.render(scene, camera);
    };

    return () => {
      cancelAnimationFrame(req);
      renderer.domElement.remove();
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <IslandContainer ref={refContainer}>
      {loading && <IslandSpinner />}
    </IslandContainer>
  );
};

export default Island;
