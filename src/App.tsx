import { useEffect, useLayoutEffect } from "react";
import { Home } from "./components/Home/Home";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  useLayoutEffect(() => {
    const loader = document.getElementById("loader")!;
    setTimeout(() => {
      loader.classList.add("loaded");
      setTimeout(() => {
        document.body.removeChild(loader);
      }, 300);
    }, 2000);
  }, []);

  return(
    <>
      <progress max="100" value="0"></progress>
      <Home />
    </>
  );
}

export default App;
