import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  Flex,
  ActionIcon,
} from '@mantine/core';

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    wrapper: {
      maxWidth: '150vh',
      margin: '0 auto',
      display: 'flex',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: 4,
      border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
        }`,

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    form: {
      boxSizing: 'border-box',
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      color: 'white',
      marginBlock: '.5rem'
    },

    fieldInput: {
      flex: 1,

      '& + &': {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: 'flex',

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    contacts: {
      boxSizing: 'border-box',
      position: 'relative',
      borderRadius: theme.radius.lg - 2,
      // backgroundImage: `url(${'https://images.pexels.com/photos/154246/pexels-photo-154246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})`,
      backgroundColor: theme.colors.blue[9],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: theme.spacing.xl,
      flex: '0 0 280px',

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: theme.spacing.xl * 1.5,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});


const ContactUsView = () => {
  const [contactInfo, setContactInfo] = useState("");
  const { classes } = useStyles();

  useEffect(() => {
    axios.get("http://localhost:9000/contactInfo")
      .then((res) => {
        setContactInfo(res.data);
      })
  }, [])

  if (!contactInfo) return null;

  return (
    <>
      <Navbar />

      <Paper shadow="md" radius="lg">
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <Text size="lg" weight={700} className={classes.title} sx={{ color: '#fff' }}>
              Kontakt information
            </Text>

            {contactInfo && contactInfo.map((info) => (
              <Flex gap='20px' key={info.id} align='center'>
                <ActionIcon sx={{ color: '#fff' }} className={info.icon} />
                <div className={classes.fields}>
                  <Text size="xs">{info.title}</Text>
                  <Text size="lg">{info.description}</Text>
                </div>
              </Flex>
            ))}

          </div>

          <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
            <Text size="lg" weight={700} className={classes.title}>
              Hör av dig
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <TextInput label="Ditt namn" placeholder="Ditt namn" />
                <TextInput label="Din email" placeholder="hello@mantine.dev" required />
              </SimpleGrid>

              <TextInput mt="md" label="Ämne" placeholder="Ämne" required />

              <Textarea
                mt="md"
                label="Ditt meddelande"
                placeholder="Var snäll inkludera relevant information"
                minRows={3}
              />

              <Group position="right" mt="md">
                <Button type="submit" className={classes.control}>
                  Skicka meddelande
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </>
  );
}

export default ContactUsView