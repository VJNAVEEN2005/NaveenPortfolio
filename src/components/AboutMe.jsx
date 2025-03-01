import { useGSAP } from "@gsap/react";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useGSAP(() => {
    gsap.to("#scroll-ball-about", {
      y: -150,
      x: -30,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-ball-about",
        start: "-500% 60%",
        end: "top 10%",
        scrub: 3,
       // markers: true,
      },
    });

    timeline.to("#scroll-ball-about", {
      x: 200,
      rotate: 360,
      borderRadius: "100%",
      ease: "power1.inOut",
      duration: 6,
    });
    timeline.to("#scroll-ball-about", {
      y: 200,
      rotate: 360,
      borderRadius: "100%",
      ease: "bounce.out",
      duration: 6,
    });
    timeline.to("#scroll-box-about", {
      overflow: "hidden",
    });
    timeline.to("#scroll-ball-about", {
      scale: 150,
      duration: 6,
    });
    timeline.to("#show-about", {
      display: "flex",
      duration: 1,
    });
    timeline.from(
      "#scroll-content-about h1, #scroll-content-about p, #scroll-content-about div",
      {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.3, 
        ease: "power2.out", 
      }
    );
  }, []);

  return (
    <section className=" min-h-screen flex justify-center items-center">
      <div
        id="scroll-box-about"
        className=" w-[90%] h-[90vh] rounded-3xl bg-[#1A1A1A] "
      >
        <div id="scroll-ball-about" className=" w-5 h-5 bg-[#FF7F50] "></div>
        <div
          id="show-about"
          className="absolute hidden w-[90%] h-[80vh]  justify-center items-center"
        >
          <div className=" flex">
            <div id="scroll-content-about" className="mx-10">
              <div className=" flex gap-2">
                <h1 className=" text-white text-6xl font-bold">About</h1>
                <h1 className=" text-[#ff4400] text-6xl font-bold">Me</h1>
              </div>
              <p className=" text-white text-2xl font-semibold mt-5">
                Hi! I'm Naveen VJ, a passionate web developer dedicated to
                creating beautiful and functional digital experiences. With a
                keen eye for design and a love for clean code, I transform ideas
                into reality.
              </p>
              <div className=" mt-5 border-2 p-2 border-[#ff4400] bg-orange-300 rounded-xl">
                <h4 className=" text-[#ff4400] text-4xl font-bold">
                  My Journey
                </h4>
                <p className=" text-white text-xl font-semibold mt-5">
                  My journey in web development started with curiosity and has
                  evolved into a professional pursuit of excellence. I
                  continuously strive to stay updated with the latest
                  technologies and best practices in the field.
                </p>
              </div>
              <div className=" grid grid-cols-2 gap-5 mt-5">
                <div className=" border-2 p-2 border-[#ff4400] bg-orange-300 rounded-xl">
                  <h4 className=" text-[#ff4400] text-4xl font-bold">
                    Education
                  </h4>
                  <p className=" text-white font-semibold mt-5">
                    Currently pursuing B.Tech in Electrical and Electronics
                    Engineering (EEE) at Puducherry Technological University.
                    Alongside your studies, you are actively developing your
                    skills in software development, working on various projects,
                    and gaining experience in programming languages like C, C++,
                    Java, Pyhton and React.
                  </p>
                </div>
                <div className=" border-2 p-2 border-[#ff4400] bg-orange-300 rounded-xl">
                  <h4 className=" text-[#ff4400] text-4xl font-bold">
                    Experience
                  </h4>
                  <p className=" text-white font-semibold mt-5">
                    Experience in software development, working on projects like
                    a portfolio website, Chrome extension, ATM console app, and
                    Flutter-based task manager. You also completed a Python
                    diploma, an NPTEL IoT course, and a 100-day C++ coding
                    challenge to improve problem-solving skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
