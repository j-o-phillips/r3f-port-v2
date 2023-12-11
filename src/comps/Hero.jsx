import { Canvas } from "@react-three/fiber";
import React from "react";
import Blob from "./Blob";
import { OrbitControls } from "@react-three/drei";

const Hero = () => {
  return (
    <>
      <div className="h-screen  ">
        <div
          className="text-gray-300 text-5xl absolute m-4 left-4 top-16 md:text-6xl md:left-20 md:top-16 "
          style={{ fontFamily: "Open Sans, sans serif" }}
        >
          <h1>Jake Phillips</h1>
        </div>
        <div
          className="text-gray-400 text-4xl absolute m-4 left-8 top-32 sub-title md:text-5xl md:left-28"
          style={{ fontFamily: "Open Sans, sans serif" }}
        >
          <h1>Developer</h1>
        </div>
        <Canvas camera={{ position: [-20, 0, 0], fov: 25, near: 5, far: 20 }}>
          <Blob />
        </Canvas>
      </div>
    </>
  );
};

export default Hero;
