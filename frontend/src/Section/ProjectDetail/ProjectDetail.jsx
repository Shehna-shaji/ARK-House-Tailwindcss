import React from "react";
import {
  Ecocenterimage,
  Fultonimage,
  Gilesimage,
  Laboratoryimage,
  Monsonimage,
  classroomimage,
} from "../../assets/project-images";
import imagelogo from "../../assets/imagelogo.png";

const ProjectDetail = () => {
  const List = [
    {
      text: "All projects",
    },
    {
      text: "Architecture",
      style: {
        textDecoration: "underline",
        textUnderlineOffset: "10px",
      },
    },
    {
      text: "Landscape",
    },
    {
      text: "Interior",
    },
    {
      text: "Design",
    },
  ];
  const styles = {
    width: "60.43px",
    height: "48px",
    position: "absolute",
  };
  const ProjectList = ({ text, style }) => {
    return (
      <ul className="flex flex-col gap-10">
        <li
          style={style}
          className="cursor-pointer text-sm font-semibold text-black md:text-base lg:text-lg"
        >
          {text}
        </li>
      </ul>
    );
  };

  const Projects = ({ name, year, place }) => {
    return (
      <div className="flex flex-col gap-1">
        <p className="font-normal text-base text-[#B2B2B2]">{year}</p>
        <figcaption className="font-medium text-base text-black">
          {name}
        </figcaption>
        <figcaption className="font-normal text-base text-black">
          {place}
        </figcaption>
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-[121px] lg:flex-row">
      <div className="flex flex-col gap-8 md:flex-row md:gap-10 lg:flex-col lg:gap-8">
        {List.map(({ text, style }, i) => {
          return <ProjectList key={i} text={text} style={style} />;
        })}
      </div>
      <div className="flex flex-col gap-16 2xl:mx-auto">
        <div className="flex flex-col gap-11 items-center md:flex-row ">
          {Fultonimage.map(({ name, year, place, className }, i) => {
            return (
              <div key={i}>
                <div
                  style={{ backgroundImage: `url(${className})` }}
                  className=" w-[310px] h-[320px] bg-cover "
                >
                  <div className="relative flex gap-5 ">
                    <img src={imagelogo} style={styles} />
                  </div>
                </div>
                <Projects year={year} name={name} place={place} />
              </div>
            );
          })}
          {Gilesimage.map(({ className, name, place, year }, i) => {
            return (
              <div key={i}>
                <div
                  style={{ backgroundImage: `url(${className})` }}
                  className="w-[310px] h-[295px] md:w-[280px] md:h-[275px] xl:w-[560px] xl:h-[495px] bg-cover bg-no-repeat "
                >
                  <div className="relative flex gap-5 ">
                    <img src={imagelogo} style={styles} />
                  </div>
                </div>
                <Projects year={year} name={name} place={place} />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-11 items-center md:flex-row ">
          {Laboratoryimage.map(({ className, name, place, year }, i) => {
            return (
              <div key={i}>
                <div
                  style={{ backgroundImage: `url(${className})` }}
                  className="w-[310px] h-[220px] xl:w-[468px] xl:h-[334px]  bg-cover bg-no-repeat"
                >
                  <div className="relative flex gap-5 ">
                    <img src={imagelogo} style={styles} />
                  </div>
                </div>
                <Projects year={year} name={name} place={place} />
              </div>
            );
          })}
          {Monsonimage.map(({ className, name, place, year }, i) => {
            return (
              <div key={i}>
                <div
                  style={{ backgroundImage: `url(${className})` }}
                  className="w-[310px] h-[475px] md:w-[280px] md:h-[375px] xl:w-[360px] xl:h-[520px] bg-cover bg-no-repeat"
                >
                  <div className="relative flex gap-5 ">
                    <img src={imagelogo} style={styles} />
                  </div>
                </div>
                <Projects year={year} name={name} place={place} />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-11 items-center md:flex-row xl:gap-16">
          {Ecocenterimage.map(({ className, name, place, year }, i) => {
            return (
              <div key={i}>
                <div
                  style={{ backgroundImage: `url(${className})` }}
                  className="w-[310px] h-[280px]  xl:w-[320px] xl:h-[320px] bg-cover bg-no-repeat"
                >
                  <div className="relative flex gap-5 ">
                    <img src={imagelogo} style={styles} />
                  </div>
                </div>
                <Projects year={year} name={name} place={place} />
              </div>
            );
          })}
          {classroomimage.map(({ className, name, place, year }, i) => {
            return (
              <div key={i}>
                <div
                  style={{ backgroundImage: `url(${className})` }}
                  className="w-[310px] h-[275px] md:w-[280px] md:h-[255px]  xl:w-[500px] xl:h-[380px] bg-cover bg-no-repeat"
                >
                  <div className="relative flex gap-5 ">
                    <img src={imagelogo} style={styles} />
                  </div>
                </div>
                <Projects year={year} name={name} place={place} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
