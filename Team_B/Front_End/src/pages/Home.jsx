import React, { Fragment } from "react";
import { FooterContainer } from "./home-style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeroSection from "../Hero-Section/HeroSection";
import Dashboard from "../User/Dashboard";
import ChooseUs from "../components/About-us/Choose-us/ChooseUs"
import Testimonials from "../components/Testimonial/Testimonials";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <br/>
      <br/>
      <ChooseUs/>
      <br/>
      <br/>
      <Testimonials/>
      <br/>
      <br/>
      <FooterContainer>
      <br/>
      <br/>
        <Footer />
      </FooterContainer>
    </Fragment>
  );
};

export default Home;
