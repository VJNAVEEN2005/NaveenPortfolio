import { useGSAP } from "@gsap/react";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { motion } from "framer-motion";
import {
  programmingLanguages,
  development,
  toolsAndPlatforms,
} from "../assets/Skills/skillsData";
import Tilt from "react-parallax-tilt";
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
        scrub: 2,
        //markers: true,
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
      duration: 4,
    });
    timeline.from("#NySkills-head", {
      y: 620,
      opacity: 0,
      ease: "power1.inOut",
    });
    timeline.from(".skill-container", {
      y: -100,
      opacity: 0,
      delay: 0.5,
      stagger: {
        amount: 0.3,
        from: "start",
      },
      ease: "power2.out",
    });

    timeline.to("#scroll-ball-skills", {
      y: "90vh",
      backgroundColor: "#1A1A1A",
      borderWidth: 2,
      duration: 1,
      borderColor: "#FF7F50",
    });

    timeline.from("#skills-overview", {
      y: -100,
      opacity: 0,
      ease: "power1.inOut",
    });
  });
  return (
    <section id="scroll-skills" className=" min-h-screen flex text-white">
      <div
        id="scroll-ball-skills"
        className=" absolute w-5 h-5 rounded-full  bg-[#FF7F50]"
      ></div>
      <div className=" flex flex-col not-md:mt-3 justify-evenly mx-10">
        <div
          id="NySkills-head"
          className=" flex text-5xl gap-2 font-bold"
        >
          <h2>My </h2>
          <h2 className=" text-[#FF7F50]">Skills</h2>
        </div>

        <div
          id="scroll-display-skills"
          className="grid md:grid-cols-3 gap-5"
        >
          <SkillsDisplay
            name={"Programming Languages"}
            data={programmingLanguages}
          />
          <SkillsDisplay name={"Development"} data={development} />
          <SkillsDisplay
            name={"Tools And Platforms"}
            data={toolsAndPlatforms}
          />
        </div>

        <div
          id="skills-overview"
          className=" text-center mx-[20%] grid grid-rows-1 gap-5"
        >
          <h2 className=" text-3xl font-bold">Skills Overview</h2>
          <p className=" text-gray-300 font-semibold">
            I have experience in C, C++, Java, JavaScript (React.js), HTML/CSS,
            and Flutter, with projects like my portfolio website, CGPA
            calculator, task manager, and a Chrome extension. I'm also working
            on a DBMS project (Synlancer) and preparing for interviews with a
            100-day C++ coding challenge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MySkills;

const SkillsDisplay = ({ data, name }) => {
  return (
    <Tilt>
      <div className="skill-container flex flex-col gap-5 border-4 p-5 rounded-2xl bg-[#1A1A1A] shadow-md shadow-[#FF7F50] border-[#FF7F50]">
        <div className=" text-3xl font-bold text-center">{name}</div>
        <div className=" grid grid-cols-2 grid-rows-4 gap-4">
          {data.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              className="  bg-white flex justify-center rounded-xl gap-3 hover:scale-110 transition-all hover:shadow-lg hover:shadow-[#FF7F50] items-center p-2 "
              key={index}
            >
              <img src={item.img} className=" w-8" alt="" />
              <div className=" text-black font-bold">{item.name}</div>
            </a>
          ))}
        </div>
      </div>
    </Tilt>
  );
};
