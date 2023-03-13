import { Container } from '@mantine/core'
import React from 'react'
import Navbar from '../../components/Navbar'
import DagvattenComponent from '../../components/products/DagvattenComponent'

const DagvattenView = () => {

  return (
    <>
      <Navbar />
      <Container>
        <DagvattenComponent />
      </Container>
    </>
  )
}

export default DagvattenView