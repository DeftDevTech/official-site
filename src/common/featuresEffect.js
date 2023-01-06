import { getSiblings } from "./customFunctions";

const featuresEffect = () => {
  var featuresitems = document.querySelectorAll(".feat .items");
  if (featuresitems) {
    featuresitems.forEach((item) => {
      item.onmouseover = function (event) {
        item.classList.add("active");
        let siblings = getSiblings(item),
          siblingEl = siblings.map((e) => e.classList.remove("active"));
      };
    });
  }
};
export default featuresEffect;
