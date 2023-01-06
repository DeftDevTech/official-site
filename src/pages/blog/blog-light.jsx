import React from "react";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar";
import BlogStanderd from "../../components/Blog-standerd";
import Footer from "../../components/Footer";

const BlogLight = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    document.querySelector('body').classList.add('menubarblack');
    
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="cont">
                <h1 className="extra-title mb-10">Our Blog.</h1>
                <p>
                  All the most current news and events of our creative team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogStanderd />
      <Footer />
    </LightTheme>
  );
};

export default BlogLight;
