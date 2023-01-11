import React from "react";
import { Question } from "../components";
import { useStateContext } from "../contexts/index";

function Questions() {

  const { opened } = useStateContext()

  return (
    <section id="qa" className="w-full h-fit bg-aqua flex justify-center items-center">
      {/* questions-wrapper */}

      <div className="w-[80%] h-fit flex flex-col py-[100px]">
        {/* title wrapper */}
        <div className="w-full h-fit flex flex-col space-y-[30px] border-white-bott py-[50px]">
          <h1 className="text-[75px] bold-bold text-[white] lg:text-[45px] lg:text-center sm:text-[35px]">
            Наши направления
          </h1>
          <p className="text-[25px] text-[white] bold-medium lg:text-center lg:text-[20px]">
            От прототипа до реализации: мы работаем над проектами любой
            сложности. Главный принцип — делать их максимально удобными для
            пользователей.
          </p>
        </div>

        {/* questions-block */}
        <div className="w-full h-fit">
          {opened.map((que) => (
            <Question key={que.id} que={que} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Questions;
