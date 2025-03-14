import { useGSAP } from "@gsap/react";
import React, { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { motion } from "framer-motion";
import { projectsData } from "../assets/MyProject/data";
gsap.registerPlugin(ScrollTrigger);

const MyWorks = () => {
  useGSAP(() => {
    gsap.to("#scroll-ball-MyWorks", {
      opacity: 0,
      y: "-60vh",
      x: "40vw",
    });
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
      opacity: 1,
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
        <div
          id="scroll-ball-MyWorks"
          className="absolute w-5 h-5 rounded-full border-2 border-[#FF7F50]"
        ></div>
        <div className="z-10 flex flex-col justify-evenly h-full mx-10">
          <div className=" flex gap-2">
            <h1 className=" text-white text-6xl font-bold">My</h1>
            <h1 className=" text-[#FF7F50] text-6xl font-bold">Works</h1>
          </div>
          <div className=" p-2 border-2 border-[#FF7F50] rounded-3xl">
            <div
              id="MyWorksDisplay"
              className=" flex flex-col  overflow-y-scroll h-[70vh]"
            >
              {projectsData.map((project, index) => {
                return (
                  <MyWorksDisplay
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    techStack={project.techStack}
                    link={project.link || null}
                    phone={project.phone || false}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;

const MyWorksDisplay = ({
  title,
  description,
  image,
  techStack,
  link,
  phone,
  key,
}) => {
  const [cursorText, setCursorText] = useState(""); // Text inside the cursor
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false); // Track hover state

  useEffect(() => {
    // Update cursor position when the mouse moves
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div key={key} className="grid md:grid-cols-2 md:gap-10 gap-5 md:m-10 mx-2 my-5">
      {isHovering && (
        <motion.div
          className="fixed w-20 z-40 h-20 flex text-center items-center p-5 justify-center bg-[#FF7F50] text-white text-sm font-bold rounded-full pointer-events-none"
          style={{
            top: cursorPosition.y - 40, // Adjust position to center cursor
            left: cursorPosition.x - 40,
            scale: 0,
          }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {cursorText}
        </motion.div>
      )}

      <div className=" ">
        <motion.div
          onMouseEnter={() => {
            setCursorText(link ? "Project Is Live" : "Not Live");
            setIsHovering(true);
          }}
          style={{ cursor: "none" }}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => {
            if (link) {
              window.open(link);
            }
          }}
          className=" md:w-[40vw] md:h-96 h-52 relative justify-center flex bg-[#FF7F50] overflow-hidden rounded-3xl"
        >
          <img
            className={`   rounded-2xl  border-2 border-[white] -rotate-[5deg] ${phone ? " " : "absolute right-0 bottom-[10%] scale-110"}`}
            src={image}
            alt="Image will be Here "
          />
        </motion.div>
      </div>
      <div className=" flex flex-col justify-evenly">
        <h3 className=" text-3xl text-[#FF7F50] font-bold">{title}</h3>
        <p className=" text-white text-lg">{description}</p>
        <div className=" md:flex gap-2 not-md:mt-2">
          {techStack.map((item, index) => {
            return (
              <div
                className=" text-white text-center bg-[#373737] border px-3 py-1 cursor-pointer rounded-3xl"
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className=" not-md:mt-4">
          <button
            style={{ cursor: link ? "pointer" : "default" }}
            onClick={() => {
              if (link) {
                window.open(link);
              }
            }}
            className=" bg-[#FF7F50] rounded-2xl text-white font-bold px-3 py-1"
          >
            {link ? "Live Project" : "Not Live"}
          </button>
        </div>
      </div>
    </div>
  );
};
