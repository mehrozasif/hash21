import React from "react";
import proof_icon from "../../assets/HomePage/process.png";
import ScrollAnimation from "react-animate-on-scroll";

function Proof(props) {
  return (
    <div className="row my-3">
      <div className="col-xl-10 mx-auto my-3">
        <ScrollAnimation
          delay={500}
          animateIn="animate__slideInLeft"
          animateOnce={true}
        >
          <div className="row bg-white p-lg-3 shade p-2 br-15 text-center m-auto">
            <h4 className="text-sm-resp my-xl-4 w-100 my-2 text-dark">
              Proof of Governance
            </h4>
            <div className="col-xl-3 col-4">
              <div className="row h-100">
                <h4 className="text-sm-resp mt-auto text-dark text-left col-12">
                  Policy Implimentation
                </h4>
                <h4 className="text-sm-resp h-25 mt-auto text-dark text-left col-12">Policy Discovery</h4>
              </div>
            </div>
            <div className="col">
              <img src={proof_icon} className="w-100" alt="proof_icon" />
            </div>
            <div className="col-xl-3 col-4">
              <div className="row h-100">
                <h4 className="text-sm-resp mt-auto text-dark text-left col-12">
                  Policy Enhancement
                </h4>
                <h4 className="text-sm-resp h-25 mt-auto text-dark text-left col-12">
                  Policy Recommendation
                </h4>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="col-xl-12 mx-auto my-3">
        <ScrollAnimation
          delay={500}
          animateIn="animate__slideInRight"
          animateOnce={true}
        >
          <div className="row bg-aqua p-lg-3 shade p-2 br-15 text-center m-auto">
            <p className="text-primary col-12 mt-3 mb-2">
                STATISTICS
            </p>
            <h1 className="text-dark col-xl-8 col-10 mx-auto my-3 text-sm-resp">
                WHY USE PROOF-OF-GOVERNANCE TO ENHANCE YOUR EXISTING GOVERNANCE?
            </h1>
            <div className="col-xl-10 col-10 mx-auto my-3 pb-xl-5">
                <div className="row justify-content-between">
                <div className="col-xl-2 col-md-5 mt-3 mt-lg-0 bg-white br-15 py-2 px-xl-3 p-2 shade">
                        <h2 className="font-weight-bold text-center text-black my-2">
                            4x
                        </h2>
                        <p className="small mb-0">
                            increase in malicious events since pandemic
                        </p>
                    </div>
                    <div className="col-xl-2 col-md-5 mt-3 mt-lg-0 bg-white br-15 py-2 px-xl-3 p-2 shade">
                        <h2 className="font-weight-bold text-center text-black my-2">
                            315 Days
                        </h2>
                        <p className="small mb-0">
                            Avg time to identify and contain malicious event
                        </p>
                    </div>
                    <div className="col-xl-2 col-md-5 mt-3 mt-lg-0 bg-white br-15 py-2 px-xl-3 p-2 shade">
                        <h2 className="font-weight-bold text-center text-black my-2">
                            $8.19M
                        </h2>
                        <p className="small mb-0">
                          (Avg cost of data breach in U.S)
                        </p>
                    </div>
                    <div className="col-xl-2 col-md-5 mt-3 mt-lg-0 bg-white br-15 py-2 px-xl-3 p-2 shade">
                        <h2 className="font-weight-bold text-center text-black my-2">
                            46%
                        </h2>
                        <p className="small mb-0">
                          Security incident due to policy mismanagement and lack of sight 
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Proof;
