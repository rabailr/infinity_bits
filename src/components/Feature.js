import React from 'react';
import { Container, Row, Col, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Feature = (props) => {
    const row1 = [
    {name:'Dover', img:'Dover.png'},
    {name:'Marquette', img:'Marquette.png'},
    {name:'Wren', img:'Wren.png'}
    ]
const row2 = [
    {name:'Mercer', img:'Mercer.png'},
    {name:'Everett', img:'Everett.png'},
    {name:'Mandalay', img:'Mandalay.png'}
    ]
  return (
    <Container style={{padding:"50px"}}>
      <Row>
        <Col xs="12">
            <CardBody>
              <CardTitle className="heading">Feature Product</CardTitle>
              <hr className="h-line"/>
              <CardText className="rg-text">Design a custom frame for photos, art, and more.</CardText>
            </CardBody>
        </Col>
      </Row>
      <Row>
        <Col xs="4">
            <Card>
                <img height="500px" src="/images/Featuring.png" alt="Card image cap" />
            </Card>
        </Col>
        <Col xs="8">
        <Row>
        {row1.map((data)=>
      <Col xs="4">
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
        <Row>
        {row2.map((data)=>
      <Col xs="4">
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
        </Col>
      </Row>
      </Container>
  );
}

export default Feature;

const styles={
title:{
textAlign: 'left',
fontSize:  '14px',
fontWeight:'bold',
fontFamily:'Lato',
letterSpacing: '2.71px',
color: '#112D46',
textTransform: 'capitalize',
opacity: 1
}}