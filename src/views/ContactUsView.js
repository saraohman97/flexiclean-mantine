import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import {
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  Flex,
  ActionIcon,
  Container,
} from '@mantine/core';
import { useForm } from '@mantine/form';

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    wrapper: {
      maxWidth: '150vh',
      margin: '0 auto',
      display: 'flex',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,

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
      border: '1px solid lightgray',
      backgroundColor: theme.colors.white,
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
  // const [values, setValues] = useState({
  //   fullName: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // })

  // const [fullName, fullName] = useState('')
  // const [email, email] = useState('')
  // const [subject, subject] = useState('')
  // const [message, message] = useState('')

  // const form = useForm({
  //   initialValues: {
  //     fullName: '',
  //     email: '',
  //     subject: '',
  //     message: '',
  //     termsOfService: false,
  //   },

  //   validate: {
  //     email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
  //   },
  // });

  const [fullName, setFullName] = useState('')
  const [mail, setMail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')


  useEffect(() => {
    axios
      .get("http://localhost:9000/contactInfo")
      .then((res) => {
        setContactInfo(res.data);
      })
  }, [])

  if (!contactInfo) return null;


  const handleSubmit = e => {
    e.preventDefault()

    axios
      .post("http://localhost:9000/contactUsForm", { fullName, mail, subject, message })
      .then(response => {
        console.log(response)
      })

    // const addMessage = { fullName, email, subject, message }
    // fetch('http://localhost:9000/contactUsForm', {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(addMessage)
    // }).then(() => {
    //   console.log(addMessage)
    // })
  }

  // const onChange = e => {
  //   setValues({ ...values, [e.target.name]: e.target.value })
  // }

  return (
    <>
      <Navbar />

      <Container className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text size="lg" weight={700} className={classes.title}>
            Kontakt information
          </Text>

          {contactInfo && contactInfo.map((info) => (
            <Flex gap='20px' key={info.id} align='center'>
              <ActionIcon className={info.icon} color='black' />
              <div className={classes.fields}>
                <Text color='black' size="xs">{info.title}</Text>
                <Text color='black' size="lg">{info.description}</Text>
              </div>
            </Flex>
          ))}
        </div>

        {/* <form className={classes.form} onSubmit={(event) => event.preventDefault()}> */}
        <form className={classes.form} onSubmit={handleSubmit}>
          <Text size="lg" weight={700} className={classes.title}>
            Hör av dig
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
              <TextInput
                label="Ditt namn"
                placeholder="Ditt namn"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
              />
              <TextInput
                label="Din email"
                placeholder="hello@mantine.dev"
                required value={mail}
                onChange={e => setMail(e.target.value)}
              />
            </SimpleGrid>

            <TextInput
              mt="md"
              label="Ämne"
              placeholder="Ämne"
              required
              value={subject}
              onChange={e => setSubject(e.target.value)}
            />

            <Textarea
              mt="md"
              label="Ditt meddelande"
              placeholder="Var snäll inkludera relevant information"
              minRows={3}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />

            <Group position="right" mt="md">
              <Button type="submit" className={classes.control}>
                Skicka meddelande
              </Button>
            </Group>
          </div>
        </form>
      </Container>
    </>
  );
}

export default ContactUsView