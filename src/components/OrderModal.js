import React, { useState } from 'react'
import {
    Text,
    TextInput,
    Button,
    Group,
    createStyles,
    Title,
    Flex,
    CloseButton,
    Divider,
    Paper,
} from '@mantine/core';

const useStyles = createStyles((theme) => {

    return {

        form: {
            boxSizing: 'border-box',
            flex: 1,
            borderLeft: 0,
            padding: '1rem',
        },
        title: {
            marginTop: 'lg',
            paddingInline: '1rem',
            [theme.fn.smallerThan('sm')]: {
                paddingInline: '0rem'
            },
        },
        fields: {
            height: '80vh',
            paddingInline: '1rem',
            [theme.fn.smallerThan('sm')]: {
                paddingInline: '0rem'
            },
        },
        btnSection: {
            borderTop: '1px solid lightgray',
            backgroundColor: 'white',
            position: 'sticky',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '2rem 1rem',
        },
        flex: {
            width: '100%',
            justifyContent: 'space-between',
            marginBlock: 'lg',
            [theme.fn.smallerThan('sm')]: {
                flexDirection: 'column',
            },
        },
        width: {
            maxWidth: '30%',
            [theme.fn.smallerThan('sm')]: {
                maxWidth: '100%',
            },
        }
    };
});


const OrderView = ({ close }) => {
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
            <Group position='right'>
                <CloseButton onClick={close} title="Close popover" size="xl" iconSize={20} />
            </Group>

            {!next && (
                <>
                <Title className={classes.title}>Beställ filterpåsar</Title>
                    <div className={classes.fields}>
                        <Text mb='lg'>Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år. Med vårt nya bokningssystem beställs filterpåsar smidigt genom att knappa in kundnumret / QR-koden som finns på kvittot / produkten, sedan skickas filterpåsarna till önskad leveransplats. </Text>
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

                        <Flex className={classes.flex} gap='lg' mt='lg'>
                            <TextInput
                                w='100%'
                                label="Ansvariges namn"
                                placeholder="John Doe"
                                value={bookerName}
                                onChange={e => setBookerName(e.target.value)}
                            />

                            <TextInput
                                className={classes.width}
                                label="Antal filterpåsar"
                                placeholder='1'
                                required
                                value={amount}
                                onChange={e => setAmount(e.target.value)}
                            />
                        </Flex>

                        {/* <Divider my='3rem' color='blue' /> */}

                        {/* <Text mb='lg'>Här kan ni ändra leveransaddress.</Text> */}

                        <TextInput
                            mt='lg'
                            label="Adress"
                            placeholder="Stora gatan 13A"
                            required
                            value={bookingNumber}
                            onChange={e => setBookingNumber(e.target.value)}
                        />

                        <Flex className={classes.flex} gap='lg' mt='lg'>
                            <TextInput
                                w='100%'
                                label="Ort"
                                placeholder="Malmö"
                                required
                                value={bookerName}
                                onChange={e => setBookerName(e.target.value)}
                            />

                            <TextInput
                                className={classes.width}
                                // maw='30%'
                                label="Postnummer"
                                placeholder='111 22'
                                required
                                value={amount}
                                onChange={e => setAmount(e.target.value)}
                            />
                        </Flex>
                    </div>

                    <Flex position="center" justify='space-between' mt="xl" className={classes.btnSection}>
                        <Button type='submit'>Lägg beställning</Button>
                        <Button onClick={() => setNext(true)} variant="default">Är du inte kund?</Button>
                    </Flex>
                </>
            )}
            {next && (
                <>
                <Title className={classes.title}>Beställ filterkassetter</Title>

                    <Paper className={classes.fields} h='70vh'>
                        <Text>Pitch här</Text>
                    </Paper>

                    <Flex position="center" justify='space-between' mt="xl" className={classes.btnSection}>
                        <Button onClick={() => setNext(false)} variant="default">Tillbaka</Button>
                        <Button type='submit'>Kontakta oss för mer information</Button>
                    </Flex>

                </>
            )}
        </form >
    )
}

export default OrderView