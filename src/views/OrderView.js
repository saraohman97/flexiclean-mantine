import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {
    Container,
    Text,
    TextInput,
    Button,
    Group,
    SimpleGrid,
    createStyles,
    Title,
    NumberInput,
} from '@mantine/core';


const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan('sm');

    return {

        form: {
            boxSizing: 'border-box',
            flex: 1,
            padding: theme.spacing.xl,
            paddingLeft: `calc(${theme.spacing.xl} * 2)`,
            borderLeft: 0,

            [BREAKPOINT]: {
                padding: theme.spacing.md,
                paddingLeft: theme.spacing.md,
            },
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
    };
});


const OrderView = () => {
    const [bookingNumber, setBookingNumber] = useState('')
    const [password, setPassword] = useState('')
    const [amount, setAmount] = useState('')
    const [bookerName, setBookerName] = useState('')
    const { classes } = useStyles();

    const handleSubmit = e => {
        e.preventDefault()

        const addBooking = { bookingNumber, password, amount, bookerName }

        fetch('http://localhost:9000/orderForm', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addBooking)
        }).then(() => {
            console.log(addBooking)
        })
    }

    return (
        <>
            <Navbar />

            <Container>
                <Title>Beställ</Title>
                <Text>Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år. Med vårt nya bokningssystem beställs filterpåsar smidigt genom att knappa in kundnumret / QR-koden som finns på kvittot / produkten, sedan skickas filterpåsarna till önskad leveransplats. </Text>

                <form className={classes.form} onSubmit={handleSubmit}>
                    {/* <Text fz="lg" fw={700} className={classes.title}>
                        Get in touch
                    </Text> */}

                    <div className={classes.fields}>
                        <SimpleGrid mt='md' cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                            <TextInput
                                label="Bokningsnummer"
                                placeholder="12345678A"
                                required
                                value={bookingNumber}
                                onChange={e => setBookingNumber(e.target.value)}
                            />
                            <TextInput
                                label="Lösenord"
                                placeholder="Lösenord123"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </SimpleGrid>

                        <SimpleGrid mt='md' cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                            <TextInput
                                label="Ansvariges namn"
                                placeholder="John Doe"
                                value={bookerName}
                                onChange={e => setBookerName(e.target.value)}
                            />
                            <TextInput
                                label="Antal filterpåsar"
                                placeholder='1'
                                required
                                value={amount}
                                onChange={e => setAmount(e.target.value)}
                            />
                        </SimpleGrid>

                        <Group position="right" mt="md">
                            <Button type="submit">
                                Beställ
                            </Button>
                        </Group>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default OrderView