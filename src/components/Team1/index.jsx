/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import team1Data from '../../data/sections/team1.json';

class Team1 extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="navs mt-30 wow fadeInUp" data-wow-delay=".3s">
        <span
          className="prev cursor-pointer"
          onClick={() => this.slider.slickPrev()}
        >
          <i className="fas fa-chevron-left"></i>
        </span>
        <span
          className="next cursor-pointer"
          onClick={() => this.slider.slickNext()}
        >
          <i className="fas fa-chevron-right"></i>
        </span>
      </div>
    );
  };
  render() {
    return (
      <section id="team" className="team section-padding mt-5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 valign">
              <div className="full-width">
                <div className="sec-head custom-font mb-0">
                  <h6>DeftDev</h6>
                  <h3>Our Team.</h3>
                </div>
                {this.renderArrows()}
              </div>
            </div>
            <div className="col-lg-8">
              <Slider
                className="team-container"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  autoplay: true,
                  slidesToScroll: 1,
                  slidesToShow: 4,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 4
                      }
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1
                      }
                    }
                  ]
                }}
              >
                {team1Data.map((item) => (
                  <div
                    className="item wow fadeInUp"
                    data-wow-delay=".3s"
                    key={item.id}
                  >
                    <div className="img wow imago">
                      <img
                        src={`${process.env.BASE_PATH}${item.image}`}
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <h5>{item.name}</h5>
                      <span>{item.title}</span>
                      <div className="social">
                        <a href="#0">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i className="fab fa-behance"></i>
                        </a>
                        <a href="#0">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team1;
