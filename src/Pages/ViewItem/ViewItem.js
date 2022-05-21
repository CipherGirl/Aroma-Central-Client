import { Button, Card, Center, NumberInput, Text } from '@mantine/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemCard } from '../../Components/ItemCard/ItemCard';
import useItemDetail from '../../hooks/useItemDetail';
import { useNavigate } from 'react-router-dom';

const ViewItem = () => {
  const { itemId } = useParams();
  const [item, setItem] = useItemDetail(itemId);
  const [restock, setRestock] = useState(0);
  const navigate = useNavigate();

  const handleDeliver = () => {
    // axios
    //   .put(`https://polar-hamlet-16866.herokuapp.com/update/${itemId}`, {
    //     body: {
    //       quantity: item.quantity - 1,
    //     },
    //   })
    //   .then((response) => {
    //     setItem({ ...item, quantity: item.quantity - 1 });
    //   });
    fetch(`https://polar-hamlet-16866.herokuapp.com/update/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: item.quantity - 1 }),
    })
      .then((res) => res.json())
      .then((data) => setItem({ ...item, quantity: item.quantity - 1 }));
  };

  const handleRestock = () => {
    // axios
    //   .put(`https://polar-hamlet-16866.herokuapp.com/deliver/${itemId}`, {
    //     body: {
    //       quantity: item.quantity + restock,
    //     },
    //   })
    //   .then((response) => {
    //     setItem({ ...item, quantity: item.quantity + restock });
    //     console.log(item);
    //   });
    fetch(`https://polar-hamlet-16866.herokuapp.com/update/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: item.quantity + restock }),
    })
      .then((res) => res.json())
      .then((data) => setItem({ ...item, quantity: item.quantity + restock }));
  };

  return (
    <div className="w-80 mx-auto md:w-[900px]">
      <ItemCard {...item} noButton />
      <Card>
        <div className="">
          <Button
            variant="outline"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
            onClick={() => handleDeliver()}
            disabled={item.quantity ? false : true}
          >
            Delivered
          </Button>
        </div>
        <Text size="xl" className="mt-8">
          Restock Item
        </Text>
        <NumberInput
          placeholder="Your name"
          label="Enter Quantity"
          value={restock}
          onChange={(val) => setRestock(val)}
        />
        <Button
          variant="outline"
          color="green"
          fullWidth
          onClick={() => handleRestock()}
          className="mt-3"
        >
          Restock
        </Button>
        <Center>
          <Button
            variant="gradient"
            gradient={{ from: 'black', to: 'grey' }}
            style={{ marginTop: 5, width: 350, margin: 30 }}
            onClick={() => navigate('/manage')}
          >
            Manage Inventory
          </Button>
        </Center>
      </Card>
    </div>
  );
};

export default ViewItem;
