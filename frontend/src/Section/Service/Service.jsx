import React, { useState } from "react";
import servicenumber from "../../assets/number3.png";
import architecture from "../../assets/Architecture.png";
import landscape from "../../assets/S-Line.png";
import interior from "../../assets/Image2.png";
import design from "../../assets/Image3.png";
import Heading from "../../Components/Heading/Heading";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const [image, setImage] = useState(architecture);
  const [isFocused, setIsFocused] = useState(architecture);
  const servicearchitecture = [
    {
      text: "Architecture",
      img1: architecture,
    },
  ];
  const servicelandscape = [
    {
      text: "Landscape",
      img2: landscape,
    },
  ];

  const serviceinterior = [
    {
      text: "Interior",
      img3: interior,
    },
  ];

  const servicedesign = [
    {
      text: "Design",
      img4: design,
    },
  ];
  const handleChange = (imageName) => {
    setImage(imageName);
    setIsFocused(imageName);
  };
  const Servicelist = ({ text, onclick, className }) => {
    return (
      <ul className="flex flex-col gap-[30px] lg:gap-20 ">
        <li onClick={onclick} className={className}>
          {text}
        </li>
      </ul>
    );
  };
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:m-auto" id="services">
      <Heading
        title="Services"
        text="Contact Us"
        onclick={() => navigate("/contact")}
      />
      <div className="flex flex-col pt-14 gap-12 md:flex-row lg:gap-16 lg:m-auto">
        <div className="flex flex-col gap-6 md:flex-row md:gap-12 lg:gap-16 xl:mt-14">
          <div className="flex flex-col items-center gap-4 ">
            <img
              src={servicenumber}
              className="w-[139px] h-[185px] text-center"
            />
            <h3 className="font-bold text-4xl text-center">
              Offices around <br />
              the world
            </h3>
          </div>
          <div className="flex gap-5 justify-center mt-[30px] md:flex-col md:justify-start xl:gap-16">
            {servicearchitecture.map((img, i) => {
              return (
                <Servicelist
                  key={i}
                  text={img.text}
                  onclick={() => handleChange(img.img1)}
                  className={
                    isFocused === img.img1
                      ? "underline underline-offset-[10px] cursor-pointer text-sm sm:text-lg md:text-xl font-medium text-black"
                      : " text-sm sm:text-lg md:text-xl cursor-pointer font-medium "
                  }
                />
              );
            })}

            {servicelandscape.map((img, i) => {
              return (
                <Servicelist
                  key={i}
                  text={img.text}
                  onclick={() => handleChange(img.img2)}
                  className={
                    isFocused === img.img2
                      ? "underline underline-offset-[10px] cursor-pointer text-sm sm:text-lg md:text-xl font-medium text-black"
                      : " text-sm sm:text-lg md:text-xl cursor-pointer font-medium"
                  }
                />
              );
            })}

            {serviceinterior.map((img, i) => {
              return (
                <Servicelist
                  key={i}
                  text={img.text}
                  onclick={() => handleChange(img.img3)}
                  className={
                    isFocused === img.img3
                      ? "underline underline-offset-[10px] cursor-pointer text-sm sm:text-lg md:text-xl font-medium text-black"
                      : " text-sm sm:text-lg md:text-xl cursor-pointer font-medium"
                  }
                />
              );
            })}

            {servicedesign.map((img, i) => {
              return (
                <Servicelist
                  key={i}
                  text={img.text}
                  onclick={() => handleChange(img.img4)}
                  className={
                    isFocused === img.img4
                      ? "underline underline-offset-[10px] cursor-pointer text-sm sm:text-lg md:text-xl font-medium text-black"
                      : " text-sm sm:text-lg md:text-xl cursor-pointer font-medium"
                  }
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div>
            <img
              src={image}
              className="w-[280px] h-[440px] md:h-[340px] xl:w-[500px] xl:h-[540px]"
            />
          </div>
          <div className="flex flex-col items-end gap-6">
            <div className="flex flex-col gap-4 flex-wrap">
              <p className="text-xs font-medium xl:text-xl">
                At the heart of everything we do is the human experience <br />
                to feel. To love. To image. To wonder. To guide. To jest. To
                <br /> rule. To serve. To belong.
              </p>
              <Button text="Contact Us" onclick={() => navigate("/contact")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
