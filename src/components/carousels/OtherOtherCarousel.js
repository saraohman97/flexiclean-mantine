import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '1px solid gray',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: 'darkblue',
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.black,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

function Card({ image, title, category }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})`}}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Läs artikel
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://h24-original.s3.amazonaws.com/252829/30249150-teMDG.jpg',
    // title: 'FlexiCleans filterkassett för dagvattenrening',
    category: 'målartvätt',
  },
  {
    image:
      'https://h24-original.s3.amazonaws.com/252829/30249151-LghYS.jpg',
    // title: 'Hawaii beaches review: better than you think',
    category: 'brunnlock',
  },
  {
    image:
      'https://h24-original.s3.amazonaws.com/252829/30249156-WiNiq.png',
    // title: 'Hawaii beaches review: better than you think',
    category: 'filterkorg',
  }
];

const OtherOtherCarousel = () => {
  // const theme = useMantineTheme();
  // const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.image}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      breakpoints={[{ maxWidth: 'xs', slideSize: '100%', slideGap: 2 }]}
      slideGap="xl"
      align="start"
      // slidesToScroll={mobile ? 1 : 2}
      loop
      w='100%'
    >
      {slides}
    </Carousel>
  );
}

export default OtherOtherCarousel