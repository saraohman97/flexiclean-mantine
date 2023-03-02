import { Container, createStyles, Flex, Group, Image, Text, Title } from '@mantine/core'
import React from 'react'
import OtherProductsCarousel from '../components/carousels/OtherProductsCarousel'
import Navbar from '../components/Navbar'
import FilterbrunnarTable from '../components/tables/FilterbrunnarTable'
import OtherOtherCarousel from '../components/carousels/OtherOtherCarousel'

const useStyles = createStyles((theme) => ({
  mobile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    gap: '3rem',
    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      gap: '1rem',
    },
  },
  blue: {
    color: theme.colors.blue
  },
}))

const OtherProductsView = () => {
  const { classes } = useStyles()

  return (
    <>
      <Navbar />

      <Container className={classes.mobile}>
        <Group>
          <Title>Filterväggar och filterbrunnar</Title>

          <div>
            <Title size='h3'>FlexiCleans <span className={classes.blue}>filterväggar</span> för dagvattenrening</Title>
            <Text>FlexiClean filterväggar för rening av dagvatten. Filtret renar tungmetaller, näringsämnen, oljor PAH och Pfas. Och är godkänd som oljeavskiljare på parkeringsplatser. Flödet beror på hur många kassetter man använder.Filtren är försedda med en bypassfunktion vid höga flöden. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.</Text>
          </div>

          <div>
            <Title size='h3'>FlexiCleans <span className={classes.blue}>filterbrunnar</span> för dagvattenrening</Title>
            <Text>FlexiClean filterbrunnar för rening av dagvatten. Dessa är för permanent placering men kan även användas mobilt. Filtret renar tungmetaller, näringsämnen, oljor PAH och Pfas. Filterbrunnen är fördelad på en sedimenteringsdel samt en filtreringsdel . Filterbrunnen flödar 320-640 l/min filtrerat vatten beroende på dimension Filtren är försedda med en bypassfunktion vid höga flöden. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.</Text>
          </div>
        </Group>

        <OtherProductsCarousel />
      </Container>

      <Container mt='lg'>
        <Title size='h3'>Filter storlekar</Title>
        <FilterbrunnarTable />
      </Container>

      <Container className={classes.mobile} mt='xl'>
        <Group>
          <Text><Title size='h3'>FlexiCleans Målartvätt</Title>En enkel icke mekanisk filtrering som kopplas till befintligt avlopp under diskbänken. Filtret renar tungmetaller, näringsämnen, oljor PAH och Pfas.</Text>
          <Text><Title size='h3'>FlexiClean Brunnslock</Title>Förhindra effektivt större fragment att hamna i dagvattenbrunnen.</Text>
          <Text><Title size='h3'>FlexiClean Filterkorg</Title>Förhindrar effektivt större fragment att hamna i dagvattnet. Korgen placeras i dagvattenbrunnen. </Text>
        </Group>

          <OtherOtherCarousel />
      </Container>
    </>
  )
}

export default OtherProductsView