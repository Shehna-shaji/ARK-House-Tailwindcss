import React, { useState } from "react";
import Button from "../../Components/Button/Button";

const Contact = () => {
  const [phno, setPhno] = useState(true);
  const [email, setEmail] = useState(true);

  const handleClick = () => {
    setPhno(!phno);
    setEmail(!email);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="m-auto mt-[192px]">
        <h5 className="font-semibold text-lg lg:text-3xl">
          We will be glad to contact you
        </h5>
      </div>
      <div className="flex">
        <button
          className={
            phno
              ? "flex gap-2 py-[10px] px-[16px] w-[150px] h-[40px] bg-[#000000] border-[1px] border-[#000000] justify-center cursor-pointer"
              : "flex gap-2 py-[10px] px-[16px] w-[150px] h-[40px] bg-[#ffffff] border-[1px] border-[#000000] justify-center cursor-pointer"
          }
          onClick={handleClick}
        >
          <h6
            className={
              phno
                ? "text-center text-[#ffffff] text-sm font-semibold"
                : "text-center text-[#000000] text-sm font-semibold"
            }
          >
            Phone Number
          </h6>
        </button>
        <button
          className={
            email
              ? "flex gap-2 py-[10px] px-[12px] w-[150px] h-[40px] bg-[#ffffff] border-[1px] border-[#000000] justify-center cursor-pointer"
              : "flex gap-2 py-[10px] px-[12px] w-[150px] h-[40px] bg-[#000000] border-[1px] border-[#000000] justify-center cursor-pointer"
          }
          onClick={handleClick}
        >
          <h6
            className={
              email
                ? "text-sm font-semibold text-center"
                : "text-sm font-semibold text-center text-[#ffffff]"
            }
          >
            Email
          </h6>
        </button>
      </div>
      <p className="text-lg font-normal text-center">
        {" "}
        Give us your number and <br /> we will call you now
      </p>
      <form className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-[276px] h-[52px] border-[1px] border-[#000000] py-5 pl-2 pr-6 text-[#b2b2b2] md:w-[476px] md:h-[62px] lg:w-[676px] lg:h-[72px]"
        />
        {phno ? (
          <input
            type="number"
            placeholder="(+33)7 00 55 59 27"
            className="w-[276px] h-[52px] border-[1px] border-[#000000] py-5 pl-2 pr-6 text-[#b2b2b2] md:w-[476px] md:h-[62px] lg:w-[676px] lg:h-[72px]"
          />
        ) : (
          <input
            type="email"
            placeholder="username@gmail.com"
            className="w-[276px] h-[52px] border-[1px] border-[#000000] py-5 pl-2 pr-6 text-[#b2b2b2] md:w-[476px] md:h-[62px] lg:w-[676px] lg:h-[72px]"
          />
        )}
      </form>
      <Button text="Contact Us" />
    </div>
  );
};

export default Contact;
