import { Container, Text, Title } from '@mantine/core'
import React from 'react'
import GranulatTable from '../components/GranulatTable'
import Navbar from '../components/Navbar'

const GranulatView = () => {
  return (
    <>
      <Navbar />

      <Container>
        <Title>FlexiCleans Granulatkassetter</Title>
        <Title size='h3'>För dagvattenrening och Granulatfiltrering (fotbollskassetten)</Title>
        <Text>FlexiCleans granulatfilter för rening av dagvatten samt filtrering av granulat renar tungmetaller, näringsämnen, oljor, PAH och Pfas, samt filtrerar partiklar ned till 42 mikrometer. Kassetten rymmer 45 l/min filtrerat vatten. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.</Text>

        <Title mt='lg' size='h3'>Montage</Title>
        <Text>Att tänka på vid montaget är att filterkassetten kräver minst 8000/1000 mm djup i brunnen och med slät innersida på brunnen. Självaste "hålet" i beteckning måste vara 330 mm i diameter. Dessutom kan teleskopbeteckning försvåra montaget. </Text>

        <Title mt='lg' size='h3'>Filter storlekar</Title>
        <GranulatTable />
      </Container>
    </>
  )
}

export default GranulatView