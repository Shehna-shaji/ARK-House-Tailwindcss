import React from "react";

import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import details from "../../assets/address";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = () => {
  const FooterMenu = ({ number, text }) => {
    return (
      <div className="flex flex-col gap-0.5">
        <div className="text-xs font-medium w-1.5 h-4">{number}</div>

        <div className="text-xs active:font-medium  md:text-lg lg:text-xl">
          {text}
        </div>
      </div>
    );
  };
  return (
    <div className="pt-6">
      <Heading title="Start a Project?" text="Contact Us" />
      <div className="grid justify-between grid-cols-1 lg:grid-cols-2">
        <div className="flex  flex-col justify-center gap-4 mt-5 md:mt-5 md:flex-row md:justify-between lg:flex-col lg:mt-14 ">
          <h3 className="font-semibold text-xs text-black md:text-2xl lg:text-4xl ">
            Support is available <br /> 24 hours
          </h3>
          <Button text="Contact Us" />
        </div>
        <div className="grid grid-cols-2 gap-6 mt-12 md:grid-cols-3">
          {details.map((data) => {
            return (
              <div key={data.id}>
                {data.address.map((contact) => {
                  return (
                    <div
                      className="text-xs font-normal text-black font-SFPro md:text-sm lg:text-xs"
                      key={data.id}
                    >
                      <p>{contact.direction}</p>
                      <p>{contact.name}</p>
                      <p>{contact.unitno}</p>
                      <p>{contact.place}</p>
                      <p>{contact.streetno}</p>
                      <p>{contact.street}</p>
                      <p>{contact.state}</p>
                      <p>{contact.landmark}</p>
                      <p>{contact.pincode}</p>
                      {/* <br/> */}
                      <p className="">&nbsp;&nbsp;</p>

                      <p> {contact.phone}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-center w-full mt-14 mb-14">
        <div className="grid grid-cols-3 gap-2 md:grid-cols-5  lg:gap-x--8">
          <FooterMenu number={1} text="About" />
          <FooterMenu number={2} text="Services" />
          <FooterMenu number={3} text="Projects" />
          <FooterMenu number={4} text="Team" />
          <FooterMenu number={5} text="Blog" />
        </div>
        <SocialMedia/>
      </div>
      <hr className="w-full border-0 h-0.5 bg-black size-full"/>
      <div className="flex justify-between mt-8 mb-20">
        <div className="flex items-center gap-2">
            <div className="text-xl font-normal">
            <p> ©</p>

            </div>
            <div >
            <h6 className="font-normal text-xs text-black ">Copywriting | All Rights Reserved</h6>

            </div>

        </div>
        <div className="flex gap-2">
      <h6 className="font-normal text-xs text-black ">Terms of Use | Privacy</h6>

      </div>

      </div>
      
    </div>
  );
};

export default Footer;
