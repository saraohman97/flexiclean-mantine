import { Container } from '@mantine/core'
import React from 'react'
import Navbar from '../../components/Navbar'
import OtherProductsComponent from '../../components/products/OtherProductsComponent'

const OtherProductsView = () => {

  return (
    <>
      <Navbar />
      
      <Container>
        <OtherProductsComponent />
      </Container>
    </>
  )
}

export default OtherProductsView