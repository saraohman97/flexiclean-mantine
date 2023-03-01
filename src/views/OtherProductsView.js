import { Button, Container, Group, Text, Title } from '@mantine/core'
import React from 'react'
import Navbar from '../components/Navbar'

const OtherProductsView = () => {
  return (
    <>
    <Navbar />

    <Container>
        <Title>Filterväggar och filterbrunnar</Title>
        <Group>
        <Title size='h3'>FlexiClean filterväggar för dagvattenrening</Title>
        <Text>FlexiClean filterväggar för rening av dagvatten. Filtret renar tungmetaller, näringsämnen, oljor PAH och Pfas. Och är godkänd som oljeavskiljare på parkeringsplatser. Flödet beror på hur många kassetter man använder.Filtren är försedda med en bypassfunktion vid höga flöden. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.</Text>
        <Button>Kontakta oss för närmare information.</Button>
        </Group>

        <Group>
            <Title size='h3'>FlexiClean filterbrunnar för dagvattenrening</Title>
            <Text>FlexiClean filterbrunnar för rening av dagvatten. Dessa är för permanent placering men kan även användas mobilt. Filtret renar tungmetaller, näringsämnen, oljor PAH och Pfas. Filterbrunnen är fördelad på en sedimenteringsdel samt en filtreringsdel . Filterbrunnen flödar 320-640 l/min filtrerat vatten beroende på dimension Filtren är försedda med en bypassfunktion vid höga flöden. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.</Text>
        </Group>
    </Container>
    </>
  )
}

export default OtherProductsView