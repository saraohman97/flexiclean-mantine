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
    Paper,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';

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
            paddingInline: '1rem',
            [theme.fn.smallerThan('sm')]: {
                paddingInline: '0rem'
            },
            [theme.fn.largerThan('sm')]: {
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                height: '98vh',
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

            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            overflow: 'hidden',
        },
        nextBtn: {
            [theme.fn.smallerThan('sm')]: {
                width: '7.5rem'
            },
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
    const { classes } = useStyles();


    const form = useForm({
        initialValues: { bookingNumber: '', password: '', bookerName: '', amount: '', address: '', county: '', zip: '' },

        // functions will be used to validate values at corresponding key
        validate: {

            bookingNumber: (value) => (value.length < 2 ? 'Inkorrekt bokningsnummer' : null),
            password: (value) => (value.length < 2 ? 'Inkorrekt lösenord' : null),
            
            bookerName: (value) => (value.length < 2 ? 'Måste ha minst 2 karaktärer' : null),
            amount: (value) => (value.length < 1 ? 'Välj antal' : null),
            address: (value) => (value.length <= 0 ? 'Kan inte vara tom' : null),
            county: (value) => (value.length <= 0 ? 'Kan inte vara tom' : null),
            zip: (value) => (value.length <= 0 ? 'Kan inte vara tom' : null),
        },
    });

    const handleSubmit = (data) => {
        form.reset();

        axios
            .post("http://localhost:9000/orderForm", { data })
            .then(response => {
                console.log(response)
            })
    };

    const [next, setNext] = useState(false);

    return (
        <form className={classes.form} onSubmit={form.onSubmit((data) => handleSubmit(data))}>
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
                            {...form.getInputProps('bookingNumber')}
                        />
                        <TextInput
                            mt='lg'
                            label="Lösenord"
                            placeholder="Lösenord123"
                            {...form.getInputProps('password')}
                        />

                        <Flex className={classes.flex} gap='lg' mt='lg'>
                            <TextInput
                                w='100%'
                                label="Ansvariges namn"
                                placeholder="John Doe"
                                {...form.getInputProps('bookerName')}
                            />

                            <TextInput
                                className={classes.width}
                                label="Antal filterpåsar"
                                placeholder='1'
                                {...form.getInputProps('amount')}
                            />
                        </Flex>

                        <TextInput
                            mt='lg'
                            label="Adress"
                            placeholder="Stora gatan 13A"
                            {...form.getInputProps('address')}
                        />

                        <Flex className={classes.flex} gap='lg' mt='lg'>
                            <TextInput
                                w='100%'
                                label="Ort"
                                placeholder="Malmö"
                                {...form.getInputProps('county')}
                            />

                            <TextInput
                                className={classes.width}
                                // maw='30%'
                                label="Postnummer"
                                placeholder='111 22'
                                {...form.getInputProps('zip')}
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
                        <Button type='submit' className={classes.nextBtn}>Kontakta oss för mer information</Button>
                    </Flex>

                </>
            )}
        </form >
    )
}

export default OrderView