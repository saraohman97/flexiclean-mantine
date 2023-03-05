import { BackgroundImage, Button, Group, Image, Title, Text, Flex, createStyles, Container, useMantineTheme, Paper } from '@mantine/core';
import React from 'react'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import Navbar from '../components/Navbar'
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
    header: {
        // backgroundColor: 'lightblue',
        height: '80vh',
        padding: '20px',
        alignItems: 'flex-start',
        justifyContent: 'center',
        // justifyContent: 'space-evenly',
        flexDirection: 'column',

        [theme.fn.largerThan('sm')]: {
            maxWidth: '650px',
            paddingLeft: '5rem',
        },
    },
    mobile: {
        flexDirection: 'column-reverse',
        [theme.fn.largerThan('md')]: {
            flexDirection: 'row',
        },
    },

    card: {
        height: 70,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
}))

function CarouselCard({ image }) {
    const { classes } = useStyles();

    return (
        <Paper
            p="xl"
            sx={{ backgroundImage: `url(${image})` }}
            className={classes.card}
        >
        </Paper>
    );
}

const data = [
    {
        image: 'https://dst15js82dk7j.cloudfront.net/252829/71094620-PeXgW.jpg',
        title: 'Delägare i AB Aros Rör & Svets',
        description: 'Svets, smide och installationer',
        link: 'http://www.arosrorsvets.se/',
    },
    {
        image: 'https://dst15js82dk7j.cloudfront.net/252829/71094842-cyKZY.jpg',
        title: 'Rent Dagvatten AB',
        description: 'Analys-projektering-entrepenad-service-efteranalys Utbildningar',
        link: 'http://www.rent-dagvatten.se/',
    },
    {
        image: 'https://dst15js82dk7j.cloudfront.net/252829/72745545-7sJQ6.png',
        title: 'Remedy By Sweden AB',
        description: 'Konsulter för avancerad forskning, problemlösning och metodutveckling.',
        link: 'http://remedybysweden.se/',
    },
    {
        image: 'https://dst15js82dk7j.cloudfront.net/252829/71094915-vnRie.jpg',
        title: 'Minrent - Jernkontoret',
        description: 'Vattenfiltrering med mineralbaserade restprodukter som reningsteknik för hållbara samhällslösningar.',
        link: 'https://www.kth.se/profile/agak/page/project-minrent',
    },
    {
        image: 'https://dst15js82dk7j.cloudfront.net/252829/71095016-S1gDt.png',
        title: 'Stockholm Cleantech',
        description: '',
        link: 'www.smtc.se',
    },
    {
        image: 'https://dst15js82dk7j.cloudfront.net/252829/71095154-aTjD6.png',
        title: 'Baltic Flows',
        description: 'Ett samarbete runt Österjön.',
        link: 'https://www.balticflows.eu/',
    },
]

const HomeView = () => {
    const { classes } = useStyles()

    const autoplay = useRef(Autoplay({ delay: 4000 }));
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <CarouselCard {...item} />
        </Carousel.Slide>
    ));

    return (
        <>
            <BackgroundImage
                // src="https://images.pexels.com/photos/154246/pexels-photo-154246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                w='auto'
            >
                <Navbar />

                <Flex>
                    <Flex className={classes.header} gap='lg'>
                        <Title fw='bold' size="h1">Det finns inga önskebrunnar. Men väl en lyckosam lösning.</Title>
                        <Text>FlexiClean är en ﬁlterhållare för rening av process- och dag-vatten.</Text>
                        <Button color="blue" variant="light">Kontakta oss</Button>
                    </Flex>
                    <Image
                    style={{ alignSelf: 'end' }}
                    src='https://dst15js82dk7j.cloudfront.net/252829/70973528-Bb4i8.jpg'
                    />
                </Flex>

            </BackgroundImage>

            <Container bg='white' py='10px'>
                <Group>
                    <Title>Västmanlands miljö- och klimatpris 2019</Title>
                    <Flex gap='lg' className={classes.mobile}>
                        <Text>
                            <Title size='h4' color='blue'>Juryns motivering:</Title>
                            Västmanlands miljö- och klimatpris 2019 går till FlexiClean AB för sitt arbete med att förbättra vattenmiljöer genom att ta tag i en av vår tids stora miljöproblem, kemikalier som sprids i dagvattnet. FlexiClean har utvecklat filter som fångar upp tungmetaller, oljeföroreningar och även PFAS. PFAS är cancerframkallande ämnen som bland annat finns i våra textilier och ibland beskrivs som vår tids värsta miljögift.
                        </Text>
                        <Text>FlexiClean har även tagit sig fram och hittat en lösning kring mikroplaster som sprids från konstgräsplaner.
                            Genom att på det här sättet förbättra våra vattenmiljöer har Flexiclean på ett förtjänstfullt sätt bidragit till att Västmanland har tagit ett viktigt steg vidare till Miljö- och klimatrådets vision, ett län som är miljö- och klimatförebild 2030. Och klimatförebild 2030.
                        </Text>
                    </Flex>

                    <Flex className={classes.mobile}>
                        <Text>
                            <Title size='h4' color='blue' pt='lg' w='100%'>Våra nomineringar genom åren:</Title>
                            2006: Finalist. Sustainble Stockholm Award. <br />
                            2007: Vinnare. Västerås Stads Miljöpris. <br />
                            2015: Finalist. Deep Green Challenge, SKANSKA. <br />
                            2016: Finalist. Västerås Stads Miljöpris <br />
                            2019. Finalist innovationstävling SKAPA. <br />
                            2019. Vinnare. Västmanlands Klimat- och Miljöpris.
                        </Text>
                        <Image
                            maw='600px'
                            src='https://h24-original.s3.amazonaws.com/252829/28712055-9XX6s.jpg'
                        // caption="My dog begging for treats"
                        />
                    </Flex>
                </Group>
            </Container>

            <Title py='lg' ta='center'>Samarbeten</Title>
            <Carousel
                withControls={false}
                loop
                slideSize="25%"
                breakpoints={[{ maxWidth: 'xs', slideSize: '100%', slideGap: 2 }]}
                slideGap="xl"
                align="start"
                slidesToScroll={mobile ? 1 : 2}
                plugins={[autoplay.current]}
                p='md'
            >
                {slides}
            </Carousel>
        </>
    )
}

export default HomeView