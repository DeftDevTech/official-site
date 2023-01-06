const removeOverlay = () => {
  let sectionWithOutOverlay = document.querySelectorAll("section.noOverlay");
  if (sectionWithOutOverlay) {
    sectionWithOutOverlay.forEach((section) =>
      section.removeAttribute("data-overlay-dark")
    );
  }
};

export default removeOverlay;
