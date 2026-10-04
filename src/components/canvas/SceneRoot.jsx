import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerformanceMonitor, Preload, View } from "@react-three/drei";

import { useIsSmall } from "../../utils/media";

// The one WebGL context shared by every mid-page scene (hero computer, tech
// balls, decision threshold, earth). Each scene is a drei <View> that tracks a
// DOM element; this fixed canvas draws them into their rectangles with scissor
// tests. The star field keeps its own canvas, so the page runs two contexts.
const SceneRoot = () => {
  const isSmall = useIsSmall();
  const maxDpr = isSmall ? 1.5 : 2;
  const [dpr, setDpr] = useState(maxDpr);

  return (
    <Canvas
      eventSource={document.getElementById("root")}
      eventPrefix="client"
      dpr={[1, dpr]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      <PerformanceMonitor
        onDecline={() => setDpr(1)}
        onIncline={() => setDpr(maxDpr)}
      />
      <View.Port />
      <Preload all />
    </Canvas>
  );
};

export default SceneRoot;
