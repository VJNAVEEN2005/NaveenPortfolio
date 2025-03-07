import { motion } from "framer-motion";
import React,{useState} from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

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
  ];
  return (
    <div>
      <div className=" fixed top-5 hidden justify-center w-full md:flex z-40 ">
        <motion.div
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className=" text-white flex gap-5 border-2 bg-[#121212] border-[#FF7F50] px-2 py-2 rounded-full"
        >
          {nav.map((item, index) => {
            return (
              <div className=" flex" key={index}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#4e524b80] px-3 rounded-full  transition-all"
                      : "px-3 rounded-full  transition-all"
                  }
                  key={index}
                >
                  {({ isActive }) => (
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className={` w-full h-2  -mt-4 rounded-full overflow-hidden ${isActive ? "bg-[#FF7F50] shadow-[0px_8px_15px_3px_#FF7F50]" : ""}`}
                      ></motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { delay: index * 0.1 + 0.3 },
                        }}
                        className=" mt-3 mb-2"
                      >
                        {item.name}
                      </motion.div>
                    </>
                  )}
                </NavLink>
              </div>
            );
          })}
        </motion.div>
      </div>


      <div className=" fixed top-5 md:hidden justify-center w-full flex z-40 ">
        
      </div>
    </div>
  );
};

export default Nav;
