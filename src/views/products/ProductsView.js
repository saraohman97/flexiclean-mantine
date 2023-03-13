import { Container, createStyles } from '@mantine/core'
import React from 'react'
import Navbar from '../../components/Navbar'
import DagvattenComponent from '../../components/products/DagvattenComponent'
import GranulatComponent from '../../components/products/GranulatComponent'
import OtherProductsComponent from '../../components/products/OtherProductsComponent'

const useStyles = createStyles((theme) => ({
  homeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    [theme.fn.largerThan('sm')]: {
      gap: '5rem',
    }
  }
}))

const ProductsView = () => {
  const { classes } = useStyles()

  return (
    <>
      <Navbar />

      <Container className={classes.homeWrapper}>
        <DagvattenComponent />
        <GranulatComponent />
        <OtherProductsComponent />
      </Container>
    </>
  )
}

export default ProductsView