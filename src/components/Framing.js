import React from 'react';
import { Container, Row, Col, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Framing = (props) => {
    const comp = [
    {name: 'Original Art', img: 'Original Art.png'},
    {name: 'Object', img: 'Object.png'},
    {name: 'Textile', img: 'Textile.png'},
    {name: 'Jersey', img: 'Jersey.png'},
    {name: 'photography', img: 'photography.png'},
    {name: 'Something esle', img: 'Something.png'}
    ]
  return (
    <Container style={{paddingLeft:"50px", paddingRight:"50px"}}>
      <Row>
        <Col xs="12">
            <CardBody>
              <CardTitle className="heading">What Are You Framing?</CardTitle>
              <hr className="h-line"/>
              <CardText className="rg-text">Design a custom frame for photos, art, and more.</CardText>
            </CardBody>
        </Col>
      </Row>
      <Row>
      {comp.map((data)=>
      <Col xs="2">
        <Col xs='12' className="bg-light">
        <Col style={{padding:'10px'}}>
            <Card>
                <img width="100%" src={"/images/"+data.img} alt="Card image cap" />
            </Card>
            </Col>
        </Col>
        <CardTitle style={styles.title}>{data.name}</CardTitle>
        </Col>
      )}
      </Row>
      </Container>
  );
}

export default Framing;

const styles={
title:{
textAlign: 'center',
fontSize:  '14px',
fontWeight:'bold',
fontFamily:'Lato',
letterSpacing: '2.71px',
color: '#112D46',
textTransform: 'capitalize',
opacity: 1
}}