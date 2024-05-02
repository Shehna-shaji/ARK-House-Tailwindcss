import React from "react";
import image from "../../assets/Image.png";
import image2 from "../../assets/Image2.png";
import image3 from "../../assets/Image3.png";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const data = [
    {
      photo: image,
    },
    {
      photo: image2,
    },
    {
      photo: image3,
    },
  ];
  const navigate=useNavigate()
  const Images = ({ photo }) => {
    return (
      <div className="flex justify-center items-center w-[300px] h-auto object-fill relative max-h-screen  bg-[#f8f8f8] xl:flex-1">
        <img src={photo} className="w-auto max-h-screen relative -top-12 " />
      </div>
    );
  };
  return (
    <div className="flex flex-col justify-center md:gap-16 bg-[#ffffff] pt-14 pb-14 " id="about">
      <div className="flex flex-col gap-[30px] items-center w-full">
        <p className="text-2xl text-center md:text-2xl lg:text-4xl xl:text-5xl">
          {" "}
          Forming an irrational love between clients <br /> and their buildings
        </p>
        <div className="font-normal text-base text-center text-black">
          <p>
            Our approach starts with...
            <br />
            How do you want to make people feel?
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-20 items-center md:flex-row md:flex-wrap md:justify-center xl:gap-16 ">
        {data.map(({ photo }, i) => {
          return <Images key={i} photo={photo} />;
        })}
      </div>
      <div className="flex gap-6 flex-col justify-center items-center">
      <p className="font-normal text-sm text-center sm:text-xl 2xl:text-2xl">
          In the face of changing trends and technologies,
          <br /> ARK House creates architecture that remains <br />
          relevant - not based on trends, fads or dates -<br /> but on timeless
          human truths.
        </p>
        <div>
            <Button text='Our History' onclick={()=>navigate('/ourhistory')}/>
        </div>

      </div>
    </div>
  );
};

export default About;
