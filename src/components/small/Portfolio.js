import React from "react";
import portfolio from "../../assets/hash/Group 196.svg";
import ScrollAnimation from "react-animate-on-scroll";
import ReactPlayer from "react-player";
const portfolioData = [
  {
    name: "ChainX",
    path: "{portfolio}",
  },
  {
    name: "ChainX",
    path: "{portfolio}",
  },
  {
    name: "ChainX",
    path: "{portfolio}",
  },
  {
    name: "ChainX",
    path: "{portfolio}",
  },
  {
    name: "ChainX",
    path: "{portfolio}",
  },
  {
    name: "ChainX",
    path: "{portfolio}",
  },
  {
    name: "ChainX",
    path: "{portfolio}",
  },
  {
    name: "ChainX",
    path: "{portfolio}",
  },
  {
    name: "ChainX",
    path: "{portfolio}",
  },
  {
    name: "ChainX",
    path: "{portfolio}",
  },
  {
    name: "ChainX",
    path: "{portfolio}",
  },
  {
    name: "ChainX",
    path: "{portfolio}",
  },
];
function Portfolio(props) {
  return (
    <ScrollAnimation
      delay={500}
      animateIn="animate__slideInLeft"
      animateOnce={true}
    >
      <div className="portfolio-bg w-auto">
        <div className="mx-auto row py-4" id="Portfolio">
          <div className="col-12 col-xl-8 mx-auto px-0">
            <div className="">
              <p className="col-10 col-xl-8 mx-auto porthash">HASH21</p>
              <h4 className="port-h col-10 col-xl-8 mx-auto">Portfolio</h4>
            </div>
            <div className="row mx-auto mt-4">
              {portfolioData.map((e) => (
                <div className="col-6 col-md-4 col-lg-3 my-2">
                  <div className="d-flex port-chain align-center justify-content-center">
                    <img src={portfolio} alt="Portfolio Chain" className="w-" />
                    <p className="my-2 px-2 h4 text-white mb-0 lh-1">
                      {e.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Portfolio;
