import { Container, createStyles, Flex, Image, Paper, Spoiler, Text, Title } from '@mantine/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await axios.get('http://localhost:9000/documentation');
        setData(data);
        setLoading(false)
        setError(false)
      } catch (error) {
        setLoading(false)
        console.error(error.response.message);
        setError(true)
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Title>Dokumentation</Title>
      <Text>Här publicerar vi fortlöpande tester utförda på FlexiClean. Redan för 14 år sedan blev vi tipsade om att använda bark som filtermaterial. De senare åren av forskning visar att vi valt rätt. Ladda gärna ned rapporterna nedan.</Text>
      {loading && <Paper mt='2rem'>Laddar...</Paper>}
      {error && <Paper mt='2rem'>Kunde inte hämta datan. </Paper>}

      {data?.data.map(doc => (
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
  )
}

export default Documentation