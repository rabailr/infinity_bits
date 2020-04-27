import React from 'react';
import { Container, Row, Col, Table, Input ,InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

const Footer = (props) => {
  return (
    <Container className="container" style={styles.heading}>
    <Row >
        <Col xs="3" style={{textAlign:'left', paddingLeft:'0px'}}>
            <ul style={{listStyleType:"none", textAlign:'left'}}>
                <li>Get the App</li><br/>
                <li>Follow Us</li>
                <li>
                    <img style={{width:'20px'}} src="./images/twitter-black-shape.svg"/>
                    <img style={{width:'20px', paddingLeft:'10px'}} src="./images/facebook-letter-logo.svg"/>
                    <img style={{width:'30px', paddingLeft:'10px'}} src="./images/insta-icon.svg"/>
                </li><br/>
                <li>Get insprition</li>
             </ul>
             <InputGroup style={styles.button}>
                <Input placeholder="Enter you email" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>Submit</InputGroupText>
                </InputGroupAddon>
             </InputGroup>
        </Col>
        <Col xs="9" style={{textAlign:'left', paddingLeft:'0px', fontSize:'14px'}}>
          <Table >
                <tr>
                  <td style={{border:'none'}}>
                      <ul style={{listStyleType:"none", textAlign:'left'}}>
                        <li>How it Works</li>
                        <li>Press</li>
                        <li>For Art & Trade</li>
                        <li>The Shop</li>
                      </ul>
                  </td>
                  <td style={{border:'none'}}>
                      <ul style={{listStyleType:"none", textAlign:'left'}}>
                        <li>FAQ</li>
                        <li>For Business</li>
                        <li>Company</li>
                        <li>Careers</li>
                      </ul>
                  </td>
                  <td style={{border:'none'}}>
                      <ul style={{listStyleType:"none", textAlign:'left'}}>
                        <li>Stores</li>
                        <li>Pricing</li>
                        <li>Reviews</li>
                        <li>Design Services</li>
                      </ul>
                  </td>
                  <td style={{border:'none'}}>
                      <ul style={{listStyleType:"none", textAlign:'left'}}>
                        <li>About Us</li>
                        <li>gift Card</li>
                        <li>Contact Us</li>
                      </ul>
                  </td>
                  <td style={{border:'none'}}>
                      <ul style={{listStyleType:"none", textAlign:'left'}}>
                        <li>Terms Of Service</li>
                        <li>Privacy Policy</li>
                        <li>Accessibility</li>
                        <li>Sitemap</li>
                      </ul>
                  </td>
                </tr>
          </Table>
        </Col>
        <Col xs="12" style={styles.div}>© 2020 index.</Col>
          </Row>
      </Container>
  );
}

export default Footer;
const styles={
    heading:{
        background: 'rgba(249, 249, 249, 1) 0% 0% no-repeat padding-box',
        opacity: 1,
        paddingTop:"50px"
    },
    button:{
    paddingLeft:'60px',
    width:'400px',
    paddingBottom:'30px'
    },
    div:{
    background:'black', width:'100%', height:'50px', color:'white',
    paddingTop:'10px'
    }}