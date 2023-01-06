/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Clients1Data from '../../data/sections/clients1.json';
import Split from '../Split';

const Clients1 = ({ theme, subBG }) => {
  var first = Clients1Data.slice(0, Clients1Data.length);
  var second = Clients1Data.slice(4, Clients1Data.length);
  return (
    <section
      id="partner"
      className={`clients section-padding ${subBG ? 'sub-bg' : ''}`}
    >
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-4 valign">
            <div className="sec-head custom-font mb-0">
              <h6>DeftDev</h6>
              <h3>
                Our <br /> Partner
              </h3>
            </div>
          </div>
          <div className="col-lg-8 w-auto">
            <div>
              <div className="row bord">
                {first.map((item) => (
                  <div key={item.id} className="col-md-3 col-4 brands">
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${
                        item.id == 1
                          ? '.3'
                          : item.id == 2
                          ? '.6'
                          : item.id == 3
                          ? '.8'
                          : item.id == 4
                          ? '.3'
                          : ''
                      }s`}
                    >
                      <div className="img">
                        {theme === 'light' ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <a
                            href="#0"
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.url}
                          </a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="row">
                {second.map((item) => (
                  <div
                    key={item.id}
                    className={`${
                      item.id == 5
                        ? 'col-md-3 col-6 brands sm-mb30'
                        : item.id == 6
                        ? 'col-md-3 col-6 brands sm-mb30'
                        : item.id == 7
                        ? 'col-md-3 col-6 brands'
                        : item.id == 8
                        ? 'col-md-3 col-6 brands'
                        : ''
                    }`}
                  >
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${
                        item.id == 1
                          ? '.4'
                          : item.id == 2
                          ? '.7'
                          : item.id == 3
                          ? '.5'
                          : item.id == 4
                          ? '.3'
                          : ''
                      }s`}
                    >
                      <div className="img">
                        {theme === 'light' ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <a
                            href="#0"
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.url}
                          </a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients1;
