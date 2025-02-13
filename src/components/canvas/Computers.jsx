// // first three.js react-3 fiber canvas in computer

// import React, { Suspense, useEffect, useState } from 'react'


// // canavs is an empty canvas allowing us to place smething on it
// import { Canvas } from "@react-three/fiber"

// //helpers which are going to allow us to draw on this canvas
// //useGLTF--> allows us to import 3-d models
// import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

// import CanvasLoader from "../Loader"


// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf")
//   return (
//     // <div>Computers</div>

//     //when creating three js elemets we gonna use mesh instead of div//
//     <mesh>
//       {/* //adding light to mesh otherwise we wouldn't be able to see anything or even if we see then that 3D-model is gonna be dark//
//     */}
//       <hemisphereLight intensity={0.15}
//         groundColor="black"
//       />
//       <pointLight intensity={1} />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}

//         // The penumbra property represents the softness of the shadows cast by the light source. A value of 1 means the shadows will have a smooth transition between light and dark, resulting in soft edges. 
//         penumbra={1}
//         intensity={1}
//         castShadow

//         // shadow-mapSiz property defines the resolution of the shadow map used by the light source for casting shadows
//         shadow-mapSize={1024}

//       />

//       <primitive
//         //primitive is used to pass objects
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position=
//         {isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />

//     </mesh>
//   )
// }

// const ComputersCanvas = () => {

//   //mobile screen visualistaion handling to make the web app look the same and awesome even on mobile//
//   const [isMobile, setIsMobile] = useState(false)
//   useEffect(() => {

//     // Checking if we are on a mobile device
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);

//     // Define a function to handle changes in the media query
//     const handleMediaQueryChange = (event) => {
//       // Update the state variable to reflect the current match status
//       setIsMobile(event.matches);
//     }

//     // Adding the callback function as  an event listener for the chnages made to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     // Clean up function to remove the event listener when component is unmounted
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     }
//   })


//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       dpr={[1, 2]}

//       // the way we are looking at our 3d model from
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >

//       {/* having a loader while our model is loading */}
//       {/* suspense helps provide a smooth user experience by allowing you to define fallback content to be displayed while the component is loading. */}
//       <Suspense fallback=
//         {<CanvasLoader />} >

//         {/* orbit controls to move the model left and right */}
//         <OrbitControls
//           // no zooming allowed
//           enableZoom={false}

//           // rotate the model at a specific angle min and max angle here it's min-90 :deg" and max-90 "deg"
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers
//           isMobile={isMobile}

//         />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   )
// }

// export default ComputersCanvas




import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
  frameloop="demand"
  shadows
  dpr={[1, 2]}
  camera={{ position: [20, 3, 5], fov: 25 }}
  gl={{ preserveDrawingBuffer: true }}
  className="hidden lg:block"
>
  {/* Your canvas content */}

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;