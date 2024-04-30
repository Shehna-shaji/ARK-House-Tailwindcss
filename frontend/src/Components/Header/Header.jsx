import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/ARKLogo.png";

import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Menu from "../Menu/Menu";

const Header = () => {
  const [click, setClick] = useState(true);

  const menuref=useRef()

  useEffect(() => {
    let handler = (e) => {
      if (!menuref.current.contains(e.target)) {
        setClick(true);
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      <div className="flex  bg-white w-full justify-between items-center  ">
        <div className=" bg-black pt-16 w-13 h-34 mb-3 sm:pt-20 w-18   md:pt-14 pl-3 pb-4 pr-3 " >
          <img src={logo} className="w-39 h-10 " />
        </div>
        <div className=" hidden md:flex" >
          <Menu />
        </div>

        <div onClick={handleClick} className="block md:hidden">
          {!click ? <IoClose size={20} /> : <FiMenu size={20} />}
        </div>
        <div
          className={
            !click
              ? " flex justify-center z-20 w-full    bg-white absolute left-0 top-24  pt-10   h-full ease-in-out duration-500"
              : "absolute left-[-100%] "
          }
          ref={menuref}
        >
          <Menu />
        </div>
      </div>
      <hr className="w-full border-0 h-0.5 bg-black size-full" />
    </div>
  );
};

export default Header;
