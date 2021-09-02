import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import banner_img from "../../assets/hash/Group 5.png";
export default function MainSlide({ slider }) {
  const [changepara, setChangepara] = useState(true);
  const more = () => {
    setChangepara(!changepara);
  };
  return (
    <>
      <div className="row mx-auto my-2">
        <div
          id="carouselExampleIndicators"
          className="carousel carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active border-0">
              <div className="d-flex w-90 mt-md-5">
                <div className="row mx-auto col-md-8 mt-3 pl-md-0">
                  <div className="col-md-6 mx-auto text-left pt-md-5">
                    <p className="car-1-con-line">
                      Convert ideas into practical Applications.
                    </p>
                    <h3 className="car-1-con-h font-weight-bold">
                      We found & Support
                    </h3>
                    <h3 className="car-1-con-h font-weight-bold">
                      blockchain projects
                    </h3>
                    <p className="car-1-con-para col" id="car-para1">
                      {changepara
                        ? "Quisque tincidunt molestie erat quis viverra. Proin Quisque tincidunt molestie erat quis viverra. Proin accumsan risus quis nunc tempor, nec blandit orci gravida. Vivamus convallis nec tortor ut sollicitudin. In in ultrices erat. Mauris sollicitudin urna sed lacinia tempor....."
                        : " Quisque tincidunt molestie erat quis viverra. Proin accumsan risus quis nunc tempor, nec blandit orci gravida. Vivamus convallis nec tortor ut sollicitudin. In in ultrices erat. Mauris sollicitudin urna sed laciniatempor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias tenetur error dolorem inventore eos, laborum iusto atque beatae corporis quasi natus commodi libero voluptatem. Perspiciatis temporibus sapiente dignissimos ipsam! Quos!"}
                    </p>
                  </div>
                  <div className="col-md-6 m-auto">
                    <img
                      src={banner_img}
                      alt="Group 5 Image"
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="row mx-auto align-items-center mb-4 align-left btns-rdm-ply">
                <div className="col-10 col-md-8 mx-auto d-flex align-items-center text-left">
                  <button
                    className="btn-rdm-grd py-2 px-4 zoom-in"
                    onClick={more}
                    id="parachange"
                  >
                    {changepara ? "Read More" : "Read Less"}
                  </button>
                  <div className="pl-3">
                    <button className="btn-bg-l d-flex p-0 zoom-in">
                      <i className="fas fa-play p-4 text-white"></i>
                    </button>
                  </div>
                  <p className="my-0 pl-2 ply-btn-content">Watch Video</p>
                </div>
              </div>
            </div>
            <div className="carousel-item active border-0">
              <div className="d-flex w-90 mt-md-5">
                <div className="row mx-auto col-md-8 mt-3 pl-md-0">
                  <div className="col-md-6 mx-auto text-left pt-md-5">
                    <p className="car-1-con-line">
                      Convert ideas into practical Applications.
                    </p>
                    <h3 className="car-1-con-h font-weight-bold">
                      We found & Support
                    </h3>
                    <h3 className="car-1-con-h font-weight-bold">
                      blockchain projects
                    </h3>
                    <p className="car-1-con-para col" id="car-para1">
                      {changepara
                        ? "Quisque tincidunt molestie erat quis viverra. Proin Quisque tincidunt molestie erat quis viverra. Proin accumsan risus quis nunc tempor, nec blandit orci gravida. Vivamus convallis nec tortor ut sollicitudin. In in ultrices erat. Mauris sollicitudin urna sed lacinia tempor....."
                        : " Quisque tincidunt molestie erat quis viverra. Proin accumsan risus quis nunc tempor, nec blandit orci gravida. Vivamus convallis nec tortor ut sollicitudin. In in ultrices erat. Mauris sollicitudin urna sed laciniatempor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias tenetur error dolorem inventore eos, laborum iusto atque beatae corporis quasi natus commodi libero voluptatem. Perspiciatis temporibus sapiente dignissimos ipsam! Quos!"}
                    </p>
                  </div>
                  <div className="col-md-6 m-auto">
                    <img
                      src={banner_img}
                      alt="Group 5 Image"
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="row mx-auto align-items-center mb-4 align-left btns-rdm-ply">
                <div className="col-10 col-md-8 mx-auto d-flex align-items-center text-left">
                  <button
                    className="btn-rdm-grd py-1 px-4"
                    onClick={more}
                    id="parachange"
                  >
                    {changepara ? "Read More" : "Read Less"}
                  </button>
                  <div className="pl-3">
                    <button className="btn-bg-l d-flex p-0">
                      <i className="fas fa-play p-4 text-white"></i>
                    </button>
                  </div>
                  <p className="my-0 pl-2 ply-btn-content">Watch Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map-container d-lg-none d-md-none d-xl-block d-sm-none d-none"></div>
      <div class="side-container d-lg-none d-md-none d-xl-block d-sm-none d-none"></div>
      <div class="side-container-mid-part d-lg-none d-xl-block d-md-none d-none"></div>
    </>
  );
}
