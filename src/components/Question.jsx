import React from "react";
import { useStateContext } from "../contexts/index";


function Question({ que }) {

    const { opened, setOpened } = useStateContext()

    const openedQA = (itemId) => {
        setOpened(
          opened.map((open) => {
            if (open.id !== itemId) return open;
    
            return {
              ...open,
              opened: !open.opened,
            };
          })
        );
      };

  return (
    <div onClick={() => openedQA(que.id)} className={`relative pt-[30px] pb-[30px] flex flex-col border-white-bott ${que.opened ? "space-y-[50px]" : "space-y-0 animate-hover-QA"} `}>
      <div className="adaptive-qa w-full flex justify-between items-center">
        <span className="adaptive-title-qa text-[30px] text-[white] bold-semi md:text-[25px]">{que.title}</span>

        <div className={`w-[60px] h-[60px] rounded-full flex justify-center items-center flex-col ${que.opened && "bg-[#009BD5]"}`}>
          <span className={`w-[50%] h-[2px] bg-[white] translate-y-[70%] ${que.opened ? "rotate-[0deg] opacity-0" : "rotate-[90deg] opacity-1"}`}></span>
          <span className="w-[50%] h-[2px] bg-[white]"></span>
        </div>
      </div>

      <p className={`adaptive-p-qa pointer-event-none text-[white] ${que.opened ? "text-[22px] opacity-1" : " text-[1px] opacity-0"}`}>{que.par}</p>
    </div>
  );
}

export default Question;
