import { Button, Grid, Text, Center, Loader } from '@mantine/core';
import { useModals } from '@mantine/modals';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ItemCard } from '../../Components/ItemCard/ItemCard';
import { auth } from '../../firebase.init';
import useItems from '../../hooks/useItems';

const UserItems = () => {
  const [items] = useItems();
  const [userItems, setUserItems] = useState([]);
  const modals = useModals();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const url = `http://localhost:5000/user/items`;
    fetch(url, {
      headers: {
        authorization: `${user.email} ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserItems(data));
  }, [user.email]);

  // useEffect(() => {
  //   setUserItems(items.filter((item) => item.userEmail === user.email));
  // }, []);

  const handleDeleteItem = (id) => {
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a
          modal. Please clicimport {useModals} from '@mantine/modals'; k one of
          these buttons to pimport {useAuthState} from
          'react-firebase-hooks/auth'; roceed.
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

  if (!userItems) {
    return (
      <Center>
        <Loader></Loader>
      </Center>
    );
  }

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
