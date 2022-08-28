import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/esm/Container'
import Nav from 'react-bootstrap/Nav'
import icon from '../assets/linkedinicon.png'

export default function contactme() {
  return (
    <Container fluid className='contactCont'>
      <Container id='contactBlock'>
        <Nav>
          <Nav.Item>
            <Nav.Link href='https://www.linkedin.com/in/micah-waweru-764135188/' target='_blank'>
              <img id='liIcon' src={icon}/>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        </Container>
    </Container>
  )
}
