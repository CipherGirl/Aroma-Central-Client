import {
  Badge,
  Button,
  Card,
  Group,
  NumberInput,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ItemCard = (props) => {
  const {
    _id,
    name,
    image,
    description,
    supplierName,
    price,
    quantity,
    noButton,
  } = props;
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  const navigate = useNavigate();

  return (
    <div
      className={`w-80 mx-auto  ${noButton ? 'md:w-[900px]' : 'md:w-[390px]'}`}
    >
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
          <Text weight={500} size={`${noButton ? 'xl' : 'lg'}`}>
            {name}
          </Text>
          <Badge
            color="blue"
            variant="light"
            size={`${noButton ? 'xl' : 'lg'}`}
          >
            {'$ '}
            {price}
          </Badge>
        </Group>

        <p
          className="overflow-hidden h-36"
          size={`${noButton ? 'lg' : 'xs'}`}
          style={{
            color: secondaryColor,
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>

        <h4>
          Supplier: <span className="italic font-semibold">{supplierName}</span>
        </h4>
        <h5>
          Quantity:{' '}
          <span
            className={`italic font-semibold ${
              !quantity ? 'text-red-400' : ''
            }`}
          >
            {quantity ? quantity : 'Sold Out'}
          </span>
        </h5>

        {!noButton && (
          <Button
            variant="outline"
            fullWidth
            onClick={() => navigate(`/view/${_id}`)}
            className="mt-5"
          >
            Update Item
          </Button>
        )}
      </Card>
    </div>
  );
};
