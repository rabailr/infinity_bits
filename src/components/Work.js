import React from 'react';
import { Container, Row, Col, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Work = (props) => {
  return (
    <Container style={{paddingLeft:'50px',paddingRight:'50px'}}>
      <Row>
        <Col xs="12">
            <CardBody>
              <CardTitle className="heading">Our Impressive Works</CardTitle>
              <hr className="h-line"/>
              <CardText className="rg-text">Design A Custom Frame For Photos, Art, And More.</CardText>
            </CardBody>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
            <img width="100%" src="/images/Component1.png" alt="Card image cap" />
        </Col>
        <Col xs="6">
        <Row>
        <Col xs="6">
            <img width="100%" src="/images/impressive.png" alt="Card image cap" />
        </Col>
        <Col xs="6">
            <img width="100%" src="/images/Component3.png" alt="Card image cap" />
        </Col>
        </Row>
        <Row>
        <Col xs="12">
            <img style={{paddingTop:"25px"}}width="100%" src="/images/Component4.png" alt="Card image cap" />
        </Col>
        </Row>
        </Col>
      </Row>
      </Container>
  );
}

export default Work;