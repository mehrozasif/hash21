import React from "react";
import enhance_icon from "../../assets/HomePage/enhance.svg";
import recommend_icon from "../../assets/HomePage/recommend.svg";
import automate_icon from "../../assets/HomePage/automate.svg";
import trust_icon from "../../assets/HomePage/trust.svg";
import safe_icon from "../../assets/HomePage/safe.svg";
import discover_icon from "../../assets/HomePage/discover.svg";
import digial_icon from "../../assets/HomePage/digitaluser.svg";
import ScrollAnimation from "react-animate-on-scroll";

function Files(props) {
  return (
    <div className="row my-3">
      <div className="col-xl-10 mx-auto my-3">
        <ScrollAnimation
          delay={500}
          animateIn="animate__slideInLeft"
          animateOnce={true}
        >
          <div className="row bg-aqua p-lg-4 py-lg-5 p-2 br-15 text-center m-auto">
            <div className="col-xl-9 col-10 mx-auto">
              <h1 className="text-dark text-md-resp my-2">
                LEARN HOW WE LEVERAGE BLOCKCHIAN, IN OUR PROOF-OF-GOVERNANCE
                SOLUTION
              </h1>
              <button className="shade small my-3 px-4 border-0 bg-white zoom-in py-2 br-20 text-md-resp">
                Read More
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="col-xl-10 mx-auto my-lg-5 my-2">
        <ScrollAnimation
          delay={500}
          animateIn="animate__slideInRight"
          animateOnce={true}
        >
          <div className="row bg-white text-center">
            <div className="col-xl-8 offset-xl-2 offset-1 col-10 mb-xl-4 mb-2 ">
              <h1 className="text-dark ">
                DESIGNED FOR THE ENTERPRISE ADN BUILT FOR THE USERS
              </h1>
            </div>
            <div className="col-xl-3 text-center col-10 mx-auto mt-xl-5 pt-xl-5">
              <div className="bg-white zoom-in p-xl-4 p-2 br-15 hover-shades">
                <img
                  src={enhance_icon}
                  alt="enhance_icon"
                  width="100px"
                  className=""
                />
                <h3 className="my-xl-4 my-2 text-dark">Enhance</h3>
                <p className="mb-xl-3 text-dark small">
                  Designed to help you enhance policies when existing policies
                  become ine ective.
                </p>
              </div>
              <div className="my-3 bg-white zoom-in p-xl-4 p-2 br-15 hover-shades">
                <img
                  src={recommend_icon}
                  alt="enhance_icon"
                  width="100px"
                  className=""
                />
                <h3 className="my-xl-4 my-2 text-dark">Recommend</h3>
                <p className="mb-xl-3 text-dark small">
                  Designed to recommend new policies to your compliance team
                  using ethical AI.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-10 mx-auto">
              <div className="bg-white zoom-in p-xl-4 p-2 br-15 hover-shades">
                <img
                  src={automate_icon}
                  alt="enhance_icon"
                  width="100px"
                  className=""
                />
                <h3 className="my-xl-4 my-2 text-dark">Automate</h3>
                <p className="mb-xl-3 text-dark small">
                  Designed to help you automate policy enforcement to control
                  the unseen, bad actors dynamically.
                </p>
              </div>
              <div className="my-3 bg-white zoom-in p-xl-4 p-2 br-15 hover-shades">
                <img
                  src={trust_icon}
                  alt="enhance_icon"
                  width="100px"
                  className=""
                />
                <h3 className="my-xl-4 my-2 text-dark">Trust</h3>
                <p className="mb-xl-3 text-dark small">
                  Designed to help you build more trust and achieve better
                  business outcomes.
                </p>
              </div>
              <div className="bg-white zoom-in p-xl-4 p-2 br-15 hover-shades">
                <img
                  src={trust_icon}
                  alt="safe_icon"
                  width="100px"
                  className=""
                />
                <h3 className="my-xl-4 my-2 text-dark">Safe Experience</h3>
                <p className="mb-xl-3 text-dark small">
                  Built for safer Digital Experiences.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-10 mx-auto mt-xl-5 pt-xl-5">
              <div className="bg-white zoom-in p-xl-4 p-2 br-15 hover-shades">
                <img
                  src={discover_icon}
                  alt="safe_icon"
                  width="100px"
                  className=""
                />
                <h3 className="my-xl-4 my-2 text-dark">Discover</h3>
                <p className="mb-xl-3 text-dark small">
                  Launch party pitch technology user experience innovator buzz
                  stealth MVP model.
                </p>
              </div>
              <div className="bg-white zoom-in my-3 p-xl-4 p-2 br-15 hover-shades">
                <img
                  src={digial_icon}
                  alt="safe_icon"
                  width="100px"
                  className=""
                />
                <h3 className="my-xl-4 my-2 text-dark">Digital User</h3>
                <p className="mb-xl-3 text-dark small">
                  Built for Digital Users everywhere.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Files;
