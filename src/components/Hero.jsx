import React from "react";
import { profile } from "../assets/AboutMe/data";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
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
    <section className=" md:min-h-screen not-md:h-[85vh] not-md:gap-8 not-md:justify-evenly md:grid md:grid-cols-2 flex flex-col-reverse place-items-center">
      <div className=" md:mx-10 mx-5 flex flex-col gap-4">
        <h4 className=" font-bold md:text-xl text-lg text-[#FF7F50]">
          Welcome to my portfolio
        </h4>
        
        <h1 className="md:text-6xl text-4xl gap-4 flex text-center  text-white font-bold">
          <div className=" flex flex-row">Hi, I'm</div>
          <div className=" text-[#FF7F50] flex flex-row"> Naveen VJ</div>
        </h1>
        <h3 className=" text-gray-500 not-md:text-sm font-semibold">
          Full Stack Developer & UI/UX Enthusiast
        </h3>
        <p className=" text-gray-300 not-md:text-sm font-semibold">
          Crafting beautiful web experiences with modern technologies.
          Passionate about creating intuitive and performant applications that
          solve real-world problems.
        </p>
        <div className=" flex gap-5">
          <button 
            onClick={() => navigate('/works')}
            className=" bg-[#FF7F50] md:py-3 md:px-4 not-md:text-sm px-3 py-2 text-white rounded-xl font-bold cursor-pointer transition-all hover:bg-[#ff6250]"
          >
            View MyWorks
          </button>
          <button 
            onClick={() => navigate('/contact')}
            className="  border border-[#FF7F50] md:py-3 md:px-4 not-md:text-sm px-3 py-2 text-white rounded-xl font-bold cursor-pointer transition-all hover:bg-[#ff7f5042]"
          >
            Contact Me
          </button>
        </div>
        <div className=" flex gap-3">
          {socialMedia.map((item, index) => (
            <a href={item.link} target="_blank" rel="noreferrer">
              <img src={item.icon} className=" md:w-10 w-5" alt={item.title} />
            </a>
          ))}
        </div>
      </div>
      <div className=" md:m-10 md:block not-md:mt-10 ">
        <motion.img
        initial={{ y:10 }}
        animate={{ y: -10 }}
        transition={{ repeat: Infinity, duration: 1, repeatType:'mirror', ease: "easeInOut" }}
        //whileHover={{ scale: 1.1, duration: 0.5 }}
          className="md:w-1/2 w-40  border-4 border-[#FF7F50] cursor-pointer rounded-full mx-auto shadow-lg shadow-[#FF7F50] "
          src={profile}
          alt="React logo"
        />
      </div>
    </section>
  );
};

export default Hero;
