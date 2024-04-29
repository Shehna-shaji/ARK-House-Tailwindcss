import React from "react";
import Heading from "../../Components/Heading/Heading";
import imagelogo from "../../assets/imagelogo.png";
import projectimages, {
  Agriculturephoto,
  Ecocenterphoto,
  Fultonphoto,
  Geologyphoto,
  Jordanphoto,
  Laboratoryphoto,
  MonumentPlazaphoto,
  SLinephoto,
} from "../../assets/project-images";
import Numbers from "../../assets/Numbers.png";
import Projectnumber from "../../assets/Projectnumber.png";
import Button from "../../Components/Button/Button";

const RecentProjects = () => {
  const styles = {
    width: "60.43px",
    height: "48px",
    position: "absolute",
  };

  return (
    <div className="flex flex-col gap-14" id="projects">
      <Heading title="Recent Projects" text="Discover All" />
      <div className="2xl: mx-auto flex flex-col gap-10 lg:gap-16">
      <div className="flex flex-col gap-11 items-center lg:flex-row ">
        {projectimages.map(({ name, place, className }, i) => {
          return (
            <div key={i} className="sm:mx-auto lg:mx-0 ">
              <div
                
                style={{
                  backgroundImage: `url(${className})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  // width: "100%",
                  // height: "300px",
                }}
                className="w-[300px] h-[275px] sm:w-[500px] sm:h-[455px] lg:w-[400px] lg:h-[445px] xl:w-[550px] xl:h-[480px]"
              >
                <div className="relative flex gap-5 ">
                  <img src={imagelogo} style={styles} />
                </div>
              </div>
              <p className="font-medium text-base text-black ">{name}</p>
              <p className="font-normal text-base text-black">{place}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-11 items-center lg:flex-row">
        {Ecocenterphoto.map(({ name, place, className }, i) => {
          return (
            <div key={i}>
              <div
                
                style={{
                  backgroundImage: `url(${className})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className=" w-[310px] h-[280px] sm:w-[550px] sm:h-[471px] lg:w-[450px] lg:h-[430px] xl:w-[550px] xl:h-[471px] "
              >
                <div className="relative flex gap-5 ">
                  <img src={imagelogo} style={styles} />
                </div>
              </div>
              <p className="font-medium text-base text-black ">{name}</p>
              <p className="font-normal text-base text-black">{place}</p>
            </div>
          );
        })}
        <div className="flex flex-col gap-4 items-center ">
          <div>
            <img
              src={Numbers}
              className="w-[140px] h-[101px]  lg:w-[380px] lg:h-[251px] xl:w-[480px] xl:h-[351px]"
            />
          </div>
          <div>
            <h2 className="font-bold text-3xl text-center xl:text-5xl">
              Yeas of architecture, planning, design
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-11 items-center  lg:flex-row">
        {Fultonphoto.map(({ name, place, className }, i) => {
          return (
            <div key={i}>
              <div
                
                style={{
                  backgroundImage: `url(${className})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[305px] h-[371px] sm:w-[545px] sm:h-[571px] lg:w-[325px] lg:h-[371px]"
              >
                <div className="relative flex gap-5 ">
                  <img src={imagelogo} style={styles} />
                </div>
              </div>
              <p className="font-medium text-base text-black ">{name}</p>
              <p className="font-normal text-base text-black">{place}</p>
            </div>
          );
        })}
        {Agriculturephoto.map(({ name, place, className }, i) => {
          return (
            <div key={i}>
              <div
                
                style={{
                  backgroundImage: `url(${className})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[310px] h-[307px] sm:w-[553px] sm:h-[607px] lg:w-[480px] lg:h-[507px] xl:w-[783px] xl:h-[607px]"
              >
                <div className="relative flex gap-5 ">
                  <img src={imagelogo} style={styles} />
                </div>
              </div>
              <p className="font-medium text-base text-black ">{name}</p>
              <p className="font-normal text-base text-black">{place}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-11 items-center  lg:flex-row">
        {MonumentPlazaphoto.map(({ name, place, className }, i) => {
          return (
            <div key={i}>
              <div
              
                style={{
                  backgroundImage: `url(${className})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[320px] h-[272px] sm:w-[550px] sm:h-[472px] lg:w-[470px] lg:h-[520px] xl:w-[544px]  xl:h-[572px]"
              >
                <div className="relative flex gap-5 ">
                  <img src={imagelogo} style={styles} />
                </div>
              </div>
              <p className="font-medium text-base text-black ">{name}</p>
              <p className="font-normal text-base text-black">{place}</p>
            </div>
          );
        })}
        {Jordanphoto.map(({ name, place, className }, i) => {
          return (
            <div key={i}>
              <div
                
                style={{
                  backgroundImage: `url(${className})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[314px] h-[272px] sm:w-[560px] sm:h-[472px] lg:w-[354px] lg:h-[472px] xl:w-[564px] xl:h-[572px]"
              >
                <div className="relative flex gap-5 ">
                  <img src={imagelogo} style={styles} />
                </div>
              </div>
              <p className="font-medium text-base text-black ">{name}</p>
              <p className="font-normal text-base text-black">{place}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-11 items-center  lg:flex-row">
        {Laboratoryphoto.map(({ name, place, className }, i) => {
          return (
            <div key={i}>
              <div
              
                style={{
                  backgroundImage: `url(${className})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[320px] h-[220px] sm:w-[583px] sm:h-[407px] lg:w-[503px] lg:h-[357px] xl:w-[783px] xl:h-[607px]"
              >
                <div className="relative flex gap-5 ">
                  <img src={imagelogo} style={styles} />
                </div>
              </div>
              <p className="font-medium text-base text-black ">{name}</p>
              <p className="font-normal text-base text-black">{place}</p>
            </div>
          );
        })}

        {Geologyphoto.map(({ name, place, className }, i) => {
          return (
            <div key={i}>
              <div
                
                style={{
                  backgroundImage: `url(${className})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[320px] h-[371px] "
              >
                <div className="relative flex gap-5 ">
                  <img src={imagelogo} style={styles} />
                </div>
              </div>
              <p className="font-medium text-base text-black ">{name}</p>
              <p className="font-normal text-base text-black">{place}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-11 items-center  lg:flex-row">
        <div className="flex flex-col gap-4 items-center ">
          <div>
            <img
              src={Projectnumber}
              className="w-[140px] h-[101px]  lg:w-[240px] lg:h-[251px] xl:w-[480px] xl:h-[331px]"
            />
          </div>
          <div>
            <h2 className="font-bold text-3xl text-center xl:text-5xl">
              With over 2.500 projects completed
            </h2>
          </div>
        </div>
        {SLinephoto.map(({ name, place, className }, i) => {
          return (
            <div key={i}>
              <div
                
                style={{
                  backgroundImage: `url(${className})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[314px] h-[342px] sm:w-[564px] sm:h-[472px] lg:w-[314px] lg:h-[372px] xl:w-[564px] xl:h-[472px] "
              >

              </div>
            </div>
          );
        })}
      </div>
    </div>
    <div className="flex flex-col items-center gap-6">
      <div className="font-semibold text-3xl ">
      Start a Project?
      </div>
      <div>
        <Button text='Contact Us'/>
      </div>
    </div>
    </div>
  );
};

export default RecentProjects;
