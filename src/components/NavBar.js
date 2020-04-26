import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <Navbar color="light" light expand="md">
        <NavbarBrand style={styles.heading} href="/">FRAMEBOSS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" style={styles.menu} navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                SERVICES
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                FRAMES
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/components/">BLOG</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">CONTACT US</NavLink>
            </NavItem>
              <img style={styles.icon} src="/images/user-account-icon.svg"/>
              <img style={styles.icon} src="/images/cart-icon.svg"/>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;

const styles={
heading:{
//paddingLeft: '50px',
textAlign: 'left',
fontSize:  '40px',
fontFamily: 'Lato',
fontVariant:'Bold',
letterSpacing: '2px',
color: '#112D46',
textTransform: 'uppercase',
opacity: 1,
},
menu:{
//paddingLeft: '160px',
textAlign: 'right',
fontFamily: 'Lato',
fontVariant:'Bold',
letterSpacing: '2px',
color: '#707070',
textTransform: 'uppercase',
opacity: 1,
},
icon:{
width:'60px',
paddingLeft:'30px',
}
}