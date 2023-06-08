import React from "react";
import "../index.scss";
import colorStore from "../Store/ThemeColorStore";
import CardComponent from "../Components/Card";
import { projectsData, projectsData2 } from "../Data/ProjectsData";

export default function Project() {
  return (
    <div className="px-0 lg:px-12 py-6 full">
      <h1
        className={`font-playfair text-5xl ${colorStore.themeColorClass}--text mt-20`}
      >
        Projects
      </h1>
      <div className="mt-12 flex flex-col lg:flex-row gap-5">
        {projectsData2.map((project) => {
          return (
            <CardComponent
              title={project.title}
              description={project.description}
              image={project.image}
              alt={project.alt}
              date={project.date}
            />
          );
        })}
      </div>
      <div className="mt-5 flex flex-col lg:flex-row gap-5">
        {projectsData.map((project) => {
          return (
            <CardComponent
              title={project.title}
              description={project.description}
              image={project.image}
              alt={project.alt}
              date={project.date}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
}
