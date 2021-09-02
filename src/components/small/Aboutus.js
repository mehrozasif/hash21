import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import rectangle from "../../assets/hash/Rounded Rectangle 768.svg";
import rectangle2 from "../../assets/hash/Shape 7 copy 2.svg";
import arrow_down from "../../assets/hash/Shape 7 copy 4.svg";
import about from "../../assets/hash//about.png";

function Aboutus({ slider }) {
  const [changepara, setChangepara] = useState(false);
  const more = () => {
    setChangepara(!changepara);
  };
  console.log(changepara);
  return (
    <ScrollAnimation
      delay={500}
      animateIn="animate__slideInLeft"
      animateOnce={true}
    >
      <div class="row mx-auto my-2">
        <div class="about-bg">
          <div
            class="cards-about row mx-auto col-12 col-md-10 col-xl-8"
            id="About Us"
          >
            <div class="card-mrkt col-5 col-xl mx-auto my-3 d-flex">
              <div class="row text-left py-2 mx-auto">
                <p class="">$1,154,600</p>
                <p class="mrkt-txt col">Market Cap.</p>
              </div>
              <div class="col py-1">
                <img src={arrow_down} alt="Arrow down" />
                <div class="mrkt-ratio">-2.30</div>
                <img src={rectangle} alt="Rounded Shape" />
              </div>
            </div>
            &nbsp;
            <div class="card-user col-5 col-xl mx-2 mx-auto my-3 d-flex">
              <div class="row py-2 text-left mx-auto">
                <p>2,79,108</p>
                <p class="user-txt">Total Users</p>
              </div>
              <div class="col py-1">
                <img src={rectangle2} alt="Arrow up" />
                <div class="user-no">+1.42</div>
                <img src={rectangle} alt="" />
              </div>
            </div>
            &nbsp;
            <div class="card-volume col-5 col-xl mx-2 mx-auto my-3 d-flex">
              <div class="row py-2 text-left mx-auto">
                <p>$7,421,210</p>
                <p class="volume-txt">Trade Volume</p>
              </div>
              <div class="col py-1">
                <img src={arrow_down} alt="Arrow up" />
                <div class="volume-no">+2.30</div>
                <img src={rectangle} alt="" />
              </div>
            </div>
            &nbsp;
            <div class="card-rate col-5 col-xl mx-auto mx-2 my-3 d-flex">
              <div class="row py-2 text-left mx-auto">
                <p>0.0044559</p>
                <p class="rate-txt">Exchange Rate</p>
              </div>
              <div class="col py-1">
                <img src={arrow_down} alt="Arrow down" />
                <div class="rate-ratio">-0.63</div>
                <img src={rectangle} alt="Rounded Shape" />
              </div>
            </div>
            <div className="col-12 col-md-10">
              <div class="about-data row mx-auto mx-auto mt-5">
                <div class="about-img col-md col-12 d-md-block d-none">
                  <img src={about} alt="About Image" class="col-12" />
                </div>
                <div
                  class="about-mtrl col-md col-12 about-us1 mb-3"
                  id="about-us"
                >
                  <h3>
                    <b>About</b> <b class="about-hash">HASH21</b>
                  </h3>
                  <p class="mt-3 about-us">
                    {changepara
                      ? "Hash21 is a perfect Blockchain-centric private company that provides its customers with embryonic crypto assets, smart money, and digital currency project…"
                      : " Hash21 is a perfect Blockchain-centric private company that provides its customers with embryonic crypto assets, smart money, and digital currency project of Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ea tempora voluptaseos. Aliquid blanditiis hic quas, dicta unde libero maiores perspiciatis itaque ipsam doloribus debitis rerum, recusandae nobis sed!"}
                  </p>
                  <button
                    class="btn-rdm-grd1 p-2 col-5 mt-1"
                    id="abt-us-btn1"
                    onClick={more}
                  >
                    {changepara ? "Read More" : "Read Less"}
                  </button>
                </div>
                <div class="about-mtrl col about-us2 mb-3" id="about-us-detail">
                  <h3>
                    <b>About</b> <b class="about-hash">HASH21</b>
                  </h3>
                  <p class="mt-2 about-us">
                    Hash21 is a perfect Blockchain-centric private company that
                    provides its customers with embryonic crypto assets, smart
                    money, and digital currency project of Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Saepe ea tempora voluptas
                    eos. Aliquid blanditiis hic quas, dicta unde libero maiores
                    perspiciatis itaque ipsam doloribus debitis rerum,
                    recusandae nobis sed!
                  </p>

                  <button
                    class="btn-rdm-grd2 p-2 col-5"
                    id="abt-us-btn2"
                    onclick="Changepara1()"
                  >
                    Less
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
