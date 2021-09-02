import React, { Component } from "react";
import Header from "../small/Header";
import MainSlide from "../small/MainSlide";
import line from "../../assets/Line 6445.png";
import Files from "../small/Files";
import WhatweDo from "../small/WhatweDo";
import Portfolio from "../small/Portfolio";
import Aboutus from "../small/Aboutus";
import Contactus from "../small/Contactus";
import Footer from "../small/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Proof from "../small/Proof";
import HeaderMb from "../small/HeaderMb";

class Home extends Component {
  render() {
    if (this.props.AuthLoading === false && this.props.isAuthenticated) {
      if (this.props.user.role == "user") {
        return <Redirect to="/user" />;
      }
      if (this.props.user.role == "admin") {
        // return <Redirect to="/dashboard" />;
      }
    }
    return (
      <div id="style-1">
        <HeaderMb />
        <Header />
        <ScrollAnimation
          delay={500}
          animateIn="animate__slideInUp"
          animateOnce={true}
        >
          <main className="banner intro-y my-2 mx-auto">
            <MainSlide />
          </main>
        </ScrollAnimation>
        <div className="mx-auto">
          <content>
            <Aboutus />
          </content>
          <main>
            <content>
              <WhatweDo />
            </content>
            <content>
              <Portfolio />
            </content>
          </main>
        </div>
        <div className="container-fluid footer-con-bg">
          <content>
            <Contactus />
          </content>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  AuthLoading: state.auth.loading,
  auth: state.auth,
});
export default connect(mapStateToProps, {})(Home);
