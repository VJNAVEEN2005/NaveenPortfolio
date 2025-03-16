import React from "react";
import Nav from "./ui/Nav";
import Name from "./ui/Name";
import MobileNav from "./ui/MobileNav";

const Header = () => {
  return (
    <div className="">
      <div className=" md:block hidden">
        <Name />
        <Nav />
      </div>
      <div className=" md:hidden block">
        <MobileNav/>
      </div>
    </div>
  );
};

export default Header;
