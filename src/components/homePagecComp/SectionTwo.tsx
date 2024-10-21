"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".sub-heading", {
      opacity: 0,
      stagger: {
        each: 0.05,
        from: "random",
      },
      scrollTrigger: {
        trigger: ".home-part1",
        start: "center 0%",
      },
    });
  });

  return (
    <div ref={mainRef} className="h-fit w-full">
      <h1 className="text-center text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[150px] text-neutral-950 GT">
        <span className="sub-heading">G</span>
        <span className="sub-heading">T</span>{" "}
        <span className="sub-heading">9</span>
        <span className="sub-heading">1</span>
        <span className="sub-heading">1</span>{" "}
        <span className="sub-heading">C</span>
        <span className="sub-heading">A</span>
        <span className="sub-heading">R</span>
        <span className="sub-heading">R</span>
        <span className="sub-heading">E</span>
        <span className="sub-heading">R</span>
        <span className="sub-heading">A</span>
      </h1>
      <div className="h-fit w-full container mx-auto text-neutral-800">
        <h1 className="text-center sm:text-2xl sub-heading text-neutral-950">
          The new Porsche 911 GT3 with touring package can be ordered from the
          end of the year
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-between mt-20">
          <div className="flex flex-col gap-24">
            <div className="sub-heading">
              <h1 className="text-5xl">3.9s</h1>
              <p>Acceleration 0 - 100 km / h</p>
            </div>

            <div className="sub-heading">
              <h1 className="text-5xl">375 kW / 510 PS</h1>
              <p>Power (kW) / Power (PS)</p>
            </div>

            <div className="sub-heading">
              <h1 className="text-5xl">313 km / h</h1>
              <p>Top Speed</p>
            </div>
          </div>
          <Image
            src={"/greenPorsche.AVIF"}
            alt=""
            width={700}
            height={700}
            className="sub-heading object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
