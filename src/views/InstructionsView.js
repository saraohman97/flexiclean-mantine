import { AspectRatio, Container, Text, Title } from '@mantine/core'
import React from 'react'
import Navbar from '../components/Navbar'

const Instructions = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div>
          <Title>
            Montage av FlexiClean dagvattenfilter
          </Title>

          <Text>
            Montage görs av två personer utan specialverktyg på drygt 2 minuter.
          </Text>

          <AspectRatio ratio={16 / 9} mt='lg'>
            <iframe
              src="https://www.youtube.com/embed/HU7RE3Jm3bE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        </div>

        <div>
          <Title mt='lg'>
          Byte av filterpåsar
          </Title>

          <Text>
          Filter bytes av en person utan specialverktyg på drygt 1,5 minut.
          </Text>

          <AspectRatio ratio={16 / 9} mt='lg'>
            <iframe
              src="https://www.youtube.com/embed/ZK2RtdIK_e0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        </div>

        <div>
          <Title mt='lg'>Skötsel</Title>
          <Text>Anvisningar för montering injustering och skötsel. Ladda ner pdf <a href="https://www.flexiclean.eu/Homepage/Download-File/f/977202/h/4ec555ee46f78678e4a7b7418b1dfd18/FlexiClean_driftochunderh%C3%A5ll"> här.</a></Text>
        </div>
      </Container>
    </>
  )
}

export default Instructions