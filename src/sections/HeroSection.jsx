import React from "react";
import { useStateContext } from "../contexts/index";
import ui from "../assets/videos/ui.gif";

function HeroSection() {
  const { setOpenForm } = useStateContext();

  return (
    <section id="hero" className="adaptive-hero w-full min-h-screen max-h-[1000px] xl:max-h-auto flex justify-center items-center xl:mt-[50px]">
      {/* section-wrapper {HeroSection} */}
      <div className="w-[80%] flex items-center justify-between xl:flex-col xl:justify-center xl:space-y-[50px]">

        {/* text-wrapper */}
        <div className="xl:w-auto xl:items-center max-w-[60%] flex flex-col space-y-[30px] relative ">
          <span className="text-[30px] xl:text-center sm:text-[20px]">Мы разрабатываем</span>
          <h1 className="text-[90px] bold-semi 2xl:text-[75px] xl:text-[65px] xl:w-fit xl:text-center xl:flex xl:flex-col xl:items-center xl:justify-center md:text-[45px] sm:text-[35px]">
            <span className="text-animate">сайты</span> и мобильные<p className="last-animate-text">приложения</p>
          </h1>
          <p className="text-[25px] xl:text-[20px] xl:text-center">
            Создаем высоконагруженные порталы, интернет-магазины, интеграции по
            API
          </p>
        </div>

        {/* video-wrapper */}
        <div className="relative flex flex-col items-center w-[30%] h-[500px] xl:h-[300px] sm:h-[230px]">
          {/* video */}
          <div className="rounded-full xl:w-[300px] xl:h-[300px] w-[500px] h-[500px] bg-aqua absolute top-0 overflow-hidden flex items-center justify-center  sm:h-[230px] sm:w-[230px]">
            <img
              src={ui}
              className="scale-[2] pointer-events-none"
              alt="animation"
            ></img>
          </div>

          {/* animation-text */}
          <div
            onClick={() => setOpenForm(true)}
            className="xl:hidden w-[200px] h-[200px] absolute bottom-[-100px] rounded-full flex items-center justify-center"
          >
            <div className="w-full h-full relative rounded-full animate-circle overflow-hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
