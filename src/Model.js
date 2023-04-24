import React from 'react'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'

function Model() {
    const apple = useGLTF("./GiftBox_gltf.gltf")
  
    return (
    <>
    <OrbitControls/>
      <primitive object={apple.scene}/>
<Environment preset = {"city"}/>
    </>
  )
}

export default Model
