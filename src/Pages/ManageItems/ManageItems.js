import {
  Button,
  Grid,
  Image,
  Table,
  Center,
  Loader,
  ScrollArea,
  MediaQuery,
  Dialog,
  Group,
  Text,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import { ItemCard } from '../../Components/ItemCard/ItemCard';
import { useEffect, useState } from 'react';
import { useModals } from '@mantine/modals';

const ManageItems = () => {
  const [items, setItems] = useItems();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);
  const modals = useModals();

  useEffect(() => {
    let timer = setTimeout(() => setLoading(false), 200);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleDeleteItem = (id) => {
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a
          modal. Please click one of these buttons to proceed.
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => deleteConfirm(),
    });

    const deleteConfirm = () => {
      fetch(`${process.env.REACT_APP_BASEURL}/delete/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setItems(items.filter((item) => item._id !== id));
        });
    };
  };

  if (loading) {
    return (
      <Center>
        <Loader color="dark" size="xl" variant="dots" />
      </Center>
    );
  }
  return (
    <div className=" flex flex-col items-center justify-center mx-0 px-0 md:mx-20 md:px-20">
      <h1 className="my-5 text-xl md:text-2xl">
        Manage All Items from One Place
      </h1>
      <Button
        variant="gradient"
        gradient={{ from: 'blue', to: 'teal' }}
        style={{ marginBottom: 50, width: 300, margin: 30 }}
        onClick={() => navigate(`/addItem`)}
      >
        Add New Item
      </Button>

      <MediaQuery
        query="(max-width: 767px) and (min-width: 300px)"
        styles={{ width: 350 }}
      >
        <ScrollArea>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Image</th>
                <th>View Item</th>
                <th>Delet Item</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>
                    {'$ '}
                    {item.price}
                  </td>
                  <td>{item.quantity}</td>
                  <td>
                    <img className="max-w-[30px] h-auto" src={item.image} />
                  </td>
                  <td>
                    <Button
                      variant="outline"
                      onClick={() => navigate(`/view/${item._id}`)}
                    >
                      View
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="red"
                      onClick={() => handleDeleteItem(item._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ScrollArea>
      </MediaQuery>
    </div>
  );
};

export default ManageItems;
