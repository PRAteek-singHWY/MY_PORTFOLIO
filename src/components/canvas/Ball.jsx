import React, { Suspense } from 'react'
// canavs is an empty canvas allowing us to place smething on it
import { Canvas } from "@react-three/fiber"
import CanvasLoader from "../Loader"
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from "@react-three/drei"

const Ball_1 = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* //setting up ambient light to see something// */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />


      <mesh castShadow receiveShadow scale={2.75}>
      {/* the geometrical shape */}
        <icosahedronGeometry args={[1, 1]} />

        {/* //adding material to icosahedronGeometry i.e shape  */}
        <meshStandardMaterial
          color="#45A94F"
          roughness={0.2}
          polygonOffset
          polygonOffsetFactor={-5}
          metalness={0.5}
          flatShading

        />

        {/* Decal is a technique used to apply a 2D image or texture onto a 3D object's surface. It essentially allows you to add detailed and realistic textures, logos, or decals onto existing 3D models. */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.1}
          map={decal}
          flatShading

        />
      </mesh>
    </Float>
  )
}





const BallCanvas1 = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >

      {/* having a loader while our model is loading */}
      {/* suspense helps provide a smooth user experience by allowing you to define fallback content to be displayed while the component is loading. */}
      <Suspense fallback={<CanvasLoader />} >
        {/* orbit controls to move the model left and right */}
        <OrbitControls
          // no zooming allowed
          enableZoom={false}
        // rotate the model at a specific angle min and max angle here it's min-90 :deg" and max-90 "deg"
        />
        <Ball_1 imgUrl={icon} />

      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas1