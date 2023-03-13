import { createStyles, Text, Container, ActionIcon, Group, CopyButton, Button, Tooltip } from '@mantine/core';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { IconCheck } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    footer: {
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
        color: 'gray',
        display: 'block',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    afterFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
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
                    <Text component={Link} to='/'>
                        <img src={logo} className='footer-logotype' alt="" />
                    </Text>
                    <Text size="xs" color="dimmed" className={classes.description}>
                        FlexiClean är en ﬁlterhållare för rening av process- och dag-vatten.
                    </Text>
                </div>
                <div className={classes.groups}>
                    <div className={classes.wrapper}>
                        <Text className={classes.title} component={Link} to='/produkter'>Produkter</Text>

                        <Text className={classes.link} component={Link} to='/produkter/dagvatten'>Dagvattenrening</Text>

                        <Text className={classes.link} component={Link} to='/produkter/granulat'>Granulat</Text>

                        <Text className={classes.link} component={Link} to='/produkter/annat'>Stora och små projekt</Text>

                        <Link className={classes.link} to='/instruktioner'>Monterings instruktioner</Link>
                    </div>

                    <div className={classes.wrapper}>
                        <Text component={Link} to='/dokumentation' className={classes.title}>Dokumentation</Text>

                        <Text component={Link} to='/kontakta-oss' className={classes.title}>Kontakta Oss</Text>
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

                    <CopyButton value="info@flexiclean.eu" timeout={2000}>
                        {({ copied, copy }) => (
                            <Tooltip label={copied ? 'Kopierat' : 'Kopiera'} withArrow position="right">
                                <ActionIcon color={copied ? 'teal' : 'blue'} onClick={copy}>
                                    {copied ? <IconCheck size="1rem" /> : <i className="fa-regular fa-envelope"></i>}
                                </ActionIcon>
                            </Tooltip>
                        )}
                    </CopyButton>
                </Group>
            </Container>
        </footer>
    )
}
export default Footer;