import React from "react";
import CountUp from "react-countup";
import counter from "../Data/CounterData";
import "../css/Counter.css";

const Counter = () => {
  return (
    <>
      <div className="container  count  mx-auto  py-5">
        <div className="text-center mb-2">
          <h2 className="text-center border-bottom-title w-100 head-color">
            <span className="addcolor">Our</span> Achievement
          </h2>
          <p className="px-md-5 textjustify px-4">
            {" "}
            Aksharaa School celebrates excellence in academics, arts, and
            sports, with students achieving national and global recognition.
            These successes reflect our teachers' dedication and a dynamic
            environment that inspires growth.{" "}
          </p>
        </div>
        <div className="row py-5 mb-3">
          {counter &&
            counter.map((count) => (
              <div
                className={`col-lg-3 col-md-6 col-sm-6 mb-4 counter ${count.name.toLowerCase()}`}
                key={count.id}
              >
                <div className="counter-content ">
                  <div className="counter-icon">
                    <i className={count.icon} />
                  </div>

                  <span className="counter-value ">
                    <CountUp
                      end={count.counterNo}
                      duration={3}
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                    />
                    +
                  </span>
                  <h3>{count.name}</h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Counter;
