"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Environment, PerspectiveCamera, Center } from "@react-three/drei";
const CanvasModel = ({children}:{children:React.ReactNode}) => {
  return (
    <Canvas className="z-20">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <Environment preset="city" />
      <Center>
        {children}
      </Center>
    </Canvas>
  );
};

export default CanvasModel;
