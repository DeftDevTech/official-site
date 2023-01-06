import { delay, animateEl } from "./customFunctions";

const loadingPace = () => {
  Pace.on("start", function () {
    //When Pace Start
    document.querySelector("#preloader").classList.remove("isdone");
  });
  Pace.on("done", function () {
    //When Pace End
    if (document.querySelector(".hamenu")) {
      delay(300, animateEl(document.querySelector(".hamenu"), "-100%"));
      document.querySelector(".topnav .menu-icon").classList.remove("open");
    }
    document.querySelector("#preloader").classList.add("isdone");
  });

  if (document.querySelector("body").classList.contains("pace-done")) {
    document.querySelector("#preloader").classList.add("isdone");
  }

  document.addEventListener("load", () => {
    document.querySelector("#preloader").classList.add("isdone");
  });
};

export default loadingPace;
