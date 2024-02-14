import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assests/images/thu.webp";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      where parenting seemed like a battle; and prior to the advent of digital supremacy, the battle-hardened parents of olden eras often failed miserably in raising their kids’ intellect and wisdom or intelligence.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Abin P M</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      Student mental health and bullying surveys
                      </h6>
                      <p>
                      It is highly essential to assess student mental health and address issues at the beginning before they bloom into bigger ones.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Shine jerry</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      School climate surveys
                      </h6>
                      <p>
                      These surveys address issues like student-teacher relationships, faculty involvement, student mental health, student tobacco, alcohol, and drug use, and student relationships.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">mary john</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
