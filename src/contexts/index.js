import React, { createContext, useContext, useState } from 'react';

import { questions } from "../data/data";

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
  const [openBurger, setOpenBurger] = useState(false);
  const [openForm, setOpenForm] = useState(false)
  const [opened, setOpened] = useState(questions);

  return (
    <StateContext.Provider value={{openBurger, setOpenBurger, openForm, setOpenForm, opened, setOpened}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);