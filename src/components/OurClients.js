import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const OurClients = (props) => {
  return (
    <Container className="container" style={{paddingLeft:'70px',paddingRight:'60px'}}>
      <Row>
        <Col xs="12">
            <CardBody>
              <CardTitle className="heading">We Love Our Client</CardTitle>
              <hr className="h-line"/>
              <CardText className="rg-text">Design a custom frame for photos, art, and more.</CardText>
            </CardBody>
        </Col>
      </Row>
      <Row>
        <Col xs="4" style={{textAlign:'left', paddingLeft:'0px'}}>
           <img width="100%" src="/images/client.png" alt="Card image cap" />
        </Col>
        <Col xs="8" style={{textAlign:'left', paddingLeft:'0px', paddingRight:'0px'}}>
            <CardBody>
                  <CardTitle style={styles.heading}>Jeremy Crouse</CardTitle>
                  <CardText style={styles.rgText}>(Graphic Designer)<br/>
                  <img width="6%" src="/images/Group 614.svg" style={{paddingRight:'10px'}}/>
                  I was looking a way to save my University degree from getting damaged while showing to others and I found index. framing options. I have got my degree framed in stylish design which is also adding beauty to my room.
                  <img width="6%" src="/images/Group 615.svg" style={{paddingLeft:'10px'}}/>
                  </CardText>
              </CardBody>
        </Col>
      </Row>
      </Container>
  );
}

export default OurClients;

const styles={
    heading:{
        fontSize:'14px',
        fontWeight:'bold',
        textAlign:'left',
        fontFamily: 'Lato',
        color:'#112D46'
    },
    rgText:{
        fontWeight: 'Light',
        letterSpacing: '0.13px',
        color: '#605E5E',
        opacity: 1,
        fontSize:'14px',
        textAlign:'left',
        fontFamily: 'Lato',
    }
}
