import { createStyles, Text, Container, ActionIcon, Group, CopyButton } from '@mantine/core';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
    footer: {
        // marginTop: 120,
        marginTop: 60,
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    },

    logo: {
        maxWidth: 200,

        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
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

    wrapper: {
        width: 160,
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
    }
}));

const Footer = () => {
    const { classes } = useStyles();

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Link to='/'>
                        <img src={logo} className='footer-logotype' alt="" />
                    </Link>
                    <Text size="xs" color="dimmed" className={classes.description}>
                        FlexiClean är en ﬁlterhållare för rening av process- och dag-vatten.
                    </Text>
                </div>
                <div className={classes.groups}>
                    <div className={classes.wrapper}>
                        <Link className={classes.link} to='/'>
                            <Text className={classes.title}>Products</Text>
                        </Link>

                        <Link className={classes.link} to='/'>Våra filter</Link>

                        <Link className={classes.link} to='/instruktioner'>Installations instruktioner</Link>

                        {/* <Link className={classes.link} to='/products'>Leverans kartan</Link> */}
                    </div>

                    <div className={classes.wrapper}>
                        <Link className={classes.link} to='/dokumentation'>
                            <Text className={classes.title}>Dokumentation</Text>
                        </Link>

                        <Link className={classes.link} to='/kontakta oss'>
                            <Text className={classes.title}>Kontakta Oss</Text>
                        </Link>
                    </div>
                </div>

            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    Copyright © 2015
                </Text>

                <Group spacing={0} className={classes.social} position="right" noWrap>
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
        </footer>
    )

}
export default Footer;