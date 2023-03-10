import React, { useState } from 'react'
import {
    Text,
    TextInput,
    Button,
    Group,
    createStyles,
    Title,
    Flex,
    ScrollArea,
} from '@mantine/core';

const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan('sm');

    return {

        form: {
            height: '100%',
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
        fields: {
            height: '60vh',
            // display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'space-between',
            // gap: '2rem'
        },
        btnSection: {
            position: 'sticky',
            backgroundColor: 'white',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '1rem 1rem 0rem',
        }
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

    const [next, setNext] = useState(false);

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            {!next && (
                <>
                   <Title>Beställ filterpåsar</Title>

                    <ScrollArea type="always" className={classes.fields}>
                        <Text>Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år. Med vårt nya bokningssystem beställs filterpåsar smidigt genom att knappa in kundnumret / QR-koden som finns på kvittot / produkten, sedan skickas filterpåsarna till önskad leveransplats. </Text>

                        <TextInput
                            label="Bokningsnummer"
                            placeholder="12345678A"
                            required
                            value={bookingNumber}
                            onChange={e => setBookingNumber(e.target.value)}
                        />
                        <TextInput
                            mt='lg'
                            label="Lösenord"
                            placeholder="Lösenord123"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <Flex w='100%' justify='space-between' gap='lg' my='lg'>
                            <TextInput
                                w='100%'
                                label="Ansvariges namn"
                                placeholder="John Doe"
                                value={bookerName}
                                onChange={e => setBookerName(e.target.value)}
                            />

                            <TextInput
                                maw='30%'
                                label="Antal filterpåsar"
                                placeholder='1'
                                required
                                value={amount}
                                onChange={e => setAmount(e.target.value)}
                            />
                        </Flex>
                    </ScrollArea>

                    <Group className={classes.btnSection} position="right" mt="xl">
                        <Button onClick={() => setNext(true)}>Nästa steg</Button>
                    </Group>
                </>
            )}
            {next && (
                <>
                    <ScrollArea type="always" className={classes.fields}>
                        <Text>Här kan ni ändra leveransaddress.</Text>

                        <TextInput
                            label="adress"
                            placeholder="Stora gatan 13A"
                            required
                            value={bookingNumber}
                            onChange={e => setBookingNumber(e.target.value)}
                        />

                        <Flex w='100%' justify='space-between' gap='lg' my='lg'>
                            <TextInput
                                w='100%'
                                label="Ort"
                                placeholder="Malmö"
                                required
                                value={bookerName}
                                onChange={e => setBookerName(e.target.value)}
                            />

                            <TextInput
                                maw='30%'
                                label="Postnummer"
                                placeholder='111 22'
                                required
                                value={amount}
                                onChange={e => setAmount(e.target.value)}
                            />
                        </Flex>
                    </ScrollArea>

                    <Flex position="center" justify='space-between' mt="xl" className={classes.btnSection}>
                        <Button onClick={() => setNext(false)} variant="default">Tillbaka</Button>
                        <Button type='submit'>Lägg beställning</Button>
                    </Flex>

                </>
            )}
        </form>
    )
}

export default OrderView