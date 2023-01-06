const heroSkillsProgress = () => {
  if (document.querySelector(".hero-sec .skills-box")) {
    window.addEventListener("scroll", () => {
      document.querySelectorAll(".skill-progress .progres").forEach((item) => {
        let myVal = item.getAttribute("data-value");
        if (document.querySelector(".hero-sec")) {
          if (
            window.pageYOffset >
            document.querySelector(".hero-sec").offsetTop - 800
          ) {
            item.style.width = myVal;
          }
        }
      });
    });
  }
};
export default heroSkillsProgress;
