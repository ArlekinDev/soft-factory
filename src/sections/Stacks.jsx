import React from "react";
import { stacksArr } from "../data/data"

function Stacks() {
  return (
    <section id="stacks" className="w-full h-screen flex justify-center items-center mt-[100px] xl:mt-[200px] adaptive-stack 3xl:mt-[200px]">
      <div className="w-[80%] flex flex-col items-start space-y-[100px] xl:items-center">
        {/* title-wrapper */}
        <div className="max-w-[70%] flex flex-col items-start h-fit space-y-[30px] xl:items-center xl:w-full xl:justify-center xl:text-center">
          <h1 className="text-[75px] xl:text-center md:text-[45px]">Технологии</h1>
          <p className="text-[25px] bold-medium md:text-[16px] xl:hidden 2xl:hidden">
            На стадии проектирования подбираем наиболее подходящий стек
            технологий. Во время разработки мы регулярно делаем код-ревью и
            следим за целостностью архитектуры
          </p>
        </div>

        {/* content-wrapper */}
        <div className="w-full flex justify-between items-center 2xl:flex-col">

          {/* circle */}
          <div className="w-[400px] h-[400px] rounded-full flex items-center justify-center lg:w-[250px] lg:h-[250px] md:w-[200px] md:h-[200px]">
            <div className="w-full h-full relative rounded-full animate-circle-sec overflow-hidden"></div>
          </div>

          {/* dec-wrapper */}
          <div className="w-[65%] h-[600px] flex flex-col items-start space-y-[50px] overflow-y-scroll overflow-x-hidden srool py-[50px] px-[20px] lg:w-full">
            {stacksArr.map((stack) => (
              <div className="p-[30px] w-full flex flex-col items-start space-y-[15px] fil-shadow" key={stack.id}>
                <h2 className="text-[30px] bold-medium">{stack.title}</h2>
                <p className="bold-light text-[18px] sm:text-[16px] sm:text-center">{stack.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stacks;
