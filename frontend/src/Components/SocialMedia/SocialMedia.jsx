import React from "react";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";

const SocialMedia = () => {
  const SocialMedia = ({ image }) => {
    return (
      <div>
        <img src={image} className="w-3.5 h-3.5 md:w-5 md:h-5" />
      </div>
    );
  };
  return (
    <div className="flex gap-5">
      <SocialMedia image={instagram} />
      <SocialMedia image={twitter} />
      <SocialMedia image={linkedin} />
    </div>
  );
};

export default SocialMedia;
