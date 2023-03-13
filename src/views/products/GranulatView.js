import { Container } from '@mantine/core'
import React from 'react'
import Navbar from '../../components/Navbar'
import GranulatComponent from '../../components/products/GranulatComponent'

const GranulatView = () => {

  return (
    <>
      <Navbar />

      <Container>
        <GranulatComponent />
      </Container>
    </>
  )
}

export default GranulatView