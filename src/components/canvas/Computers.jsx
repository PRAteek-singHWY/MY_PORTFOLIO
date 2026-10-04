import React, { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, PerspectiveCamera, View, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import SceneBoundary from "./SceneBoundary";
import { useCanOrbit, useIsSmall, useReducedMotion } from "../../utils/media";

// Draco + WebP compressed from the original 15.8 MB scene.gltf.
const MODEL = "/desktop_pc/scene.opt.glb";
const DRACO = "/draco/";

// At scale 0.75 the monitor's top edge sits about this far above the model origin.
const MONITOR_TOP = 3.7;
const DESKTOP_Y = -4.5;

const Computers = ({ isSmall, spin, clearBelow, view }) => {
  const computer = useGLTF(MODEL, DRACO);
  const group = useRef();

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    if (spin) g.rotation.y += delta * 0.25;

    // Desktop: keep the monitor under the hero text whatever the viewport height.
    if (!isSmall && clearBelow?.current && view?.current) {
      const text = clearBelow.current.getBoundingClientRect();
      const box = view.current.getBoundingClientRect();
      const unitsPerPx = state.viewport.height / state.size.height;
      const topLimit = state.viewport.height / 2 - (text.bottom - box.top + 28) * unitsPerPx;
      // The model already sits at DESKTOP_Y; the group only ever shifts it further down.
      const shift = Math.min(0, topLimit - MONITOR_TOP - DESKTOP_Y);
      g.position.y = THREE.MathUtils.damp(g.position.y, shift, 8, delta);
    } else {
      g.position.y = 0;
    }
  });

  return (
    <group ref={group}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isSmall ? 0.6 : 0.75}
        position={isSmall ? [0, -2.7, -1.3] : [0, DESKTOP_Y, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

// `clearBelow` is a ref to the hero text block; the model is kept under it.
const ComputersCanvas = ({ className, clearBelow }) => {
  const canOrbit = useCanOrbit();
  const isSmall = useIsSmall();
  const reducedMotion = useReducedMotion();
  const view = useRef();

  return (
    <View ref={view} className={className}>
      <PerspectiveCamera
        makeDefault
        position={[20, 3, 5]}
        fov={25}
        onUpdate={(camera) => camera.lookAt(0, 0, 0)}
      />
      <SceneBoundary>
        <Suspense fallback={<CanvasLoader />}>
          {canOrbit && (
            <OrbitControls
              makeDefault
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          )}
          <Computers isSmall={isSmall} spin={!canOrbit && !reducedMotion} clearBelow={clearBelow} view={view} />
        </Suspense>
      </SceneBoundary>
    </View>
  );
};

useGLTF.preload(MODEL, DRACO);

export default ComputersCanvas;
