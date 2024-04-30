import React from "react";
import sectionimg from "../../assets/ourhistory.png";
import Button from "../../Components/Button/Button";

const WeAreSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-3xl">Who we are</h2>
        <div className="flex flex-col gap-6 items-center xl:flex-row">
          <figure>
            <img src={sectionimg} className="w-full h-auto xl:w-[680px] xl:h-[450px]" />
          </figure>
          <div className="flex flex-col gap-6 xl:w-[430px] xl:h-[450px]">
            <article className="font-normal text-sm sm:text-base md:text-lg lg:text-xl">
              We are dedicated individuals from a range of different countries.
              Based in Oslo, with offices in Copenhagen, London and Reykjavik,
              we are actively involved in projects in various countries across
              Europe, Africa, the Middle East and Asia.
              <br />
              <p>&nbsp;&nbsp;</p>
              Together, we are a community with a culture for beautiful and
              outstanding architecture, a culture that is Powered by Commitment.
            </article>
            <div className="flex flex-col gap-4">
                <h5 className="text-xl font-semibold lg:text-2xl">Do you want to work <br/> with us?</h5>
                <Button text='OurVacancies'/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreSection;
