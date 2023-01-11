import React from "react";
import { useStateContext } from "../contexts/index";
import { AnimationForm } from ".";

function ModalForm() {
  const { openForm, setOpenForm } = useStateContext();

  return (
    <div
      className={`adaptive-form overflow-y-scroll srool flex justify-center items-center w-full h-screen bg-aqua fixed top-0 z-[150]  ${
        openForm ? "translate-x-0 bd-open" : "-translate-x-full lg:-translate-x-[150%] bg-close "
      } `}
    >
      {/* form burger-btn */}
      <div
        onClick={() => setOpenForm(false)}
        className="adaptive-cross w-[45px] h-[45px] flex flex-col items-center justify-center burger-form absolute top-[18px] right-[47px]"
      >
        <span className="w-full h-[2px] bg-[white] burger-span translate-y-[3px] rotate-[45deg]"></span>
        <span className="w-full h-[2px] bg-[white] burger-span -translate-y-[0px] -rotate-[45deg]"></span>
      </div>
      {/* container form */}
      <div className="w-[65%] min-h-[700px] flex flex-col items-center justify-between">
        {/* title form block */}
        <div className="w-full min-h-[150px] flex flex-col items-start lg:mb-[50px]">
          <h1 className="text-center relative text-[75px] text-[white] overflow-x-hidden bold-light lg:text-[50px] sm:text-[35px]">
            Обратная связь
            <AnimationForm delay={"400ms"} duration={"500ms"} />
          </h1>
          <h3 className="relative text-[white] overflow-hidden bold-medium sm:text-[15px]">
            Оставьте заявку на просчет вашего проекта:
            <AnimationForm delay={"550ms"} duration={"1s"} />
          </h3>
        </div>

        <form
          action="#"
          method="post"
          className="w-full flex flex-col  h-[500px] space-y-[30px] xl:space-y-[50px]"

        >
          <div className="w-full h-fit flex justify-between items-center flex-wrap">
            <div className="xl:w-full relative overflow-x-hidden mt-[20px]">
              <input
                className="xl:w-full placeholder:text-[white] text-[32px] bg-[transparent] border-b-[1px] border-[white] border-solid text-[white] bold-light"
                type="tel"
                placeholder="Имя"
                name="name"
                required
              />
              <AnimationForm delay={"300ms"} duration={"2s"} />
            </div>
            <div className="xl:w-full relative overflow-x-hidden mt-[20px]">
              <input
                className="xl:w-full placeholder:text-[white] text-[32px] bg-[transparent] border-b-[1px] border-[white] border-solid text-[white] bold-light"
                type="tel"
                placeholder="E-mail"
                name="email"
                required
              />
              <AnimationForm delay={"300ms"} duration={"2s"} />
            </div>
            <div className="xl:w-full relative overflow-x-hidden mt-[20px]">
              <input
                className="xl:w-full placeholder:text-[white] text-[32px] bg-[transparent] border-b-[1px] border-[white] border-solid text-[white] bold-light"
                type="tel"
                placeholder="Телефон"
                name="number"
                required
              />
              <AnimationForm delay={"300ms"} duration={"2s"} />
            </div>
          </div>
          <div className="srool relative overflow-x-hidden">
            <textarea
              className="resize-none srool w-full h-full placeholder:text-[white] bg-[transparent] border-[1px] border-[white] border-solid p-[10px] text-[white]"
              cols="30"
              rows="10"
              placeholder="Комментарий"
              name="comments"
              required
            ></textarea>
            <AnimationForm delay={"500ms"} duration={"2s"} />
          </div>
          <div className="srool relative h-[60px] w-fit">
          <button type="submit" className="button h-[60px] py-[15px] px-[100px] bg-[white] text-[20px]">Отправить</button>
          <AnimationForm delay={"500ms"} duration={"2s"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
