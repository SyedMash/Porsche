"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import {
  Environment,
  PerspectiveCamera,
  Center,
  useProgress,
  Html,
} from "@react-three/drei";
import { Suspense } from "react";

function Loader() {
  const { progress } = useProgress();

  return (
    <Html
      center
      style={{
        color: "white",
        fontSize: 30,
        fontWeight: 800,
        textAlign: "center",
      }}
    >
      {progress.toFixed(2)} % loaded
    </Html>
  );
}
const CanvasModel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Canvas className="z-20">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <Environment preset="city" />
      <Suspense fallback={<Loader />}>
        <Center>{children}</Center>
      </Suspense>
    </Canvas>
  );
};

export default CanvasModel;
