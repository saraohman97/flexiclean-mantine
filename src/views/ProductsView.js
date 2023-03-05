import React from 'react'
import Navbar from '../components/Navbar'
import DagvattenComponent from '../components/products/DagvattenComponent'
import GranulatComponent from '../components/products/GranulatComponent'
import OtherProductsComponent from '../components/products/OtherProductsComponent'

const ProductsView = () => {
  return (
    <>
    <Navbar />
    
    <DagvattenComponent />
    <GranulatComponent />
    <OtherProductsComponent />
    </>
  )
}

export default ProductsView