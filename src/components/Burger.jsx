import React from "react";
import { useStateContext } from "../contexts/index";
import { navLinks, footerLogos } from "../data/data";

function Burger() {
  const { openBurger, setOpenBurger, setOpenForm } = useStateContext();
  return (
    <div
      className={`overflow-y-scroll  srool w-full min-h-screen flex justify-center items-center fixed top-0 right-0 z-[99] ${
        openBurger ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* content */}
      <div className="w-full h-full  flex items-center flex-col space-y-[200px] z-[100] lg:space-y-[100px]">
        {/* burger btn */}
        <div
          onClick={() => setOpenBurger(false)}
          className={`xl:right-[15px] overflow-hidden duration-[500ms] w-[40px] h-[40px] absolute top-[18px] right-[47px] flex flex-col item-center justify-center space-y-[7px] ${
            openBurger ? "opacity-1 rotate-0" : "opacity-0 -rotate-[45deg]"
          }`}
        >
          <span
            className={`duration-[600ms] w-full h-[2px] bg-black ${
              openBurger && "bg-[white] rotate-[45deg] translate-y-[8px]"
            }`}
          ></span>
          <span
            className={`duration-[600ms] w-full h-[2px] bg-black ${
              openBurger && "-translate-x-full bg-[white]"
            }`}
          ></span>
          <span
            className={`duration-[600ms] w-full h-[2px] bg-black ${
              openBurger && "bg-[white] -rotate-[45deg]  -translate-y-[10px]"
            }`}
          ></span>
        </div>

        {/* nav block */}
        <div className="w-[70%] h-fit flex items-center justify-between 2xl:w-[90%] md:flex-wrap md:justify-center">
          {/* nav links */}
          <div className="flex flex-col space-y-[10px] text-[75px] bold-light">
            {navLinks.map((item) => (
              <a
              onClick={() => setOpenBurger(false)}
                key={item.id}
                href={`#${item.anchor}`}
                style={{transitionDelay: openBurger ? `${item.delayTime}` : "0ms"}}
                className={`sm:text-[40px] lg:text-[50px] text-[white]
                duration-[500ms]  
                ${openBurger ? "translate-x-0 opacity-1" : "translate-y-[100px] opacity-0"}
                `}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* form btn */}
          <div
          onClick={() => setOpenForm(true)}
            className={`md:mt-[30px] xl:w-[200px] xl:h-[200px] relative w-[450px] h-[450px] flex justify-center items-center text-[white]
            before:content-['']
            before:absolute
            before:w-full
            before:h-full
            before:bg-[#4B4B4B]
            before:rounded-full
            before:duration-[500ms]
            hover:before:scale-[1.2]
            hover:before:bg-aqua
            ${openBurger ? "translate-y-0 opacity-1 delay-[400ms]" : "translate-y-[200px] opacity-0 delay-0"}
            `}
          >
            <span className="flex z-[1] text-[white]">Оставить заявку</span>
          </div>
        </div>

        {/* footer block */}
        <div className={`w-[70%] flex items-center 3xl:flex-col 3xl:items-center 3xl:space-y-[40px] md:space-y-[20px] justify-between ${openBurger ? "translate-y-0 delay-[1s] opacity-1" : "translate-y-[100px] delay-0 opacity-0"}`}>
          {/* footer links */}
          <div className="w-[60%] 3xl:w-full 3xl:flex-wrap flex items-center justify-between text-[24px] text-[#4B4B4B] 4xl:w-[80%]">
            <a href="mailto:softfactory.uz@gmail.com" className="3xl:mt-[30px] mil" target="_blank" rel="noreferrer">
              info@soft-factory.uz
            </a>
            <a className="3xl:mt-[30px] mil" href="tel: +998330135504">
             +998 33 013 55 04
            </a>
            <span className="text-[#4B4B4B] mil 3xl:mt-[30px]">Узбекистан г.Самарканд </span>
          </div>

          {/* icons */}
          <div className={`flex items-center space-x-[25px]`}>
            {footerLogos.map((image) => (
            <a href={image.href} key={image.id} target="_blank" rel="noreferrer">
             <img className="w-[30px] img-hover" src={image.src} alt={image.src}/>
            </a>
            ))}
          </div>

        </div>
      </div>
      <div
        className={`absolute w-full h-full bg-[#232323] duration-[1s] ease-in-out origin-top-right ${
          openBurger
            ? "scale-[1.5] translate-x-0 translate-y-0 rounded-bl-[30%] md:scale-1 md:rounded-bl-[0]"
            : "translate-x-[75%] -translate-y-[75%] rounded-bl-[100%] scale-1 md:-translate-y-[100%] md:rounded-bl-[0] md:translate-x-[0%]"
        }`}
      ></div>
    </div>
  );
}

export default Burger;
