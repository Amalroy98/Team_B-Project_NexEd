import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

// import chooseImg from "../../assests/images/why-choose-us.png";
import chooseImg from "../../../assests/images/why-choose-us.png"
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
              The university comprises academic divisions focused on a range of disciplines, 
              such as applied science and engineering, management and public health.
               All told, the university offers some 700 undergraduate programs and more than 200 master and doctoral programs.
                The primary language of instruction is English. The academic calendar varies between the three campuses.
                 Student housing is available on each campus, and accommodations are guaranteed for all first-year undergraduate students.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
            
          </Col>
        </Row>
      </Container>
     
    </section>
  );
};

export default ChooseUs;