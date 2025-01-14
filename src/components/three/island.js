import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "../../lib/model";
import { IslandSpinner, IslandContainer } from "./island-loader";

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Island = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef();
  const urlIslandGLB =
    (process.env.NODE_ENV === "production" ? "https://genichihashi.me" : "") +
    "/island.glb";

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

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(scW, scH);
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);
    refRenderer.current = renderer;

    // Scene
    const scene = new THREE.Scene();

    // Target and camera setup
    const target = new THREE.Vector3(1, 1, 0);
    const initialCameraPosition = new THREE.Vector3(
      Math.sin(0.2 * Math.PI),
      Math.sin(0.2 * Math.PI),
      30 * Math.cos(0.2 * Math.PI),
    );
    const scale = scH * 0.005 + 8;
    const camera = new THREE.OrthographicCamera(
      -scale,
      scale,
      scale,
      -scale,
      0.01,
      5000,
    );
    camera.position.copy(initialCameraPosition);
    camera.lookAt(target);

    // LIGHTING SETUP
    // 1) Hemisphere Light (Sky and Ground Illumination)
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.2);
    scene.add(hemisphereLight);

    // 2) Spot Light
    const spotLight = new THREE.SpotLight(0xffffff, 1050);
    spotLight.position.set(3, 11, 9);
    scene.add(spotLight);

    // CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.target = target;

    // Load model
    loadGLTFModel(scene, urlIslandGLB, {
      receiveShadow: true, // make it true
      castShadow: true,
    }).then(() => {
      animate();
      setLoading(false);
    });

    let req = null;
    let frame = 0;
    const animate = () => {
      req = requestAnimationFrame(animate);
      frame = frame <= 100 ? frame + 1 : frame;

      if (frame <= 100) {
        frame += 1;
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
  }, [urlIslandGLB]);

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
