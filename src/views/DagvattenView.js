import { Button, Container, Flex, Text, Title } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'
import CardsCarousel from '../components/carousels/CardsCarousel'
import Navbar from '../components/Navbar'
import DagvattenTable from '../components/tables/DagvattenTable'

const DagvattenView = () => {

  return (
    <>
      <Navbar />

      <Container>
        <Flex my='lg' gap='lg' direction='column'>

          <CardsCarousel />

          <div>
            <Title my='lg'>FlexiCleans filterkassett för dagvattenrening</Title>
            <Text>FlexiCleans filterkassett för dagvattenrening renar tungmetaller, näringsämnen, oljorna PAH och Pfas. Kassetten rymmer 160 l/min filtrerat vatten och är försedd med en bypassfunktion vid höga vattenmängder. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år. </Text>

            <Title mt='lg' size='h3'>Montage</Title>
            <Text>Att tänka på vid montaget är att filterkassetten kräver minst 8000/1000 mm djup i brunnen och med slät innersida på brunnen. Självaste "hålet" i beteckning måste vara 300 mm i diameter. Dessutom kan teleskopbeteckning försvåra montaget.</Text>
            <Link to='/dokumentation'><Button my='lg'>Kolla montage video</Button></Link>
          </div>

          <div>
            <Title size='h3'>Filter storlekar</Title>
            <DagvattenTable />
          </div>

        </Flex>
      </Container>
    </>
  )
}

export default DagvattenView