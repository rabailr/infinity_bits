import React from 'react';
import { Container, Row, Col, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Header = (props) => {
const comp=[
{name:'Free Shipping', img:'free-shipping-icon.svg'},
{name:'Free Design Advice', img:'designer-advice-icon.svg'},
{name:'Everyday Low Price', img:'price-icon.svg'},
{name:'Free Returns', img:'free-return-icon.svg'},
]
  return (
    <Container className="container" style={{padding:'50px'}}>
      <Row>
        <Col xs="7" style={{textAlign:'left', paddingLeft:'0px'}}>
            <CardBody>
              <CardTitle style={styles.mHeading}>Why choose us</CardTitle>
              <CardText style={styles.mText}>Our countless frame types are loved by global frame lovers, Due to the variety, quality yet simplicity.</CardText>
            </CardBody>
            <Row>
                {comp.map((data)=>
                    <Col xs="6" style={{paddingLeft:'0px'}}>
                        <CardBody style={{display:'inline-flex'}}>
                        <Col xs="3">
                            <img width="50px" src={"./images/"+data.img}/>
                        </Col>
                        <Col xs="9">
                          <CardTitle style={styles.heading}>{data.name}</CardTitle>
                          <CardText style={styles.rgText}>you are here to buy art, not cardboard boxes.</CardText>
                        </Col>
                        </CardBody>
                    </Col>
                )}
            </Row>
            <CardText style={{textAlign:'left', paddingLeft:'30px'}}>
                <Button outline color="secondary" style={styles.button}>secondary</Button>
              </CardText>
        </Col>
        <Col xs="5" style={{textAlign:'left'}}>
           <img width="80%" src="./images/fborder.svg" alt="Card image cap" style={styles.tImg} />
           <img width="80%" src="./images/framss.png" alt="Card image cap" style={styles.bImg}/>
        </Col>
      </Row>
      </Container>
  );
}

export default Header;

const styles={
    heading:{
        fontSize:'14px',
        fontWeight:'bold',
        textAlign:'left',
        fontFamily: 'Lato',
    },
    rgText:{
        fontWeight: 'Light',
        letterSpacing: '0.22px',
        color: '#605E5E',
        opacity: 1,
        fontSize:'12px',
        textAlign:'left',
        fontFamily: 'Lato',
    },
    mHeading:{
        textAlign: 'left',
        fontWeight: 'Bold',
        fontSize: '36px',
        fontFamily:'Lato',
        letterSpacing: '4.14px',
        color: '#112D46',
        textTransform: 'capitalize',
        opacity: 1,
    },
    mText:{
        textAlign: 'left',
        fontWeight: 'Light',
        fontSize: '20px',
        fontFamily: 'Lato',
        letterSpacing: '0.14px',
        color: '#707070',
        opacity: '0.83'
    },
    button:{
        width:'220px',
        borderRadius: '20px',
        border:'2px solid',
        textTransform: 'uppercase',
    },
    tImg:{
        position:'relative ',
        top: 0,
        left: 0
    },
    bImg:{
        position:'absolute ',
        top: '50px',
        left: '70px'
    }

}