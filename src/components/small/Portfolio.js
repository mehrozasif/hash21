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
        <div className="mx-auto row py-5 my-lg-5" id="Portfolio">
          <div className="col-12 col-xl-8 mx-auto px-0">
            <div className="pt-md-2">
              <p className="col-10 col-xl-8 mx-auto text-white mb-0">HASH21</p>
              <h3 className="mb-0 text-white col-10 col-xl-8 mx-auto">
                Portfolio
              </h3>
            </div>
            <div className="row mx-auto mt-4 px-md-3 px-xl-5 py-md-2">
              {portfolioData.map((e) => (
                <div className="col-6 col-md-4 col-lg-3 my-2">
                  <div className="d-flex port-chain align-center justify-content-center py-lg-2">
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
