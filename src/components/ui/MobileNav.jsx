import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const MobileNav = () => {
  const navigate = useNavigate();
  const [isToggle, setIsToggle] = useState(false);

  const nav = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Skills",
      url: "/skills",
    },
    {
      name: "My Works",
      url: "/works",
    },
    {
      name: "Contact",
      url: "/contact",
    },
    {
      name: "Resume",
      url: "/resume",
    },
  ];
  return (
    <div className=" mx-4 my-5 border-2 bg-[#121212] border-[#FF7F50] px-6 shadow-lg shadow-[#FF7F50] py-2 rounded-3xl">
      <div className="flex w-full justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          onClick={() => navigate("/")}
          className=" flex z-50 text-2xl font-bold cursor-pointer"
        >
          <div className=" text-white">Naveen</div>
          <div className="  text-[#FF7F50]">VJ</div>
        </motion.div>
        {!isToggle && (
          <div
            onClick={() => setIsToggle(!isToggle)}
            className="text-2xl text-white"
          >
            <Menu />
          </div>
        )}

        {isToggle && (
          <div
            onClick={() => setIsToggle(!isToggle)}
            className="text-2xl text-white"
          >
            <X />
          </div>
        )}
      </div>

      <div className={`transition-all  overflow-hidden flex flex-col gap-3 ${isToggle ? "max-h-96 my-5" : "max-h-0"}`}>
       {
        nav.map((item, index) => {
          return (
            <div
            onClick={() => {navigate(item.url); window.location.href='/'; setIsToggle(false)}}
              className=" text-white text-lg font-semibold cursor-pointer"
              key={index}
            >
              {item.name}
            </div>
          );
        })
       }
      </div>
    </div>
  );
};

export default MobileNav;
