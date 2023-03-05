import { Container, createStyles, Flex, Image, Spoiler, Text, Title } from '@mantine/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const useStyles = createStyles((theme) => ({
  input: {
    flexDirection: 'column',
    [theme.fn.largerThan('sm')]: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      gap: '2rem'
    },
  },
  image: {
    maxWidth: '100px',
    [theme.fn.largerThan('sm')]: {
      minWidth: '200px',
    },
  }
}))

const Documentation = () => {
  const { classes } = useStyles()
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:9000/documentation")
      .then((res) => {
        setData(res.data);
      })
  }, [])

  if (!data) return null;

  return (
    <>
      <Navbar />

      <Container>
        <Title>Dokumentation</Title>
        <Text>Här publicerar vi fortlöpande tester utförda på FlexiClean. Redan för 14 år sedan blev vi tipsade om att använda bark som filtermaterial. De senare åren av forskning visar att vi valt rätt. Ladda gärna ned rapporterna nedan.</Text>

        {data && data.map(doc => (
          <Flex mt='lg' className={classes.input} key={doc.image}>
            <Image
              className={classes.image}
              maw='100px'
              src={doc.image}
              alt='cloudfront'
            />
            <div>
              <Title size="h4" color='blue' fw={700}>{doc.title}</Title>
              <Spoiler maxHeight={200} showLabel="Visa mer" hideLabel="Göm">
                <Text>{doc.description}</Text>
              </Spoiler>
              <Text>Ladda ner hela uppsatsen <a href={doc.link}> här.</a></Text>
            </div>
          </Flex>
        ))}
      </Container>
    </>
  )
}

export default Documentation