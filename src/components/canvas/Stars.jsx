import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  // this is a sphere variable that holds the positions of randomly generated 3D points within a sphere

  // The random.inSphere function is a custom function or a utility provided by a library to generate random positions within a sphere. 

  const sphere =
   random.inSphere(new Float32Array(5000), { radius: 1.2 })
   useFrame((state,delta)=>{
    ref.current.rotation.x -=  delta / 10;
    ref.current.rotation.y -= delta / 15
   })
  return (
    <group rotation={[0, 0, Math.PI / 4]} >
      {/* //Points is handling the rendering  of elements in 3-D space */}
      {/* here as we said earlier ref is used to pass reference and interact with these Points */}
      <Points ref={ref} positions={sphere}

        // The stride prop specifies the number of elements per vertex. In this case, stride={3} here each vertex has three elements

        //a vertex means a point in 3D space

        //each vertex typically contains multiple elments but here using the stride={3} property we have set the no. of elemnts in one 3D point to 3 (i.e along the x,y,z axis)

        stride={3}
        // In the context of 3D graphics and rendering, frustumCulled is a property or setting that determines whether an object or element should be culled or hidden from view when it is outside of the camera's frustum.
        frustumCulled{...props}
>
  <PointMaterial
transparent
color="#f272c8"
size={0.002}
//so dependig upon the distance from the camera the size of the stars is gonna change as distance increases (i.e if we r on big screen star sgonna become smaller and move faraway annd vice-versa)

sizeAttenuation={true}
depthWrite={true}


  />
</Points>
    </group>
  )
}
//over all in the above code random 3d points are being genrated an dinside teh return()
// they are being given properties about  no. of elems per vertex inside th epositions container

const StarsCanvas = () => {


  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
          <Preload all />

        </Suspense>


      </Canvas>

    </div>
  )
}

export default StarsCanvas