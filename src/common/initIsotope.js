const initIsotope = () => {
  var grid = document.querySelectorAll(".gallery");
  var iso;
  grid.forEach((item) => {
    iso = new Isotope(item, {
      itemSelector: ".items",
    });
  });

  var filtersElem = document.querySelector(".filtering");
  if (filtersElem) {
    filtersElem.addEventListener("click", function (event) {
      if (!matchesSelector(event.target, "span")) {
        return;
      }
      var filterValue = event.target.getAttribute("data-filter");
      filterValue = filterValue;
      iso.arrange({ filter: filterValue });
    });
    var buttonGroups = document.querySelectorAll(".filtering");
    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }
    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener("click", function (event) {
        if (!matchesSelector(event.target, "span")) {
          return;
        }
        buttonGroup.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
      });
    }
  }
};

export default initIsotope;
