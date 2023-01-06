import appData from "../data/app.json";
import { getSiblings, animateEl, delay } from "./customFunctions";

const handleFullScreenNavbar = () => {
  function noScroll() {
    window.scrollTo(0, 0);
  }
  var open = false,
    navDark = document.querySelector(".topnav.dark"),
    logoChan = document.querySelector(".topnav.dark .logo img"),
    menuIcon = document.querySelector(".topnav .menu-icon"),
    menuText = document.querySelector(".topnav .menu-text");

  if (menuIcon) {
    menuIcon.addEventListener("click", function () {
      open = !open;
      document.querySelector(".hamenu").classList.toggle("open");
      if (open) {
        animateEl(document.querySelector(".hamenu"), "0px");
        document.querySelector(".topnav .menu-icon ").classList.add("open");
        menuText.innerHTML = "Close";
        if (navDark) {
          navDark.classList.add("navlit");
        }
        if (logoChan) {
          logoChan.setAttribute("src", appData.lightLogo);
        }
        window.addEventListener("scroll", noScroll);
      } else {
        delay(300, animateEl(document.querySelector(".hamenu"), "-100%"));
        document.querySelector(".topnav .menu-icon").classList.remove("open");
        menuText.innerHTML = "Menu";

        if (navDark) {
          navDark.classList.remove("navlit");
        }
        if (logoChan) {
          logoChan.setAttribute("src", appData.darkLogo);
        }
        window.removeEventListener("scroll", noScroll);
      }
      Splitting({ target: menuText });
    });
    document.querySelectorAll(".main-menu a").forEach((item) => {
      item.addEventListener("click", () => {
        delay(300, animateEl(document.querySelector(".hamenu"), "-100%"));
        document.querySelector(".topnav .menu-icon").classList.remove("open");
        if (navDark) {
          navDark.classList.remove("navlit");
        }
        if (logoChan) {
          logoChan.setAttribute("src", appData.darkLogo);
        }
        window.removeEventListener("scroll", noScroll);
      });
    });
  }
  document
    .querySelectorAll(".hamenu .menu-links .main-menu > li")
    .forEach((item) => {
      item.addEventListener("mouseenter", function () {
        this.style.opacity = "1";
        getSiblings(this).forEach((item) => {
          item.style.opacity = ".5";
        });
      });
      item.addEventListener("mouseleave", function () {
        document
          .querySelectorAll(".hamenu .menu-links .main-menu > li")
          .forEach((item2) => {
            item2.style.opacity = "1";
          });
      });
    });
  if (document.querySelectorAll(".main-menu > li .dmenu").length) {
    document.querySelectorAll(".main-menu > li .dmenu").forEach((item) => {
      item.addEventListener("click", function () {
        document.querySelector(".main-menu").classList.add("gosub");
        getSiblings(this.parentNode.parentNode).forEach((item) => {
          item.childNodes[1]
            ? item.childNodes[1].classList.remove("sub-open")
            : "";
        });
        this.parentNode.parentNode.childNodes[1].classList.add("sub-open");
      });
    });
  }
  if (
    document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length
  ) {
    document
      .querySelectorAll(".main-menu .sub-menu li .sub-link.back")
      .forEach((item) => {
        item.addEventListener("click", function () {
          document.querySelector(".main-menu").classList.remove("gosub");
          document.querySelector(".main-menu").classList.remove("sub-open");
        });
      });
  }
};

export default handleFullScreenNavbar;
