import { Button, Grid, Center, Card, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFireBase';
import useItems from '../../hooks/useItems';
import { ItemCard } from '../../Components/ItemCard/ItemCard';
import { useModals } from '@mantine/modals';
import { useState, useEffect } from 'react';

const UserItems = () => {
  const { user } = useFirebase();
  const [items] = useItems();
  const [userItems, setUserItems] = useState([]);
  const modals = useModals();

  useEffect(() => {
    setUserItems(items.filter((item) => item.userEmail === user.email));
  }, []);

  const handleDeleteItem = (id) => {
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a
          modal. Please clicimport {useModals} from '@mantine/modals'; k one of
          these buttons to proceed.
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => deleteConfirm(),
    });

    const deleteConfirm = () => {
      fetch(`http://localhost:5000/delete/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUserItems(userItems.filter((item) => item._id !== id));
        });
    };
  };

  return (
    <div className=" flex flex-col items-center justify-center mx-0 px-0 md:mx-20 md:px-20">
      <h1 className="my-14 text-2xl md:text-4xl">
        Your Collection of Products
      </h1>
      <Grid grow>
        {userItems.map((item) => (
          <Grid.Col
            span={3}
            key={item._id}
            className="flex flex-col items-center"
          >
            <ItemCard {...item} />

            <div className="w-80 mx-auto md:w-[390px] mb-10">
              <Button
                style={{ marginTop: 20 }}
                fullWidth
                color="red"
                onClick={() => handleDeleteItem(item._id)}
              >
                Delete
              </Button>
            </div>
          </Grid.Col>
        ))}
      </Grid>
      <Button
        variant="gradient"
        gradient={{ from: 'black', to: 'grey' }}
        style={{ marginTop: 14, width: 350, margin: 30 }}
        onClick={() => {}}
      >
        Manage Inventory
      </Button>
    </div>
  );
};

export default UserItems;
