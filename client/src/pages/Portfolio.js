import React from 'react'
import Menu from '../components/Menu'
import HeroImage from '../components/HeroImage'
import CardCont from '../components/CardCont'
import Container from 'react-bootstrap/esm/Container'


function Portfolio() {


 
  return (

    <>
    <Menu></Menu>
    <HeroImage/>
    <Container className='cardCont d-flex flex-wrap justify-content-center mb-3'>
    <CardCont></CardCont>
    </Container>
    

    </>
  )

}

export default Portfolio