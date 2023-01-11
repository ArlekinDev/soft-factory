import React from 'react';
import { useStateContext } from "../contexts/index";

function AnimationForm({delay, duration}) {
    const { openForm } = useStateContext();

  return (
    <div style={{transitionDelay: delay, transitionDuration: duration}} className={`w-full h-full bg-aqua absolute top-0  ${openForm ?"translate-x-full" : "translate-x-0"}`}></div>
  )
}

export default AnimationForm