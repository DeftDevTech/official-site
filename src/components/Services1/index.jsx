import React from 'react';
import Split from '../Split';
import Link from 'next/link';

const Services1 = () => {
  return (
    <section id="solution" className="services py-5 ">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            DeftDev
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Solution and Service
            </h3>
          </Split>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 item-box bg-img wow fadeInLeft"
            data-wow-delay=".3s"
            style={{
              backgroundImage: `url(${process.env.BASE_PATH}/img/1.jpg)`
            }}
          >
            <h4 className="custom-font">What we do?</h4>
            <Link href="/about/about-dark">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>Contact us</span>
              </a>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s"
          >
            <span className="icon pe-7s-paint-bucket"></span>
            <h6>Outsource Team</h6>
            <p>
              a third-party vendor to handle specific tasks or functions on a
              long-term basis for only your enterprise.
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".7s"
          >
            <span className="icon pe-7s-phone"></span>
            <h6>Turnkey Project</h6>
            <p>
              a fully operation and facility that is delivered to a client ready
              for use, with minimal setup or additional work required. We is
              responsible for designing, develop, and testing the project before
              handing it over to the client.
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".9s"
          >
            <span className="icon pe-7s-display1"></span>
            <h6>Core Product</h6>
            <p>Comming Soon</p>
          </div>
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default Services1;
