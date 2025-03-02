import React from "react";
import { profile } from "../assets/AboutMe/data";
import { motion } from "framer-motion";

const Hero = () => {
  const socialMedia = [
    {
      title: "Github",
      link: "https://github.com/VJNAVEEN2005",
      icon: "https://img.icons8.com/?size=100&id=62856&format=png&color=B8B8B8",
    },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/naveen-vj-49742a263/",
      icon: "https://img.icons8.com/?size=100&id=8808&format=png&color=B8B8B8",
    },
    {
      title: "Youtube",
      link: "https://www.youtube.com/@vjntech2005",
      icon: "https://img.icons8.com/?size=100&id=37326&format=png&color=B8B8B8",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/vj_naveen_05/",
      icon: "https://img.icons8.com/?size=100&id=32309&format=png&color=B8B8B8",
    },
  ];

  return (
    <section className=" min-h-screen grid grid-cols-2 place-items-center">
      <div className=" mx-10 flex flex-col gap-4">
        <h4 className=" font-bold text-xl text-[#FF7F50]">
          Welcome to my portfolio
        </h4>
        <h1 className="text-6xl gap-4 flex text-center text-white font-bold">
          <div>Hi, I'm</div>
          <div className=" text-[#FF7F50]"> Naveen VJ</div>
        </h1>
        <h3 className=" text-gray-500 font-semibold">
          Full Stack Developer & UI/UX Enthusiast
        </h3>
        <p className=" text-gray-300 font-semibold">
          Crafting beautiful web experiences with modern technologies.
          Passionate about creating intuitive and performant applications that
          solve real-world problems.
        </p>
        <div className=" flex gap-5">
          <button className=" bg-[#FF7F50] py-3 px-4 text-white rounded-xl font-bold cursor-pointer transition-all hover:bg-[#ff6250]">
            View MyWorks
          </button>
          <button className="  border border-[#FF7F50] py-3 px-4 text-white rounded-xl font-bold cursor-pointer transition-all hover:bg-[#ff7f5042]">
            Contact Me
          </button>
        </div>
        <div className=" flex gap-3">
          {socialMedia.map((item, index) => (
            <a href={item.link} target="_blank" rel="noreferrer">
              <img src={item.icon} className=" w-10" alt={item.title} />
            </a>
          ))}
        </div>
      </div>
      <div className=" m-10 ">
        <motion.img
        initial={{ y:10 }}
        animate={{ y: -10 }}
        transition={{ repeat: Infinity, duration: 1, repeatType:'mirror', ease: "easeInOut" }}
        //whileHover={{ scale: 1.1, duration: 0.5 }}
          className="w-1/2  border-4 border-[#FF7F50] cursor-pointer rounded-full mx-auto shadow-lg shadow-[#FF7F50] "
          src={profile}
          alt="React logo"
        />
      </div>
    </section>
  );
};

export default Hero;
