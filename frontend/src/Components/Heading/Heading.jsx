import React from "react";
import Button from "../Button/Button";

const Heading = ({ title, text, onclick }) => {
  return (
    <div>
    <div className="flex justify-between items-center pt-14 px-0 pb-6">
      <div className="font-semibold text-lg text-black md:text-2xl lg:text-4xl ">{title}</div>
      <div> 
        <Button text={text} onclick={onclick}/>

      </div>
     
    </div>
    <hr className="w-full border-0 h-0.5 bg-black size-full"/>
    </div>
  );
};

export default Heading;
