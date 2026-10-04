import React, { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, View, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import SceneBoundary from "./SceneBoundary";
import { useCanOrbit, useReducedMotion } from "../../utils/media";

// Draco + WebP compressed from the original 3.0 MB scene.gltf.
const MODEL = "/planet/scene.opt.glb";
const DRACO = "/draco/";

const Earth = ({ spin }) => {
  const earthy = useGLTF(MODEL, DRACO);
  const ref = useRef();
  useFrame((_, delta) => {
    if (spin && ref.current) ref.current.rotation.y += delta * 0.35;
  });
  return <primitive ref={ref} object={earthy.scene} scale={2.1} position-y={0} rotation-y={0} />;
};

const EarthCanvas = ({ className }) => {
  const canOrbit = useCanOrbit();
  const reducedMotion = useReducedMotion();

  return (
    <View className={className}>
      <PerspectiveCamera
        makeDefault
        fov={45}
        near={0.1}
        far={200}
        position={[-4, 3, 6]}
        onUpdate={(camera) => camera.lookAt(0, 0, 0)}
      />
      <SceneBoundary>
        <Suspense fallback={<CanvasLoader />}>
          {canOrbit && (
            <OrbitControls
              makeDefault
              autoRotate={!reducedMotion}
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          )}
          <Earth spin={!canOrbit && !reducedMotion} />
        </Suspense>
      </SceneBoundary>
    </View>
  );
};

useGLTF.preload(MODEL, DRACO);

export default EarthCanvas;
