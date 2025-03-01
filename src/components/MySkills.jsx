import { useGSAP } from "@gsap/react";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const MySkills = () => {
  useGSAP(() => {
    gsap.to("#scroll-ball-skills", {
      y: -150,
      x: 80,
      opacity: 0,
    });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-skills",
        start: "-200px 60%",
        end: "top 10%",
        scrub: 3,
        markers: true,
      },
    });

    timeline.to("#scroll-ball-skills", {
      y: 100,
      opacity: 1,
      rotate: 360,
      borderRadius: "10%",
      duration: 1,
      ease: "bounce.out",
    });
    timeline.to("#scroll-ball-skills", {
      x: "90vw",
      opacity: 1,
      rotate: 360,
      borderRadius: "100%",
      ease: "power1.inOut",
    });
    timeline.from("#NySkills-head", {
      y: 620,
      opacity: 0,
      ease: "power1.inOut",
    });
  });
  return (
    <section
      id="scroll-skills"
      className=" min-h-screen flex flex-col  text-white"
    >
      <div
        id="scroll-ball-skills"
        className=" absolute w-5 h-5 rounded-full  bg-[#FF7F50]"
      ></div>
      <div className=" flex flex-col items-center justify-center">
        <div id="NySkills-head" className=" flex text-5xl mt-20 gap-2 font-bold">
          <h2>My </h2>
          <h2 className=" text-[#FF7F50]">Skills</h2>
        </div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default MySkills;
