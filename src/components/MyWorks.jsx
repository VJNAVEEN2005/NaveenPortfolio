import { useGSAP } from "@gsap/react";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { motion, time } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const MyWorks = () => {
  useGSAP(() => {
    gsap.to("#scroll-ball-MyWorks",{
        opacity: 0,
        y: "-60vh",
        x: "40vw",
    })
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-MyWorks",
        start: "top 60%",
        end: "top 10%",
        toggleActions: "restart none none none",
       // markers: true,
      },
    });

    timeline.to("#scroll-ball-MyWorks", {
        delay: 0.5,
        opacity:1,
        duration: 0.5,
        y: "-30vh",
    });

    timeline.to("#scroll-ball-MyWorks", {
        delay: 0.1,
        backgroundColor: "#FF7F50",
        duration: 1,
        x: "-45vw",
    });

    timeline.to("#scroll-ball-MyWorks", {
        delay: 0.1,
        backgroundColor: "#FF7F50",
        duration: 2,
        zIndex: 0,
        opacity: 0.5,
        scale: 10,
    });

  });

  return (
    <section id="scroll-MyWorks" className=" h-screen bg-[#1A1A1A]">
      <div className=" flex flex-col items-center justify-center h-full">
        <div id="scroll-ball-MyWorks" className="absolute w-5 h-5 rounded-full border-2 border-[#FF7F50]"></div>
        <div className="z-10 flex flex-col justify-evenly h-full mx-10">
          <div className=" flex gap-2">
            <h1 className=" text-white text-6xl font-bold">My</h1>
            <h1 className=" text-[#FF7F50] text-6xl font-bold">Works</h1>
          </div>
          <div
            id="MyWorksDisplay"
            className=" flex flex-col border-2 rounded-4xl border-[#FF7F50]  overflow-y-scroll h-[70vh]"
          >
            <MyWorksDisplay />
            <MyWorksDisplay />
            <MyWorksDisplay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;

const MyWorksDisplay = () => {
  return (
    <div className="grid grid-cols-2 gap-10 m-10">
      <div className=" ">
        <div className=" w-[40vw] min-h-96 relative bg-[#FF7F50] rounded-3xl">
          <img
            className=" absolute bottom-0 right-0"
            src=""
            alt="Image will be Here "
          />
        </div>
      </div>
      <div className=" flex flex-col justify-evenly">
        <h3 className=" text-3xl text-[#FF7F50] font-bold">TASK MAINTAIN</h3>
        <p className=" text-white text-lg">
          Developed a simple To do list app using that allows users to create
          and delete tasks. This project enhanced my skills in mobile app
          development.
        </p>
        <div className=" flex gap-2">
          {["Flutter", "React Js", "Html", "Css"].map((item, index) => {
            return (
              <div
                className=" text-white bg-[#373737] border px-3 py-1 cursor-pointer rounded-3xl"
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div>
          <button className=" bg-[#FF7F50] rounded-2xl text-white font-bold px-3 py-1">
            Live
          </button>
        </div>
      </div>
    </div>
  );
};
