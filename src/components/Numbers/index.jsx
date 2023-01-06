import React from "react";
import CountUp from "react-countup";
import numbers1Data from "../../data/sections/numbers1.json";
import Split from "../Split";
import VisibilitySensor from "react-visibility-sensor";

const Numbers1 = () => {
  return (
    <section className="number-sec section-padding sub-bg">
      <div className="container">
        <div className="row">
          {numbers1Data.map((item) => (
            <div className="col-lg-3 col-md-6" key={item.id}>
              <div className={`item ${item.id == 1 ? "no-bord" : ""}`}>
                <span className={`icon ${item.icon}`}></span>
                <h3 className="custom-font">
                  &nbsp;
                  <CountUp redraw={true} end={item.value} duration="3">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <>
                          <span className="count" ref={countUpRef} />{" "}
                          {item.id == 3 ? "K" : ""}
                        </>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h3>

                <Split>
                  <p className="wow txt words chars splitting" data-splitting>
                    {item.txt}
                  </p>
                </Split>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers1;
