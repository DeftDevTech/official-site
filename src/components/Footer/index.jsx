/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import Map from './Map';
import appData from '../../data/app.json';

const Footer = ({ noSubBG }) => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer
      className={`footer-half ${noSubBG ? '' : 'sub-bg'} section-padding pb-0`}
      id="contact"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img
                    src={`${process.env.BASE_PATH}${appData.lightLogo}`}
                    alt=""
                  />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> sale@deftdev.tech
                  </li>
                  <li>
                    <span>Address : </span> 65 Rama IX Rd, Huai Khwang, Bangkok
                    10310 (Floor 12A)
                  </li>
                  <li>
                    <span>Phone : </span> (+66) 080-008-8686
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a href="#0" className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fa fa-building"></i>
                  </a>
                  {/* <a href="#0" className="icon">
                    <i className="fab fa-behance"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50 d-none ">
              <h6 className="custom-font stit simple-btn">Newslatter</h6>
              <p>Sign up for subscribe out newsletter!</p>
              <Formik
                initialValues={{
                  subscribe: ''
                }}
                onSubmit={async (values) => {
                  await sendEmail(500);
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.subscribe = '';
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group custom-font">
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="subscribe"
                        placeholder="Your Email"
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                      <button className="cursor-pointer">Subscribe</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            {/* <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d61994.195789575126!2d100.55344760849901!3d13.800728720755806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d13.8510336!2d100.60759039999999!4m5!1s0x30e29e8ca43973c1%3A0x3ad524358b1de0a9!2z4LiK4Liz4LiZ4Liy4LiN4LmA4Lie4LmH4LiN4LiK4Liy4LiV4Li0IGdvb2dsZSBtYXA!3m2!1d13.7566122!2d100.5688088!5e0!3m2!1sth!2sth!4v1672890531547!5m2!1sth!2sth" width="600" height="450" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
            </div> */}
            <div>
              <Map />
            </div>
            {/* <div className="insta">
              <h6 className="custom-font stit simple-btn">Instagram Post</h6>
              <div className="insta-gallary">
                <a href="#0">
                  <img src="/img/insta/1.jpg" alt="" />
                </a>
                <a href="#0">
                  <img src="/img/insta/2.jpg" alt="" />
                </a>
                <a href="#0">
                  <img src="/img/insta/3.jpg" alt="" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
        <div className="copyrights text-center">
          <p>© 2023, DeftDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
