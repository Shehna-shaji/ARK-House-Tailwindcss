import React from "react";
import Gilesimg from "../../assets/Giles.png";

const Giles = () => {
  const details = [
    {
      text: "location",
      place: "London",
    },
    {
      text: "Area",
      area: "70.000 m²",
    },
    {
      text: "CONSTRUCTION COST",
      cost: "130 mill NOK",
    },
  ];

  const year = [
    {
      text: "Year",
      year: "2019",
    },
    {
      text: "CLIENT",
      name: "Vanke",
    },
  ];
  const Details = ({ text, place, area, cost }) => {
    return (
      <div className="flex flex-col gap-2">
        <h6 className="uppercase font-medium text-sm sm:text-lg">{text}</h6>
        <p className="text-sm font-normal ">
          {place}
          {area}
          {cost}
        </p>
      </div>
    );
  };

  
  return (
    <div>
      <div className="flex flex-col pt-12">
        <div className="flex flex-col gap-4 ">
          <h2 className="font-semibold text-lg lg:text-3xl">
            Central Saint Giles
          </h2>
          <div className="flex flex-col xl:flex-row gap-6 ">
          <figure>
            <img src={Gilesimg} className="w-full h-auto xl:w-[727px] xl:h-[538px]" />
          </figure>
          <div className="flex gap-6 sm:gap-8">
            <div className="flex flex-col gap-8">
              {details.map(({ text, place, area, cost }, i) => {
                return (
                  <Details
                    key={i}
                    text={text}
                    place={place}
                    area={area}
                    cost={cost}
                  />
                );
              })}
            </div>
            <div className="flex flex-col gap-8">
                {year.map(({text,year,name},i)=>{
                    return(
                        <div className="flex flex-col gap-2">
                             <h6 className="uppercase font-medium text-sm sm:text-lg">{text}</h6>
                             <p className="text-sm font-normal">{year}{name}</p>
                            </div>
                    )
                })}
            </div>
          </div>
        </div>
        <p className="font-normal">
        Nanchang Wave is a landscape based community centre with a varied
          program forming the heart of a large residential development. The
          double helix structure towards the wetland area gives 360 degrees
          overview of the neighbourhood as one walks up to the panoramic gallery
          at top.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Giles;
