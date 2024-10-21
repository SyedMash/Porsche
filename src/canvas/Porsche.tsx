"use client";
import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { easing } from "maath";
import state from "@/store";
import { useSnapshot } from "valtio";
import { colorsCombinations } from "@/constants";
import { MeshStandardMaterial } from "three";

gsap.registerPlugin(ScrollTrigger);

const Porsche = (props: GroupProps) => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/free_porsche_911_carrera_4s.glb");
  const groupRef = React.useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
    }
    easing.dampC((materials.window as MeshStandardMaterial).color, snap.windowColor, 0.25, delta);
    easing.dampC((materials.silver as MeshStandardMaterial).color, snap.silverColor, 0.25, delta);
    easing.dampC((materials.plastic as MeshStandardMaterial).color, snap.plasticColor, 0.25, delta);
    easing.dampC((materials.rubber as MeshStandardMaterial).color, snap.rubberColor, 0.25, delta);
    easing.dampC((materials.paint as MeshStandardMaterial).color, snap.paintColor, 0.25, delta);
  });

  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: ".home-part1",
  //     start: "top top",
  //     end: "bottom top",
  //     onToggle: (self) => {
  //       if (self.isActive) {
  //         state.windowColor = "black";
  //         state.silverColor = "black";
  //         state.plasticColor = "black";
  //         state.rubberColor = "black";
  //         state.paintColor = "black";
  //       } else {
  //         state.windowColor = "white";
  //         state.silverColor = "white";
  //         state.plasticColor = "white";
  //         state.rubberColor = "white";
  //         state.paintColor = "white";
  //       }
  //     },
  //   });
  // }, []);

  useEffect(() => {
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * colorsCombinations.length);
      state.windowColor = colorsCombinations[randomIndex].windowColor;
      state.silverColor = colorsCombinations[randomIndex].silverColor;
      state.plasticColor = colorsCombinations[randomIndex].plasticColor;
      state.rubberColor = colorsCombinations[randomIndex].rubberColor;
      state.paintColor = colorsCombinations[randomIndex].paintColor;
    }, 5000);
  },[]);

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group
        position={[-0.015, -0.009, 0.063]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.578}
      >
        <group position={[0, -0.003, 0.007]}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.windshield_0 as THREE.Mesh).geometry}
            material={materials.window}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.windshield_1 as THREE.Mesh).geometry}
            material={materials.plastic}
          />
        </group>
        <group position={[0, 0, 0.029]}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cylinder000_0 as THREE.Mesh).geometry}
            material={materials.silver}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cylinder000_1 as THREE.Mesh).geometry}
            material={materials.plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cylinder000_2 as THREE.Mesh).geometry}
            material={materials.rubber}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cylinder000_3 as THREE.Mesh).geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group position={[0, 0, 0.029]}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cylinder001_0 as THREE.Mesh).geometry}
            material={materials.silver}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cylinder001_1 as THREE.Mesh).geometry}
            material={materials.plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cylinder001_2 as THREE.Mesh).geometry}
            material={materials.rubber}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cylinder001_3 as THREE.Mesh).geometry}
            material={materials["Material.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.window_rear_0 as THREE.Mesh).geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Plane002_0 as THREE.Mesh).geometry}
          material={materials.paint}
          position={[-1.053, 3.51, -0.126]}
          rotation={[-1.439, -0.62, 0.775]}
          scale={0.024}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Plane003_0 as THREE.Mesh).geometry}
          material={materials.paint}
          position={[0.436, 3.723, -0.117]}
          rotation={[-1.483, 0.105, 0.803]}
          scale={0.024}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Plane004_0 as THREE.Mesh).geometry}
          material={materials.paint}
          position={[-0.488, 3.684, -0.328]}
          rotation={[-1.415, -0.045, 0.802]}
          scale={0.059}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.boot_0 as THREE.Mesh).geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.underbody_0 as THREE.Mesh).geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Plane_0 as THREE.Mesh).geometry}
          material={materials.Material}
          position={[0, 0, -1.054]}
          scale={[6.953, 9.785, 7.496]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_0 as THREE.Mesh).geometry}
          material={materials.plastic}
          position={[0.036, -1.56, 0.333]}
          rotation={[0.709, -0.071, -0.245]}
          scale={[0.014, 0.014, 0.012]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.bumper_front004_0 as THREE.Mesh).geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.bumper_front004_1 as THREE.Mesh).geometry}
          material={materials.lights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.bumper_front004_2 as THREE.Mesh).geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.bumper_front007_0 as THREE.Mesh).geometry}
          material={materials.glass}
          rotation={[-0.006, 0, 0]}
          scale={1.036}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.bumper_front009_0 as THREE.Mesh).geometry}
          material={materials.tex_shiny}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.bumper_front001_0 as THREE.Mesh).geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.bumper_front001_1 as THREE.Mesh).geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.bumper_front001_2 as THREE.Mesh).geometry}
          material={materials.lights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.bumper_front003_0 as THREE.Mesh).geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.bumper_front003_1 as THREE.Mesh).geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.boot001_0 as THREE.Mesh).geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.boot002_0 as THREE.Mesh).geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Plane001_0 as THREE.Mesh).geometry}
          material={materials.tex_shiny}
          position={[0.005, 3.581, 0.107]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.boot003_0 as THREE.Mesh).geometry}
          material={materials.tex_shiny}
          position={[0, 0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.boot004_0 as THREE.Mesh).geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.boot005_0 as THREE.Mesh).geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.boot006_0 as THREE.Mesh).geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.window_rear001_0 as THREE.Mesh).geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.boot007_0 as THREE.Mesh).geometry}
          material={materials.logo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Plane005_0 as THREE.Mesh).geometry}
          material={materials.license}
          position={[0, 3.704, -0.292]}
          rotation={[0.114, 0, 0]}
          scale={[0.393, 0.393, 0.356]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Plane006_0 as THREE.Mesh).geometry}
          material={materials.license}
          position={[0, -3.75, -0.432]}
          rotation={[0.082, 0, Math.PI]}
          scale={[0.395, 0.395, 0.357]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.boot008_0 as THREE.Mesh).geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.boot009_0 as THREE.Mesh).geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.boot010_0 as THREE.Mesh).geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.boot011_0 as THREE.Mesh).geometry}
          material={materials.coat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.boot011_0_1 as THREE.Mesh).geometry}
          material={materials.coat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube002_0 as THREE.Mesh).geometry}
          material={materials.full_black}
          scale={[0.332, 0.318, 0.318]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/free_porsche_911_carrera_4s.glb");

export default Porsche;
