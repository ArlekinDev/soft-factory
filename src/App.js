import React from "react";
import { Anchors } from "./components";
import { HeaderInner,  HeroSection, Questions, Stacks, Projects, Footer } from "./sections";

function App() {
  return (
    <>
          {/* header-main */}
          <HeaderInner />
      {/* main-content */}
      <main>
        <HeroSection/>
        <Questions/>
        <Stacks/>
        <Projects/>
        <Anchors/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
