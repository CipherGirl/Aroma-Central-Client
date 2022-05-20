import { useNavigate } from 'react-router-dom';
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
  Transition,
} from '@mantine/core';

export const ItemCard = (props) => {
  const {
    _id,
    name,
    image,
    description,
    suppilerName,
    price,
    quantity,
    withControl,
  } = props;
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  const navigate = useNavigate();

  return (
    <div className="w-80 m-auto md:w-[380px]">
      <Card shadow="sm" p="lg">
        <Card.Section>
          <img
            src={image}
            alt=""
            style={{
              height: '300px',
              width: '300px',
              objectFit: 'contain',
              margin: 'auto',
              padding: '20px 0px',
            }}
          />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500} size="lg">
            {name}
          </Text>
          <Badge color="blue" variant="light" size="lg">
            {'$ '}
            {price}
          </Badge>
        </Group>

        <Text
          size="sm"
          style={{ color: secondaryColor, lineHeight: 1.5, height: 120 }}
        >
          {description}
        </Text>

        <Button
          variant="outline"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={() => navigate(`/view/${_id}`)}
        >
          Update Item
        </Button>
        {withControl && <h1>This is controller</h1>}
      </Card>
    </div>
  );
};
