"use client";
import CanvasModel from "@/canvas/Index";
import React from "react";
import SectionTwo from "@/components/homePagecComp/SectionTwo";
import state from "@/store";
import { useSnapshot } from "valtio";
import Slider from "@/components/homePagecComp/Slider";
import Porsche from "@/canvas/Porsche";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <div className="min-h-screen w-full">
      <div className="h-screen w-full overflow-hidden relative">
        <div className="home-part1 absolute h-2/4 w-full  z-0 flex items-center justify-center bg-black overflow-hidden"></div>
        <CanvasModel>
          <Porsche />
        </CanvasModel>
        <div className="h-[50vh] w-full z-0 absolute top-2/4 flex items-center justify-center">
          <h1
            className="font-extrabold text-4xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[200px] 2xl:text-[350px] z-20 transition-colors ease-in PE"
            style={{ color: snap.paintColor }}
          >
            P
            <span
              className="text-white transition-colors ease-in"
              style={{ color: snap.paintColor }}
            >
              ORSCH
            </span>
            E
          </h1>
        </div>
      </div>

      <SectionTwo />
      <Slider />

      <div className="h-[50vh] w-full bg-black">
        <video
          src="/por911video.mp4"
          className="h-full w-full object-cover opacity-50"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Home;
