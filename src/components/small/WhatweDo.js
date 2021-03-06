import React from "react";
import consulting from "../../assets/hash/Group 6552.svg";
import venture from "../../assets/hash/noun_venture_3884138.svg";
import tech from "../../assets/hash/noun_Disruptive_2903434.svg";
import ScrollAnimation from "react-animate-on-scroll";
function WhatweDo(props) {
  const vid = "https://www.youtube.com/watch?v=OqsM0hw6B-c";
  return (
    <ScrollAnimation
      delay={500}
      animateIn="animate__slideInLeft"
      animateOnce={true}
    >
      <div class="services-bg pb-2">
        <div class="row mx-auto" id="Services">
          <div class="col-12">
            <p class="services-prt">OUR SERVICES</p>
            <h3 class="ser-h">What we do</h3>
            <p class="ser-para col-md-6 col-12 mx-auto">
              Nullam vestibulum, justo vitae varius interdum, nibh turpis
              eleifend tellus, sit amet porttitor orci erat vitae odio. Duis
              sapien metus, egestas rhoncus metus id.
            </p>
          </div>
          <div class="row px-3 mx-auto">
            <div class="col-10 col-xl-9 d-xl-flex mx-auto">
              <div class="card-consulting py-3 text-center col col-xl mx-auto px-2">
                <div class="img-conslt mx-auto p-2 rounded-circle d-flex">
                  <img
                    src={consulting}
                    alt="Group Cunslting"
                    class="grp-rounded-circle cnslt-img w-75 m-auto"
                  />
                </div>
                <div class="mt-3">
                  <h4>Incubation Consulting</h4>
                  <p class="conslt-para px-md-3">
                    With years of experience, the Hash21 management team ensures
                    proper consultation. We provide our customers with
                    incubation consulting services in order to support the
                    startup teams that are still in the early stage in the
                    Blockchain industry.
                  </p>
                </div>
              </div>
              <div class="card-venture py-4 mx-auto text-center col col-xl px-3">
                <div class="img-conslt mx-auto p-2 rounded-circle d-flex">
                  <img
                    src={venture}
                    alt="Venture Capital"
                    class="grp-rounded-circle cnslt-img w-75 m-auto"
                  />
                </div>
                <div class="mt-3">
                  <h4 class="h-vent">Venture Capital</h4>
                  <p class="vent-para px-md-3">
                    Our well-established and experienced management and
                    professional investment team enable Hash21 to focus on the
                    discovery of the best venture capital projects in the
                    Blockchain industry.
                  </p>
                </div>
              </div>
              <div class="card-technology text-center py-4 mx-auto col col-xl px-2">
                <div class="img-conslt mx-auto p-2 rounded-circle d-flex">
                  <img
                    src={tech}
                    alt="Technology Development"
                    class="grp-rounded-circle cnslt-img w-75 m-auto"
                  />
                </div>
                <div class="mt-3">
                  <h4>Technology Development</h4>
                  <p class="tech-para px-md-3">
                    Hash21 is all about Blockchain technology and its
                    development. We have our bases in the field of Blockchain
                    technology services and supplying the best customized
                    Blockchain development services to our partners and
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default WhatweDo;
