import React, { Suspense, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Decal, OrthographicCamera, View, useTexture } from "@react-three/drei";

import SceneBoundary from "./SceneBoundary";
import { useReducedMotion } from "../../utils/media";

// One scene for every technology. It used to be one <Canvas> per ball, which
// meant twelve WebGL contexts for this section alone. The camera is
// orthographic with one world unit per CSS pixel, so each ball sits exactly
// over its DOM cell and the grid stays responsive.
const Ball = ({ imgUrl, cell, view, index, animate }) => {
  const [decal] = useTexture([imgUrl]);
  const group = useRef();
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    const g = group.current;
    const c = cell.current;
    const v = view.current;
    if (!g || !c || !v) return;

    const cr = c.getBoundingClientRect();
    const vr = v.getBoundingClientRect();
    const size = Math.min(cr.width, cr.height);
    const t = state.clock.elapsedTime;
    const bob = animate ? Math.sin(t * 1.6 + index) * size * 0.04 : 0;

    g.position.set(
      cr.left + cr.width / 2 - (vr.left + vr.width / 2),
      vr.top + vr.height / 2 - (cr.top + cr.height / 2) + bob,
      0
    );
    if (mesh.current) mesh.current.scale.setScalar(size * 0.36);

    // Wobble around facing forward so the logo stays readable.
    if (animate) {
      const reach = hovered ? 0.7 : 0.3;
      g.rotation.y = THREE.MathUtils.damp(
        g.rotation.y,
        Math.sin(t * (hovered ? 3 : 0.7) + index) * reach,
        6,
        delta
      );
      g.rotation.x = Math.sin(t * 0.8 + index) * 0.15;
    }
  });

  return (
    <group ref={group}>
      <mesh
        ref={mesh}
        scale={40}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#45A94F"
          roughness={0.2}
          polygonOffset
          polygonOffsetFactor={-5}
          metalness={0.5}
          flatShading
        />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1.1} map={decal} flatShading />
      </mesh>
    </group>
  );
};

const BallGrid = ({ items, cells, className }) => {
  const view = useRef();
  const reducedMotion = useReducedMotion();

  return (
    <View ref={view} className={className}>
      <OrthographicCamera makeDefault position={[0, 0, 500]} near={0.1} far={2000} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[0, 0, 500]} intensity={1} />
      <SceneBoundary>
        <Suspense fallback={null}>
          {items.map((item, index) => (
            <Ball
              key={item.name}
              imgUrl={item.icon}
              cell={cells[index]}
              view={view}
              index={index}
              animate={!reducedMotion}
            />
          ))}
        </Suspense>
      </SceneBoundary>
    </View>
  );
};

export default BallGrid;
