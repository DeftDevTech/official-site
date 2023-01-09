import React from 'react';
import introData from '../../data/sections/intro.json';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Parallax, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Split from '../Split';
import fadeWhenScroll from '../../common/fadeWhenScroll';
import removeSlashFromPagination from '../../common/removeSlashFromPagination';

SwiperCore.use([Navigation, Pagination, Parallax, Autoplay]);

const IntroWithSlider1 = ({ sliderRef }) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll();
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header
      ref={sliderRef}
      className="slider slider-prlx fixed-slider text-center"
    >
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            autoplay={{
              delay: 1000,
              disableOnInteraction: true
            }}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current
            }}
            pagination={{
              type: 'fraction',
              clickable: true,
              el: paginationRef.current
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    'data-swiper-parallax',
                    0.75 * swiper.width
                  );
                }

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {introData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="bg-img valign"
                  style={{
                    backgroundImage: `url(${process.env.BASE_PATH}${slide.image})`
                  }}
                  data-overlay-dark="6"
                >
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-7 col-md-9">
                        <div className="caption center">
                          <Split>
                            <h1 className="words chars splitting">
                              {typeof slide.title === 'object' ? (
                                <>
                                  {slide.title.first} <br />
                                  {slide.title.second}
                                </>
                              ) : (
                                slide.title
                              )}
                            </h1>
                          </Split>
                          {slide?.content && <p>{slide.content}</p>}
                          {/* <Link href="/about/about-dark">
                            <a className="btn-curve btn-lit mt-30">
                              <span>Look More</span>
                            </a>
                          </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div className="setone setwo">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-right"></i>
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div
          ref={paginationRef}
          className="swiper-pagination top botm custom-font"
        ></div>

        <div className="social-icon">
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
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default IntroWithSlider1;
