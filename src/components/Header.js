import React from 'react';
import { Container, Row, Col, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Header = (props) => {
  return (
    <Container style={{padding:"50px"}}>
      <Row>
        <Col xs="6">
           <img width="100%" src="./images/Group410.png" alt="Card image cap" />
        </Col>
        <Col xs="6">
            <CardBody style={{paddingTop:'120px'}}>
              <CardTitle style={styles.heading}>A NEW APPROACH TO CUSTOM FRAME</CardTitle>
              <CardText style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
              <CardText>
                <Button className="float-left" outline style={styles.button} color="secondary">Start Framing</Button>
              </CardText>
            </CardBody>
        </Col>
      </Row>
      </Container>
  );
}

export default Header;
const styles={
heading:{
textAlign: 'left',
fontSize: '36px',
fontWeight: 'bold',
fontFamily: 'Lato',
letterSpacing: '3.48px',
color: '#112D46',
textTransform: 'uppercase',
opacity: 1
},
text:{
textAlign: 'left',
paddingLeft:'40px',
paddingRight:'80px',
fontSize: '14px',
fontFamily:'Lato',
letterSpacing: '0.25px',
color: '#605E5E',
textTransform: 'lowercase',
opacity: 1,
borderLeft: '3px solid #112D46',
height: '70px',
},
button:{
width:'220px',
borderRadius: '20px',
border:'2px solid',
textTransform: 'uppercase',
}
}