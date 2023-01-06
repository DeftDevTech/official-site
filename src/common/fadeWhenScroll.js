const fadeWhenScroll = () => {
  window.addEventListener("scroll", () => {
    var scrolled = window.pageYOffset;
    if (document.querySelector(".fixed-slider .caption")) {
      document.querySelectorAll(".fixed-slider .caption").forEach((caption) => {
        caption.style.transform =
          "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
        caption.style.opacity = 1 - scrolled / 600;
      });
    }
  });
};
export default fadeWhenScroll;
