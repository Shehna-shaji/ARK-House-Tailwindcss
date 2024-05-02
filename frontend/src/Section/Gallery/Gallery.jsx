import React from "react";
import Heading from "../../Components/Heading/Heading";
import {
  balcony,
  facade,
  facade_closeup,
  facade_front,
  facade_side,
  glasspanel,
} from "../../assets/gallery";
import imagelogo from "../../assets/imagelogo.png";

const Gallery = () => {
  const styles = {
    width: "60.43px",
    height: "48px",
    position: "absolute",
  };

  const Gallery = ({ name, place }) => {
    return (
      <div>
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
    <div>
      <Heading title="Gallery" text="Contact Us" />
      <div className="flex flex-col gap-16 pt-14">
        <div className="flex flex-col gap-16 xl:flex-row">
          {facade_front.map(({ className, name, place }, i) => {
            return (
              <div key={i}>
                <div
                  style={{
                    backgroundImage: `url(${className})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="w-full h-[253px] xl:w-[730px] xl:h-[575px]"
                >
                  <div className="relative flex gap-5 ">
                    <img src={imagelogo} style={styles} />
                  </div>
                </div>
                <Gallery key={i} name={name} place={place} />
              </div>
            );
          })}
          {facade_side.map(({ className, name, place }, i) => {
            return (
              <div key={i}>
                <div
                  style={{
                    backgroundImage: `url(${className})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="w-full h-[575px] xl:w-[378px] xl:h-[575px]"
                >
                  <div className="relative flex gap-5 ">
                    <img src={imagelogo} style={styles} />
                  </div>
                </div>
                <Gallery key={i} name={name} place={place} />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-16 xl:flex-row">
          {facade_closeup.map(({ className, name, place }, i) => {
            return (
              <div key={i}>
                <div
                  style={{
                    backgroundImage: `url(${className})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="w-full h-[370px] xl:w-[325px] xl:h-[375px]"
                >
                  <div className="relative flex gap-5 ">
                    <img src={imagelogo} style={styles} />
                  </div>
                </div>
                <Gallery key={i} name={name} place={place} />
              </div>
            );
          })}
          {facade.map(({ className, name, place }, i) => {
            return (
              <div key={i}>
                <div
                  style={{
                    backgroundImage: `url(${className})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="w-full h-[607px] xl:w-[783px] xl:h-[607px]"
                >
                  <div className="relative flex gap-5 ">
                    <img src={imagelogo} style={styles} />
                  </div>
                </div>
                <Gallery key={i} name={name} place={place} />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-16 xl:flex-row">
          {glasspanel.map(({ className, name, place }, i) => {
            return (
              <div key={i}>
                <div
                  style={{
                    backgroundImage: `url(${className})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="w-full h-[572px] xl:w-[604px] xl:h-[572px]"
                >
                  <div className="relative flex gap-5 ">
                    <img src={imagelogo} style={styles} />
                  </div>
                </div>
                <Gallery key={i} name={name} place={place} />
              </div>
            );
          })}
          {balcony.map(({ className, name, place }, i) => {
            return (
              <div key={i}>
                <div
                  style={{
                    backgroundImage: `url(${className})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="w-full h-[572px] xl:w-[514px] xl:h-[572px]"
                >
                  <div className="relative flex gap-5 ">
                    <img src={imagelogo} style={styles} />
                  </div>
                </div>
                <Gallery key={i} name={name} place={place} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
