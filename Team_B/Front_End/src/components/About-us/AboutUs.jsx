import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";
import Header from "../Header/Header";
import { AboutContainer, AboutSubContainer } from "./about-style";
import school from '../../assests/images/school.jpg';import gr from '../../assests/images/gr.webp';
 import Footer from "../Footer/Footer"; 



const AboutUs = () => {
  return (
    <AboutContainer>
      <Header />
      <AboutSubContainer>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img w-40">
            <img src={gr} alt="" width={"380px"} height={"550px"} />
              {/* <img src={school} alt="" width={"500px"} height={"300px"} /> */}
            </div>
            {/* <h1>Welcome to our campus</h1>
            <p>afdhsfg zdvbdftj ghfgj</p> */}
            
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p>
              

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
            
            <img src={aboutImg} alt="" width={"600px"} height={"300px"} />
          </Col>
        </Row>
        <Footer />
      </AboutSubContainer>
    </AboutContainer>

  );
};

export default AboutUs;
