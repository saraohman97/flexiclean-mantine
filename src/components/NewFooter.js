import { ActionIcon, AspectRatio, Container, CopyButton, createStyles, Divider, Group, Text } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const useStyles = createStyles((theme) => ({
    footer: {
        textAlign: 'center',
        marginTop: 60,
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    },

    description: {
        marginTop: 5,

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
            textAlign: 'center',
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    groups: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '3rem',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
        fontSize: theme.fontSizes.sm,
        paddingTop: 3,
        paddingBottom: 3,
        textDecoration: 'none',

        '&:hover': {
            textDecoration: 'underline',
        },
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: theme.spacing.xs / 2,
        color: 'gray'
    },

    afterFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    social: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
        },
    },

    icon: {
        color: '#339AF0',
        textDecoration: 'none',
        size: "lg",
    },
}));

const NewFooter = () => {
    const { classes } = useStyles();

    return (
        <Group className={classes.footer}>
            <Container w='50vh'>
                <Link to='/'>
                    <img src={logo} className='footer-logotype' alt="" />
                </Link>

                <Text size="xs" color="dimmed" className={classes.description}>
                    FlexiClean är en ﬁlterhållare för rening av process- och dag-vatten.
                </Text>

                <Divider my="sm" />


                <Text color="dimmed" size="sm">
                    Copyright © 2015
                </Text>

                <Group spacing={0} className={classes.social} position="center" noWrap>
                    <ActionIcon color='blue'>
                        <a href="https://twitter.com/FlexiClean" className={classes.icon}>
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </ActionIcon>

                    <ActionIcon color='blue'>
                        <a href="https://www.linkedin.com/in/peder-eneroth-6543a366/" className={classes.icon}>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </ActionIcon>

                    <CopyButton value="info@flexiclean.eu">
                        {({ copied, copy }) => (
                            <ActionIcon size='lg' color={copied ? 'teal' : 'blue'} onClick={copy}>
                                <i className="fa-regular fa-envelope"></i>
                            </ActionIcon>
                        )}
                    </CopyButton>
                </Group>
            </Container>

            <Container w='50vh'>
                <AspectRatio ratio={16 / 9}>
                    <iframe
                        src="https://maps.google.com/maps?q=Brandthovdagatan%2016%20721%2035%20V%C3%A4ster%C3%A5s&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        title='This is a map to find FlexiClean'
                    />
                </AspectRatio>
            </Container>
        </Group>
    )
}

export default NewFooter