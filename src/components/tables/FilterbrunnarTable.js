import { useEffect, useState } from 'react';
import { createStyles, Table, ScrollArea, Title, Text, Flex } from '@mantine/core';
import axios from 'axios';

const useStyles = createStyles((theme) => ({
    header: {
        position: 'sticky',
        top: 0,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease',

        '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]}`,
        },
    },
    scrolled: {
        boxShadow: theme.shadows.sm,
    },
}));

const FilterbrunnarTable = () => {
    const { classes, cx } = useStyles();
    const [scrolled, setScrolled] = useState(false);
    const [data, setData] = useState("");

    useEffect(() => {
        axios.get("http://localhost:9000/productSpecific")
            .then((res) => {
                setData(res.data);
            })
    }, [])
    // console.log(data[0]?.dagvatten.map(i => i.id))

    if (!data) return null;

    const rows = data[2]?.filterbrunnar.map((row) => (
        <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.amount} st</td>
            <td>{row.capacity} m3/h</td>
            <td>Bark/flis</td>
        </tr>
    ));

    return (
        <>
            <ScrollArea onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
                <Table sx={{ minWidth: 700 }}>
                    <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                        <tr>
                            <th>Artikelnummer</th>
                            <th>Antal kassetter</th>
                            <th>Volym kapacitet</th>
                            <th>Filtertyp</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </ScrollArea>

            <Flex wrap='wrap' direction='column'>
                <Title mt='lg' size='h3'>Uthyrning</Title>
                <Text>Denna filterbrunn finns för uthyrning via Terana AB. Kontakta oss för närmare information.</Text>
                {/* <Button w='280px'>Kontakta oss för närmare information.</Button> */}
            </Flex>

            <ScrollArea onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
                <Table sx={{ minWidth: 700 }}>
                    <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                        <tr>
                            <th>Artikelnummer</th>
                            <th>Antal kassetter</th>
                            <th>Volym kapacitet</th>
                            <th>Filtertyp</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>79 123. Filterbrunn Dagvatten DN1000</td>
                            <td>3 st</td>
                            <td>29 m3/h</td>
                            <td>Bark/flis</td>
                        </tr>
                    </tbody>
                </Table>
            </ScrollArea>
        </>
    );
}

export default FilterbrunnarTable