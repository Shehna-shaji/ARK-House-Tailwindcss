import React from "react";
import { HashLink } from "react-router-hash-link";

const Menu = () => {
  const Menu = ({ number, text }) => {
    return (
      <div className="flex flex-col  cursor-pointer">
        <div className="text-xs font-medium w-1.5 h-4 ">{number}</div>
        <div className="text-xl active:font-medium font-customfont">{text}</div>
      </div>
    );
  };

  return (
    <div className="flex flex-col  gap-x-8 md:flex-row ">
      <HashLink to='#about'>
      <Menu number={1} text="About" />
      </HashLink>
      <HashLink to='#services'>
      <Menu number={2} text="Services" />
      </HashLink>
      <HashLink to='#projects'>
      <Menu number={3} text="Projects" />
      </HashLink>
      <Menu number={4} text="Team" />
      <Menu number={5} text="Blog" />
    </div>
  );
};

export default Menu;
