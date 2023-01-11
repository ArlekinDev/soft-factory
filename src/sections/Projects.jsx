import React from "react";
import { projectsArr } from "../data/data";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full mt-[100px] flex justify-center items-center z-[2] bg-[white]" 
    >
      {/* proj-containers */}
      <div className="w-[80%] flex flex-col items-center space-y-[100px] md:space-y-[50px]">
        {/* title-wrapper */}
        <div className="w-full flex flex-col space-y-[30px]">
          <h1 className="text-[75px] md:text-[45px] md:text-center">Проекты</h1>
          <p className="text-[25px] bold-medium md:text-[20px] md:text-center">
            Мы ценим клиентов и полностью погружаемся в их продукты — это
            позволяет нам выполнять бизнес-задачи заказчиков и делать больше,
            чем от нас ожидают.
          </p>
        </div>

        {projectsArr.map((project) => (
          <div
            key={project.id}
            className="w-full flex 4xl:flex-col  justify-between items-center flex-wrap"
          >
            {/* image-block */}
            <div className="w-[550px] 4xl:w-full h-[550px] rounded-[30px] relative overflow-hidden md:h-[350px]">
            <a href={project.link} rel="noreferrer" target="_blank">
                   {/* cover-img */}
                   <img
                src={project.src}
                alt={project.src}
                className="absolute w-full h-full object-cover hover:scale-[2] hover:opacity-0 z-[10]"
              />
              {/* video */}
              <img
                src={project.video}
                className="w-full h-full absolute scale-[1.1] md:scale-[3]"
                alt="item"
              ></img>
            </a>
            </div>

            <div className="w-[60%] 4xl:w-full h-[500px] flex flex-col items-start justify-evenly">
              {/* stacks-desc */}
              <div className="w-full flex space-x-[20px] flex-wrap lg:space-x-[0] lg:space-y-[0] lg:gap-[10px] md:justify-center md:items-center">
                {project.stacks.map((stack) => (
                  <div
                    key={stack.id}
                    className="py-[5px] px-[20px] rounded-[10px] border-solid border-[1px] border-[lightgray] text-[14px] 4xl:text-[16px]"
                  >
                    {stack.title}
                  </div>
                ))}
              </div>
              {/* title and desc block */}
              <div className="flex flex-col space-y-[20px] md:items-center">
                <h1 className="text-[35px] 4xl:text-[45px] md:text-center md:text-[35px]">{project.title}</h1>
                <p className="text-[20px] md:text-center">{project.desc}</p>
              </div>

              {/* btn */}
              <a target="_blank" rel="noreferrer" href={project.link} className="py-[20px] px-[75px] rounded-[40px] border-solid border-[1px] border-[lightgray] bold-light hover:bg-aqua hover:text-[white] md:hidden">Перейти на сайт</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
