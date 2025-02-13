
import React, { Suspense, useEffect, useState } from 'react'

// canavs is an empty canvas allowing us to place smething on it
import { Canvas } from "@react-three/fiber"


//helpers which are going to allow us to draw on this canvas
//useGLTF--> allows us to import 3-d models
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader"



const Earth = () => {


  const earthy = useGLTF("./planet/scene.gltf")
  return (




    <primitive
      //primitive is used to pass objects
      object={earthy.scene}
      scale={2.1}
      position-y={0}
      rotation-y={0}


    />

  )
}



const EarthCanvas = () => {


  return (
    <Canvas
      frameloop="demand"
      shadows
      // the way we are looking at our 3d model from
      dpr={[1, 2]}

      gl={{ preserveDrawingBuffer: true }}
      camera={
        {
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6]
        }}
    >

      {/* having a loader while our model is loading */}
      {/* suspense helps provide a smooth user experience by allowing you to define fallback content to be displayed while the component is loading. */}
      <Suspense fallback=
        {<CanvasLoader />} >
        {/* here fallback means while it's loading u have to show what we have on our canvas loader  that is two decimal percentage */}


        {/* and instead we gonna use orbit Controls */}
        {/* orbit controls to move the model left and right */}
        <OrbitControls
          //auto rotate
          autoRotate
          // no zooming allowed
          enableZoom={false}

          // rotate the model at a specific angle min and max angle here it's min-90 :deg" and max-90 "deg"
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>

    </Canvas>
  )
}

export default EarthCanvas