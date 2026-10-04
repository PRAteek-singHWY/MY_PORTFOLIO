import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useIsSmall, useReducedMotion } from "../../utils/media";
import { themeColor } from "../../utils/theme";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({ frozen, ...props }) => {
  const ref = useRef();

  // The buffer length must be a multiple of 3 (x, y, z per star), or maath
  // writes NaN and the scene goes white. 2502 = 834 stars, half the original.
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(2502), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (frozen) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={themeColor("--three-star", "#f272c8")}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Fixed to the viewport. It used to stretch over the whole page, making the
// canvas as tall as the document (over 19,000px on a phone).
const StarsCanvas = () => {
  const isSmall = useIsSmall();
  const reducedMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={isSmall ? [1, 1.5] : [1, 2]}
        frameloop={reducedMotion ? "demand" : "always"}
      >
        <Suspense fallback={null}>
          <Stars frozen={reducedMotion} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
