import { Button, createStyles, Flex, Group, Image, Stack, Text, Title } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'
import GranulatTable from '../tables/GranulatTable'

const useStyles = createStyles((theme) => ({
    mobile: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 'lg',
        [theme.fn.smallerThan('md')]: {
            flexDirection: 'column-reverse',
            gap: '1rem',
        },
    },
}))

const GranulatComponent = () => {
    const { classes } = useStyles()

    return (
        <div className={classes.mobile}>
            <Flex direction='column' w='100%'>
                <Title>FlexiCleans Granulatkassetter</Title>
                <Title size='h3'>För dagvattenrening och Granulatfiltrering (fotbollskassetten)</Title>
                <Text>FlexiCleans granulatfilter för rening av dagvatten samt filtrering av granulat renar tungmetaller, näringsämnen, oljor, PAH och Pfas, samt filtrerar partiklar ned till 42 mikrometer. Kassetten rymmer 45 l/min filtrerat vatten. Filterpåsen som består av en blandning av furubark och träflis byts normalt en gång per år.</Text>

                <Title mt='lg' size='h3'>Montage</Title>
                <Text>Att tänka på vid montaget är att filterkassetten kräver minst 8000/1000 mm djup i brunnen och med slät innersida på brunnen. Självaste "hålet" i beteckning måste vara 330 mm i diameter. Dessutom kan teleskopbeteckning försvåra montaget. </Text>
                <Button w='162px' component={Link} to='/instruktioner' my='lg'>Kolla montage video</Button>
                <Title mt='lg' size='h3'>Filter storlekar</Title>
                <GranulatTable />
            </Flex>

            <Image
                width='250px'
                alt='flexiclean filter'
                src='https://dst15js82dk7j.cloudfront.net/252829/95835856-Dul42.jpg'
            />
        </div>
    )
}

export default GranulatComponent