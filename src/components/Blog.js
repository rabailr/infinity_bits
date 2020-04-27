import React from 'react';
import { Container, Row, Col, Card, Button, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const Blog = (props) => {
  return (
    <Container className="container" style={{paddingLeft:'70px',paddingRight:'60px'}}>
      <Row>
        <Col xs="12">
            <CardBody>
              <CardTitle className="heading">Our Blog</CardTitle>
              <hr className="h-line"/>
              <CardText className="rg-text">Our Countless Frame Types Are Loved By Global Frame Lovers, Due To The Variety, Quality Yet Simplicity.</CardText>
            </CardBody>
        </Col>
      </Row>
      <Row>
        <Col xs="3" style={{textAlign:'left', paddingLeft:'0px'}}>
           <img width="100%" src="./images/blog1.png" alt="Card image cap" />
        </Col>
        <Col xs="3" style={{textAlign:'left', paddingLeft:'0px'}}>
            <CardBody>
                  <CardText style={styles.rgText}>Category Blog</CardText>
                  <CardTitle style={styles.heading}>A Very Anthropologie Holiday with Jodie Harrison</CardTitle>
                  <CardText style={styles.rgText}>By admin 30/3/2020<br/>
                  One of my favorite illustrators, Dan who goes by the creative name of Roach graphics,...
                  </CardText>
                  <CardText>
                    <Button outline color="secondary" style={styles.button}>Read More</Button>
                  </CardText>
              </CardBody>
        </Col>
        <Col xs="3" style={{textAlign:'left', paddingLeft:'0px'}}>
           <img width="100%" src="./images/blog2.png" alt="Card image cap" />
        </Col>
        <Col xs="3" style={{textAlign:'left', paddingLeft:'0px'}}>
            <CardBody>
                  <CardText style={styles.rgText}>Category Blog</CardText>
                  <CardTitle style={styles.heading}>A Very Anthropologie Holiday with Jodie Harrison</CardTitle>
                  <CardText style={styles.rgText}>By admin 30/3/2020<br/>
                  One of my favorite illustrators, Dan who goes by the creative name of Roach graphics,...
                  </CardText>
                  <CardText>
                    <Button outline color="secondary" style={styles.button}>Read More</Button>
                  </CardText>
              </CardBody>
        </Col>
      </Row>
      </Container>
  );
}

export default Blog;

const styles={
    heading:{
        fontSize:'12px',
        fontWeight:'bold',
        textAlign:'left',
        fontFamily: 'Lato',
        color:'#112D46'
    },
    button:{
        width:'100px',
        borderRadius: '20px',
        fontSize:'10px',
        border:'2px solid',
        textTransform: 'uppercase',
    },
    rgText:{
        fontWeight: 'Light',
        letterSpacing: '0.13px',
        color: '#605E5E',
        opacity: 1,
        fontSize:'11px',
        textAlign:'left',
        fontFamily: 'Lato',
    }
    }