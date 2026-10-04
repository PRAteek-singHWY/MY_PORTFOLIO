import React, { useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from "three";

import SceneBoundary from "./SceneBoundary";
import { useReducedMotion } from "../../utils/media";
import { themeColor } from "../../utils/theme";

// Module C's decision layer, drawn as what it does. Height is confidence.
// The plane is the 0.80 threshold. Above it the engine links on its own;
// below it the candidate goes to a human.
//
// Counts above the plane are the measured ones: 172 auto-links, 6 of them
// wrong (96.5% precision). Their heights and all positions are illustrative,
// as is everything below the plane, whose count was not published.
export const THRESHOLD = 0.8;
export const AUTO_LINKED = 172;
export const WRONG = 6;
const ILLUSTRATIVE_BELOW = 150;

// Theme colours, read once: the chart series for auto-links, muted for review.
// The wrong links are ink rings, so shape carries the difference, not colour alone.
const ABOVE = themeColor("--chart-series", "#9085e9");
const GREY = themeColor("--chart-muted", "#858D99");
const WRONG_RING = themeColor("--chart-ink", "#E9EBEE");

const HEIGHT = 3.2;
const RADIUS = 1.7;
const yOf = (confidence) => (confidence - 0.5) * HEIGHT;

// Small deterministic PRNG so the scatter is stable between renders.
const rng = (seed) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const scatter = (count, lo, hi, random) =>
  Array.from({ length: count }, () => {
    const r = RADIUS * Math.sqrt(random());
    const a = random() * Math.PI * 2;
    const c = lo + (hi - lo) * Math.sqrt(random()); // denser near the top of each band
    return [Math.cos(a) * r, yOf(c), Math.sin(a) * r];
  });

const Points = ({ positions, color, geometry, scale }) => {
  const ref = useRef();

  useLayoutEffect(() => {
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const s = new THREE.Vector3(scale, scale, scale);
    positions.forEach((p, i) => {
      m.compose(new THREE.Vector3(...p), q, s);
      ref.current.setMatrixAt(i, m);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  }, [positions, scale]);

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, positions.length]}>
      {geometry}
      <meshBasicMaterial color={color} toneMapped={false} />
    </instancedMesh>
  );
};

const Scene = ({ animate }) => {
  const group = useRef();

  const { above, wrong, below } = useMemo(() => {
    const random = rng(172);
    const allAbove = scatter(AUTO_LINKED, THRESHOLD + 0.005, 1, random);
    return {
      above: allAbove.slice(WRONG),
      wrong: allAbove.slice(0, WRONG),
      below: scatter(ILLUSTRATIVE_BELOW, 0.2, THRESHOLD - 0.01, random),
    };
  }, []);

  useFrame((_, delta) => {
    if (animate && group.current) group.current.rotation.y += delta * 0.12;
  });

  const planeY = yOf(THRESHOLD);

  return (
    <group ref={group} rotation={[0, 0.4, 0]}>
      <Points
        positions={above}
        color={ABOVE}
        scale={0.045}
        geometry={<sphereGeometry args={[1, 12, 12]} />}
      />
      <Points
        positions={wrong}
        color={WRONG_RING}
        scale={0.075}
        geometry={<torusGeometry args={[1, 0.28, 8, 20]} />}
      />
      <Points
        positions={below}
        color={GREY}
        scale={0.04}
        geometry={<sphereGeometry args={[1, 10, 10]} />}
      />

      {/* the 0.80 threshold */}
      <mesh position={[0, planeY, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[RADIUS + 0.35, 64]} />
        <meshBasicMaterial
          color="#E9EBEE"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[0, planeY, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[RADIUS + 0.33, RADIUS + 0.36, 96]} />
        <meshBasicMaterial color="#E9EBEE" transparent opacity={0.5} side={THREE.DoubleSide} />
      </mesh>

      {/* confidence axis */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.006, 0.006, HEIGHT, 6]} />
        <meshBasicMaterial color="#3A4150" />
      </mesh>
    </group>
  );
};

const ThresholdCanvas = ({ className }) => {
  const reducedMotion = useReducedMotion();

  return (
    <View className={className}>
      <PerspectiveCamera
        makeDefault
        position={[0, 1.2, 6.9]}
        fov={36}
        onUpdate={(camera) => camera.lookAt(0, 0.32, 0)}
      />
      <SceneBoundary>
        <Scene animate={!reducedMotion} />
      </SceneBoundary>
    </View>
  );
};

export default ThresholdCanvas;
