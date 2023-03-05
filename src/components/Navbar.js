import {
    createStyles,
    Header,
    Container,
    Group,
    Button,
    Burger,
    Drawer,
    List,
    ActionIcon,
    Menu,
    Flex,
    Text,
} from '@mantine/core';
import '../App.css'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { VscChevronDown } from "react-icons/vsc";
import logo from '../assets/logo.png'

const useStyles = createStyles((theme) => ({
    header: {
        background: 'transparent',
        borderBottom: 0,
        marginBottom: 20,
        [theme.fn.largerThan('md')]: {
            marginBottom: 60
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 1250,
    },

    burger: {
        [theme.fn.largerThan('md')]: {
            display: 'none',
        },
    },

    links: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: 'gray',
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkLabel: {
        marginRight: 5,
    },

    button: {
        display: 'block',
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    }
}));

const Navbar = () => {
    const { classes } = useStyles();
    const [opened, setOpened] = useState(false);

    return (
        <Header className={classes.header}>
            <Container className={classes.inner} fluid>
                <Group>
                    {/* menu & logo */}
                    <Drawer
                        opened={opened}
                        onClose={() => setOpened(false)}
                        padding="xl"
                        size="xl"
                    >
                        <List
                            size="sm"
                            withPadding
                            spacing='md'
                        >
                            <List.Item
                                className={classes.link}
                                component={Link}
                                to="/"
                                icon={<ActionIcon color='blue' variant="light"><i className="fa-solid fa-house"></i></ActionIcon>}>
                                Home
                            </List.Item>

                            <List.Item
                                className={classes.link}
                                component={Link}
                                to="/produkter"
                                icon={<ActionIcon color='blue' variant="light"><i className="fa-solid fa-shop"></i></ActionIcon>}>
                                Produkter
                            </List.Item>

                            <List
                                size="sm"
                                withPadding
                            >
                                <List.Item
                                    className={classes.link}
                                    component={Link}
                                    to='/produkter/dagvatten'
                                    icon={<ActionIcon color='blue' variant="white"><i className="fa-solid fa-droplet"></i></ActionIcon>}>
                                    Dagvattenrening
                                </List.Item>

                                <List.Item
                                    className={classes.link}
                                    component={Link}
                                    to='/produkter/granulat'
                                    icon={<ActionIcon color='blue' variant="white"><i className="fa-solid fa-basketball"></i></ActionIcon>}>
                                    Granulat
                                </List.Item>

                                <List.Item
                                    className={classes.link}
                                    component={Link}
                                    to='/produkter/annat'
                                    icon={<ActionIcon color='blue' variant="white"><i className="fa-solid fa-globe"></i></ActionIcon>}>
                                    Stora och små projekt
                                </List.Item>

                                <List.Item
                                    className={classes.link}
                                    component={Link}
                                    to='/instruktioner'
                                    icon={<ActionIcon color='blue' variant="white"><i className="fa-solid fa-wrench"></i></ActionIcon>}>
                                    Monterings instruktioner
                                </List.Item>
                            </List>

                            <List.Item
                                className={classes.link}
                                component={Link}
                                to='/dokumentation'
                                icon={<ActionIcon color='blue' variant="light"><i className="fa-solid fa-folder-open"></i></ActionIcon>}>
                                Dokumentation
                            </List.Item>

                            <List.Item
                                className={classes.link}
                                component={Link}
                                to='/kontakta-oss'
                                icon={<ActionIcon color='blue' variant="light"><i className="fa-solid fa-phone"></i></ActionIcon>}>
                                Kontakta Oss
                            </List.Item>
                        </List>
                    </Drawer>

                    <Group position="center">
                        <Burger onClick={() => setOpened(true)} className={classes.burger} p='.5rem' mr='2rem' size="sm" />
                    </Group>

                    <Group to='/' component={Link}>
                        <img src={logo} className='logotype' alt="" />
                    </Group>
                </Group>


                {/* navlinks */}
                <Group spacing={50} className={classes.links}>
                    <Menu shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={400}>

                        <Text to='/' component={NavLink} className={classes.link}>Home</Text>

                        <Menu.Target
                            to='/produkter'
                            component={NavLink}
                            className={classes.link}
                        >
                            <Flex align='center' gap='10px'>
                                Produkter
                                <VscChevronDown />
                            </Flex>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item
                                color='gray'
                                to='/produkter/dagvatten'
                                component={Link}
                                icon={<ActionIcon mr='10px' size={14} color='blue'><i className="fa-solid fa-shop"></i></ActionIcon>}>
                                Dagvattenrening
                            </Menu.Item>

                            <Menu.Divider />

                            <Menu.Item
                                color='gray'
                                to='/produkter/granulat'
                                component={Link}
                                icon={<ActionIcon mr='10px' size={14} color='blue'><i className="fa-solid fa-location-dot"></i></ActionIcon>}>
                                Granulat
                            </Menu.Item>

                            <Menu.Divider />

                            <Menu.Item
                                color='gray'
                                to='/produkter/annat'
                                component={Link}
                                icon={<ActionIcon mr='10px' size={14} color='blue'><i className="fa-solid fa-location-dot"></i></ActionIcon>}>
                                Stora och små projekt
                            </Menu.Item>

                            <Menu.Divider />

                            <Menu.Item
                                color='gray'
                                to='/instruktioner'
                                component={Link}
                                icon={<ActionIcon mr='10px' size={14} color='blue'><i className="fa-solid fa-wrench"></i></ActionIcon>}>
                                Monterings instruktioner
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>

                    <Text className={classes.link} to='/dokumentation' component={NavLink}>Dokumentation</Text>
                    <Text className={classes.link} to='/kontakta-oss' component={NavLink}>Kontakta Oss</Text>
                </Group>

                {/* button */}
                <Button radius="xl" sx={{ height: 30 }} className={classes.button} component={Link} to='/order' >
                    Beställ Filterpåsar
                </Button>
            </Container>
        </Header>
    );
}
export default Navbar;