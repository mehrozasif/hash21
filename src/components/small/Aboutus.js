import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import rectangle from "../../assets/hash/Rounded Rectangle 768.svg";
import rectangle2 from "../../assets/hash/Shape 7 copy 2.svg";
import green_line from "../../assets/hash/Rounded Rectangle 768 copy.svg";
import arrow_down from "../../assets/hash/Shape 7 copy 4.svg";
import about from "../../assets/hash//about.png";

function Aboutus({ slider }) {
  const [changepara, setChangepara] = useState(false);
  const [count, setCount] = useState(0);

  const more = () => {
    setChangepara(!changepara);
  };

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <ScrollAnimation
      delay={500}
      animateIn="animate__slideInLeft"
      animateOnce={true}
    >
      <div class="row mx-auto my-5">
        <div class="about-bg">
          <div className="row mx-auto">
            <div className="col-xl-8 mx-auto">
              <div className="row mx-auto">
                <div class="card-mrkt col-5 col-xl mx-auto mr-xl-2 p-3 my-3 zoom-in">
                  <div class="d-flex my-1 justify-content-between align-items-between text-left">
                    <p class="mb-0">$1,154,600</p>
                    <div>
                      <img
                        src={arrow_down}
                        class="carrot-icon-card"
                        alt="Arrow down"
                      />
                      <div class="mrkt-ratio">-2.30</div>
                    </div>
                  </div>
                  <div class="d-flex my-1 justify-content-between align-items-between">
                    <p class="mrkt-txt mb-0">Market Cap.</p>
                    <img src={rectangle} alt="Rounded Shape" />
                  </div>
                </div>
                <div class="card-mrkt col-5 col-xl mx-auto mr-xl-2 p-3 my-3 zoom-in">
                  <div class="d-flex my-1 justify-content-between align-items-between text-left">
                    <p class="mb-0">2,79,108</p>
                    <div>
                      <img
                        src={rectangle2}
                        class="carrot-icon-card"
                        alt="Arrow down"
                      />
                      <div class="user-no">+1.30</div>
                    </div>
                  </div>
                  <div class="d-flex my-1 justify-content-between align-items-between">
                    <p class="mrkt-txt mb-0">Total Users</p>
                    <img src={green_line} alt="Rounded Shape" />
                  </div>
                </div>
                <div class="card-mrkt col-5 col-xl mx-auto mr-xl-2 p-3 my-3 zoom-in">
                  <div class="d-flex my-1 justify-content-between align-items-between text-left">
                    <p class="mb-0">$7,421,210</p>
                    <div>
                      <img
                        src={rectangle2}
                        class="carrot-icon-card"
                        alt="Arrow down"
                      />
                      <div class="user-no">+2.30</div>
                    </div>
                  </div>
                  <div class="d-flex my-1 justify-content-between align-items-between">
                    <p class="mrkt-txt mb-0">Trade Volume</p>
                    <img src={green_line} alt="Rounded Shape" />
                  </div>
                </div>
                <div class="card-mrkt col-5 col-xl mx-auto mr-xl-2 p-3 my-3 zoom-in">
                  <div class="d-flex my-1 justify-content-between align-items-between text-left">
                    <p class="mb-0">0.0044559</p>
                    <div>
                      <img
                        src={arrow_down}
                        class="carrot-icon-card"
                        alt="Arrow down"
                      />
                      <div class="mrkt-ratio">-0.63</div>
                    </div>
                  </div>
                  <div class="d-flex my-1 justify-content-between align-items-between">
                    <p class="mrkt-txt mb-0">Exchange Rate</p>
                    <img src={rectangle} alt="Rounded Shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cards-about row mx-auto" id="About Us">
            <div className="col-12 col-md-10 col-xl-8 mx-auto">
              <div class="about-data row mx-auto mx-auto my-md-5 my-2 py-lg-3">
                <div class="about-img col-md col-12 d-md-block d-none">
                  <img src={about} alt="About Image" class="col-12 pl-0" />
                </div>
                <div
                  class="about-mtrl col-md col-12 about-us1 m-auto"
                  id="about-us"
                >
                  <h4>
                    <b>About</b> <b class="about-hash">HASH21</b>
                  </h4>
                  <p class="my-3 mrkt-txt car-1-con-para">
                    {changepara
                      ? "Hash21 is a perfect Blockchain-centric private company that provides its customers with embryonic crypto assets, smart money, and digital currency project…"
                      : " Hash21 is a perfect Blockchain-centric private company that provides its customers with embryonic crypto assets, smart money, and digital currency project of Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ea tempora voluptaseos. Aliquid blanditiis hic quas, dicta unde libero maiores perspiciatis itaque ipsam doloribus debitis rerum, recusandae nobis sed!"}
                  </p>
                  <button
                    class="btn-rdm-grd p-2 col-5 mt-1 zoom-in"
                    id="abt-us-btn1"
                    onClick={more}
                  >
                    {changepara ? "Read More" : "Read Less"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Aboutus;
