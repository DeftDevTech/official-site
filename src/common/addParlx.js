const addParlx = () => {
  window.addEventListener("scroll", () => {
    var scrolled = window.pageYOffset;
    if (document.querySelector(".fixed-slider .capt .parlx")) {
      document.querySelector(".fixed-slider .capt .parlx").style.transform =
        "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
      document.querySelector(".fixed-slider .capt .parlx").style.opacity =
        1 - scrolled / 600;
    }
    if (document.querySelector(".fixed-slider .caption")) {
      document.querySelector(".fixed-slider .caption").style.transform =
        "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
      document.querySelector(".fixed-slider .caption").style.opacity =
        1 - scrolled / 600;
    }
  });
};
export default addParlx;
