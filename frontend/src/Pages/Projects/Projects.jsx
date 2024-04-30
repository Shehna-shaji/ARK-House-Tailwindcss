import React from "react";
import ProjectDetail from "../../Section/ProjectDetail/ProjectDetail";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

const Projects = () => {
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumbs />
      <div className="flex flex-col gap-4">
        <h5 className="text-2xl font-semibold text-black">Projects</h5>
        <h5 className="text-lg font-semibold text-black">
          {" "}
          Our projects are examples of attitudes rather than design
        </h5>
        <p className="text-sm font-normal">
          They are samples in a series of contextual examination rather than
          isolated masterpieces. They are associative rather than symbolic. They
          are comments rather than statements. Every story told is a shared
          experience of contemporary conditions set within a given frame.
        </p>
      </div>
      <ProjectDetail />
    </div>
  );
};

export default Projects;
