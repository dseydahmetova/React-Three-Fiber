import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import Model from "./Model"
import Box from "./Box"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Canvas>
    <Model />
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />
    <Box position={[-1.2, -2, 0]} />
    <Box position={[1.2, -2, 0]} />
    <Model />
    <OrbitControls />
  </Canvas>

);


