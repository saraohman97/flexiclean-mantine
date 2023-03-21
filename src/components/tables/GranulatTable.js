import { useEffect, useState } from 'react';
import { createStyles, Table, ScrollArea } from '@mantine/core';
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

const GranulatTable = () => {
    const { classes, cx } = useStyles();
    const [scrolled, setScrolled] = useState(false);
    const [data, setData] = useState("");

    useEffect(() => {
        axios.get("http://localhost:9000/productSpecific")
            .then((res) => {
                setData(res.data);
            })
    }, [])

    if (!data) return (<h4>Kunde inte hämta data...</h4>);

    const rows = data[1]?.granulat.map((row) => (
        <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.well} mm</td>
            <td>Bark/flis</td>
        </tr>
    ));

    return (
        <ScrollArea sx={{ height: 300 }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
            <Table sx={{ minWidth: 700 }}>
                <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                    <tr>
                        <th>Artikelnummer</th>
                        <th>Passar till brunn</th>
                        <th>Filtertyp</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}

export default GranulatTable