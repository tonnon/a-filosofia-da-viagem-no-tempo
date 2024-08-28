import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ImprovedNoise } from "three/examples/jsm/math/ImprovedNoise";

import './App.css'

extend({ OrbitControls });

const Tube = () => {
  const tubeRef = useRef();
  const tubeRef2 = useRef();
  const tubeLength = 200; // Constante de comprimento do tubo

  useEffect(() => {
    const radius = 3;
    const tubeGeo = new THREE.CylinderGeometry(radius, radius, tubeLength, 128, 4096, true);
    const tubeVerts = tubeGeo.attributes.position;
    const colors = [];
    const noise = new ImprovedNoise();
    let p = new THREE.Vector3();
    let v3 = new THREE.Vector3();
    const noisefreq = 0.1;
    const noiseAmp = 0.5;
    const color = new THREE.Color();
    const hueNoiseFreq = 0.005;

    for (let i = 0; i < tubeVerts.count; i += 1) {
      p.fromBufferAttribute(tubeVerts, i);
      v3.copy(p);
      let vertexNoise = noise.noise(
        v3.x * noisefreq,
        v3.y * noisefreq,
        v3.z
      );
      v3.addScaledVector(p, vertexNoise * noiseAmp);
      tubeVerts.setXYZ(i, v3.x, p.y, v3.z);

      let colorNoise = noise.noise(v3.x * hueNoiseFreq, v3.y * hueNoiseFreq, i * 0.001 * hueNoiseFreq);
      color.setHSL(0.5 - colorNoise, 1, 0.5);
      colors.push(color.r, color.g, color.b);
    }

    const mat = new THREE.PointsMaterial({ size: 0.03, vertexColors: true });

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", tubeVerts);
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    tubeRef.current.geometry = geo;
    tubeRef.current.material = mat;
    tubeRef2.current.geometry = geo;
    tubeRef2.current.material = mat;
  }, []);

  useFrame(() => {
    const speed = 0.02; // Velocidade de movimento do túnel
    tubeRef.current.position.z += speed;
    tubeRef2.current.position.z += speed;

    if (tubeRef.current.position.z > tubeLength) {
      tubeRef.current.position.z = tubeRef2.current.position.z - tubeLength;
    }
    if (tubeRef2.current.position.z > tubeLength) {
      tubeRef2.current.position.z = tubeRef.current.position.z - tubeLength;
    }
  });

  return (
    <>
      <points ref={tubeRef} position={[0, 0, 0]} rotation={[Math.PI * 0.5, 0, 0]} />
      <points ref={tubeRef2} position={[0, 0, -tubeLength]} rotation={[Math.PI * 0.5, 0, 0]} />
    </>
  );
};

const App = () => {
  return (
    <div className="anim">
      <Canvas
        camera={{ position: [0.5, 0.5, 15], fov: 75 }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0x000000));
          gl.fog = new THREE.FogExp2(0x000000, 0.025);
        }}
      >
        <Tube />
      </Canvas>
    </div>
  );
};

export default App;
