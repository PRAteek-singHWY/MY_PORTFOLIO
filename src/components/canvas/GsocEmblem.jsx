import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from "three";

import SceneBoundary from "./SceneBoundary";
import { useReducedMotion } from "../../utils/media";
import { themeColor } from "../../utils/theme";

// A procedural emblem for Google Summer of Code 2026: a gold sun with twelve
// rays and a code glyph, </>, extruded on its face. Built from geometry so it
// weighs nothing and needs no model download.

const SUN = "#F9AB00";
const RAY = "#E37400";
const GLYPH = "#FFFFFF";

const extrude = { depth: 0.14, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.025, bevelSegments: 3 };

// A chevron as one closed outline: an open "<" with stroke width w.
const chevron = (w = 0.16, h = 0.62, reach = 0.42) => {
  const s = new THREE.Shape();
  s.moveTo(reach, h);
  s.lineTo(reach - w * 1.1, h);
  s.lineTo(-0.02, 0);
  s.lineTo(reach - w * 1.1, -h);
  s.lineTo(reach, -h);
  s.lineTo(w * 0.95, 0);
  s.closePath();
  return s;
};

const slash = () => {
  const s = new THREE.Shape();
  const w = 0.085;
  s.moveTo(0.2 - w, 0.72);
  s.lineTo(0.2 + w, 0.72);
  s.lineTo(-0.2 + w, -0.72);
  s.lineTo(-0.2 - w, -0.72);
  s.closePath();
  return s;
};

const Emblem = ({ animate }) => {
  const group = useRef();
  const rays = useRef();

  const geo = useMemo(() => {
    const left = new THREE.ExtrudeGeometry(chevron(), extrude);
    const right = left.clone();
    right.rotateY(Math.PI);
    const mid = new THREE.ExtrudeGeometry(slash(), extrude);
    [left, right, mid].forEach((g) => g.center());
    return { left, right, mid };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (!animate) return;
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.6) * 0.55;
      group.current.position.y = Math.sin(t * 1.1) * 0.08;
    }
    if (rays.current) rays.current.rotation.z -= delta * 0.25;
  });

  return (
    <group ref={group}>
      {/* sun disc */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.05, 1.05, 0.22, 64]} />
        <meshStandardMaterial color={SUN} metalness={0.35} roughness={0.35} emissive={SUN} emissiveIntensity={0.18} />
      </mesh>
      {/* rim */}
      <mesh position={[0, 0, 0.12]}>
        <torusGeometry args={[1.05, 0.05, 16, 96]} />
        <meshStandardMaterial color={RAY} metalness={0.5} roughness={0.3} />
      </mesh>
      {/* rays */}
      <group ref={rays}>
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i / 12) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(a) * 1.42, Math.sin(a) * 1.42, 0]} rotation={[0, 0, a]}>
              <boxGeometry args={[0.42, 0.13, 0.16]} />
              <meshStandardMaterial color={i % 2 ? SUN : RAY} metalness={0.3} roughness={0.4} />
            </mesh>
          );
        })}
      </group>
      {/* </> on the face */}
      <group position={[0, 0, 0.2]} scale={0.62}>
        <mesh geometry={geo.left} position={[-0.72, 0, 0]}>
          <meshStandardMaterial color={GLYPH} metalness={0.1} roughness={0.25} />
        </mesh>
        <mesh geometry={geo.mid}>
          <meshStandardMaterial color={GLYPH} metalness={0.1} roughness={0.25} />
        </mesh>
        <mesh geometry={geo.right} position={[0.72, 0, 0]}>
          <meshStandardMaterial color={GLYPH} metalness={0.1} roughness={0.25} />
        </mesh>
      </group>
    </group>
  );
};

const GsocEmblem = ({ className }) => {
  const reducedMotion = useReducedMotion();
  return (
    <View className={className}>
      <PerspectiveCamera makeDefault position={[0, 0, 6.2]} fov={40} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 6]} intensity={1.6} />
      <pointLight position={[-4, -2, 4]} intensity={0.8} color={themeColor("--three-light", "#8B7CF6")} />
      <SceneBoundary>
        <Emblem animate={!reducedMotion} />
      </SceneBoundary>
    </View>
  );
};

export default GsocEmblem;
