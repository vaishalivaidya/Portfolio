import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Hero3D = ({ primary = "#00cfff", secondary = "#a855ff" }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 360;
    const height = mount.clientHeight || 360;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020216, 0.12);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // MAIN ORB (torus knot)
    const orbMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(primary),
      emissive: new THREE.Color(secondary),
      metalness: 0.9,
      roughness: 0.15,
    });

    const orbGeo = new THREE.TorusKnotGeometry(1.4, 0.42, 220, 32);
    const orbMesh = new THREE.Mesh(orbGeo, orbMat);
    scene.add(orbMesh);

    // WIREFRAME SHELL
    const shellGeo = new THREE.SphereGeometry(2.1, 32, 32);
    const shellMat = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: new THREE.Color(primary),
      transparent: true,
      opacity: 0.35,
    });
    const shellMesh = new THREE.Mesh(shellGeo, shellMat);
    scene.add(shellMesh);

    // PARTICLES
    const particleCount = 260;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 2.4 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: new THREE.Color("#ffffff"),
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // LIGHTS
    const ambient = new THREE.AmbientLight(0x666688, 1.6);
    scene.add(ambient);

    const light1 = new THREE.PointLight(new THREE.Color(primary), 2.2, 25);
    light1.position.set(4, 3, 6);
    scene.add(light1);

    const light2 = new THREE.PointLight(new THREE.Color(secondary), 1.8, 25);
    light2.position.set(-4, -3, 3);
    scene.add(light2);

    // ANIMATION LOOP
    let frameId;
    const animate = () => {
      orbMesh.rotation.x += 0.004;
      orbMesh.rotation.y += 0.007;
      shellMesh.rotation.y -= 0.002;
      particles.rotation.y += 0.0008;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // RESIZE HANDLER
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth || 360;
      const h = mount.clientHeight || 360;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // CLEANUP
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      orbGeo.dispose();
      shellGeo.dispose();
      particleGeo.dispose();
      orbMat.dispose();
      shellMat.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [primary, secondary]);

  return <div ref={mountRef} className="hero-3d-orb" />;
};

export default Hero3D;
