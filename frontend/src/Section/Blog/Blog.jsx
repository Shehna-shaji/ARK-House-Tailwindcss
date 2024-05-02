import React from "react";
import Heading from "../../Components/Heading/Heading";
import { blog } from "../../assets/blog";

const Blog = () => {
  const Blog = ({ image, date, title, content }) => {
    return (
      <div className="w-[302px] h-[465px] lg:w-[320px] lg:h-[480px] xl:w-[480px] ">
        <div>
          <img
            src={image}
            className="w-[300px] h-[330px] lg:w-[500px] lg:h-[300px] xl:w-[480px] xl:h-[350px]"
          />
        </div>
        <div className="bg-[#f8f8f8]">
          <p className="font-normal text-xl text-[#b2b2b2]">{date}</p>
          <p className="font-medium text-lg">{title}</p>
          <p className="font-normal text-base">{content}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-14 pt-14" id="blog">
      <Heading title="Blog" text="Show More" />
      <div className="flex gap-2">
        <div className="flex flex-col mx-auto gap-[60px] lg:flex-row lg:mx-auto lg:ml-[100px] xl:gap-10 2xl:mx-auto">
          {blog.map(({ image, date, title, content }, i) => {
            return (
              <Blog
                key={i}
                image={image}
                date={date}
                title={title}
                content={content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
