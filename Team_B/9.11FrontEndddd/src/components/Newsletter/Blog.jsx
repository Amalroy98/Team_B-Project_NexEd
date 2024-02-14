import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import Header from "../Header/Header";
import { AboutContainer, AboutSubContainer } from "./blog-style";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import seo from  '../../assests/images/seo.png';
import webimage from  '../../assests/images/webimage.jpg';
import know from  '../../assests/images/know.avif';
import Footer from "../../Footer/Footer";



const Blog = () => {
  return (
    <AboutContainer>
      <Header />
      <AboutSubContainer>
        <Row>
          <Col lg="12" className="text-center">
            <Row>
            <h2 className="mb-4">Blog</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={seo}/>
  <Card.Body>
    <Card.Title>15 days satisfaction seminar education</Card.Title>
    <Card.Text>
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </Card.Text>
   
  </Card.Body>
 
</Card>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={webimage}/>
  <Card.Body>
    <Card.Title>Expand your confidence knowledge</Card.Title>
    <Card.Text>
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
    </Card.Text>
   
  </Card.Body>  
</Card>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={know}/>
  <Card.Body>
    <Card.Title>How i use my planner as a student</Card.Title>
    <Card.Text>
    Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cillum fugiat eu fugiat nulla pariatur standard
    </Card.Text>
   
  </Card.Body>

</Card>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={seo}/>
  <Card.Body>
    <Card.Title>Increase your knowledge with book</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>


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

export default Blog;
   



