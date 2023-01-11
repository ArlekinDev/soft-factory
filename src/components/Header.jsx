import React, {useState, useEffect} from "react";
import { navLinks } from "../data/data";
import { useStateContext } from "../contexts/index";
import logo from "../assets/images/logo.svg"

function Header() {

  const [scrolled, setScrolled] = useState(false)
  const { openBurger,setOpenBurger } = useStateContext();

  useEffect(() => {
    function onScroll () {
      if(window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }


    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`bg-[white] fixed top-0 z-[50] w-full flex justify-center items-center h-[75px] ${scrolled && "b-shadow" }`}>
      {/* header wrapper */}
      <div className="overflow-x-hidden w-[95%] h-[90%] flex justify-between items-center">
        {/* logo */}
        <div onClick={() => window.location.reload()} className={`duration-[500ms] flex items-center justify-center h-full ${scrolled ? "-translate-x-full opacity-0" : "translate-x-0 opacity-1"}`}>
          <img className="h-full" src={logo} alt="logo" />
          <span className="tracking-[3px]">Factory</span>
        </div>
        {/* nav bar */}
        <nav className={`xl:hidden duration-[500ms] flex space-x-[45px] items-center h-full ${scrolled && "scale-x-0 pointer-events-none opacity-0"}`}>
          {navLinks.map((item) => (
            <a
            key={item.id}
            href={`#${item.anchor}`}
              className="relative h-[50%]
              cursor-pointer
            duration-[500ms]
            flex
            justify-center
            items-center
            overflow-hidden
            before:content-['']
            before:absolute
            before:w-full
            before:h-[2px]
            before:bg-aqua
            before:bottom-0
            before:duration-[500ms]
            before:scale-x-0
            hover:before:scale-x-[1]
            hover:text-aqua
            "
            >
              {item.title}
            </a>
          ))}
        </nav>
        {/* links wrapper */}
        <div className={`duration-[500ms] flex items-center space-x-[30px] h-full`}>
          <a className="lg:hidden animate-stick" target="_blank" rel="noreferrer" href="mailto:softfactory.uz@gmail.com">
            info@soft-factory.uz
          </a>
          <a className="lg:hidden  animate-stick" href="tel: +998330135504">
            +998 33 013 55 04
          </a>
          <div onClick={() => setOpenBurger(true)} className={`  origin-top-right duration-[500ms] w-[40px] h-[40px] flex flex-col items-center justify-center space-y-[7px] z-[100] ${openBurger ? "rotate-[45deg] opacity-0" : "rotate-[0] opacity-1"} ${scrolled ? "scale-x-[1] lg:scale-y-[1] lg:opacity-1 lg:rotate-[0deg] " : "scale-x-[0] lg:scale-x-[1]  lg:scale-y-[0] lg:rotate-[90deg] lg:opacity-0"}`}>
            <span className="duration-[600ms] w-full h-[2px] bg-[#232323] "></span>
            <span className="duration-[600ms] w-full h-[2px] bg-[#232323] "></span>
            <span className="duration-[600ms] w-full h-[2px] bg-[#232323] "></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
