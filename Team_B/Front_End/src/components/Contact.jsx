import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "reactstrap";
// import about-us from '../assests/images/about-us.png';
import CountUp from "react-countup";

import Header from "../Header/Header";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { AboutContainer, AboutSubContainer } from "./About-us/about-style";
import loc from  '../assests/images/loc.webp';
import emai from  '../assests/images/emai.webp';
import pho from '../assests/images/Pho.jpg';
import GOOGLE from '../assests/images/GOOGLE.jpg';
import Footer from "./Footer/Footer";

const Contact = () => {
  return (
    <AboutContainer className="bg-dark">
      <Header />
      <AboutSubContainer>
        <Row>
          <Col lg="12" className="text-center">
            <Row>
            <h2 className="mb-4">Blog</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={loc}/>
  <Card.Body>
    <Card.Title>Visit Our Office</Card.Title>
    <Card.Text>
    202 Mainstreet, 12th Floor
New York, NY 10013.
    </Card.Text>
   
  </Card.Body>
 
</Card>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pho}/>
  <Card.Body>
    <Card.Title>Let's Talk</Card.Title>
    <Card.Text>
    Phone: +91 67890903400
Ass: +91 9898900998
    </Card.Text>
   
  </Card.Body>  
</Card>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={emai}/>
  <Card.Body>
    <Card.Title>E-mail Us</Card.Title>
    <Card.Text>
        nexed@gmail.com
hrnexed@gmail.com
    </Card.Text>
   
  </Card.Body>

</Card>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={GOOGLE}/>
  <Card.Body>
    <Card.Title>Search</Card.Title>
    <Card.Text>nexed@Google
      
    </Card.Text>
   
  </Card.Body>

</Card>


{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
<Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src={seo}/> */}
  {/* <Card.Body>
    <Card.Title>Increase your knowledge with book</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card> */} 
</Row>
<Row>
</Row>

</Col>
</Row>
<Footer />
</AboutSubContainer>
</AboutContainer>
  );
};

export default Contact;




