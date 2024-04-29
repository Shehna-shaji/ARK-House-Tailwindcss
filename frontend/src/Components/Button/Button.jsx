import React from "react";
import arrow from "../../assets/arrow-up-right.png";

const Button = ({ text, onclick }) => {
  return (
    <div className="flex gap-3 bg-black items-center w-32 h-8 md:w-36 md:h-10 py-1 pl-3 pr-1">
      <button className=" text-white font-medium justify-center text-center text-xs cursor-pointer w-24 h-6  md:text-sm" onClick={onclick}>
        {text}
      </button> 
      <div className="flex gap-2 bg-white w-7 h-7 md:w-8 md:h-8 p-1.5 ">
        <img src={arrow} className=" w-4 h-4 md:w-5 md:h-5" />
      </div>
    </div>
  );
};

export default Button;
