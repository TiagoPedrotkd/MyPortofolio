import { useLayoutEffect } from "react";
import { Home } from "./components/Home/Home";

function App() {

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
      <Home />
    </>
  );
}

export default App;
