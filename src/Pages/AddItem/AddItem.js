import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  NumberInput,
  Center,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification, updateNotification } from '@mantine/notifications';
import useFirebase from '../../hooks/useFireBase';

const AddItem = () => {
  const { user } = useFirebase();
  const form = useForm({
    initialValues: {
      name: '',
      image: '',
      description: '',
      price: '',
      supplierName: '',
      quantity: 0,
    },
  });

  const handleAddItem = (values) => {
    form.reset();
    showNotification({
      id: 'load-data',
      loading: true,
      title: 'Adding New Item..',
      message: 'Please wait while we add the item to database',
      autoClose: false,
      disallowClose: true,
    });
    fetch('http://localhost:5000/addItem', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },

      body: JSON.stringify({ ...values, userEmail: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        updateNotification({
          id: 'load-data',
          color: 'green',
          title: 'Successfully added!',
          message: 'Your item is now added to Aroma Central!',
          autoClose: 4000,
        });
      });
  };
  return (
    <div>
      <h1 className="text-center mt-10 md:mt-0 mb-0 md:mb-10">
        Add item to Aroma Central
      </h1>
      <Box sx={{ width: 300, marginBottom: 100 }} mx="auto">
        <form onSubmit={form.onSubmit((values) => handleAddItem(values))}>
          <TextInput
            label="Name"
            placeholder="Product Title"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Description"
            placeholder="Description"
            {...form.getInputProps('description')}
          />
          <TextInput
            label="Image URL"
            placeholder="Suppliers name"
            {...form.getInputProps('image')}
          />
          <NumberInput
            label="Price"
            placeholder="Price in USD"
            {...form.getInputProps('price')}
          />
          <TextInput
            label="Supplier"
            placeholder="URL of the image"
            {...form.getInputProps('supplierName')}
          />
          <NumberInput label="Quantity" {...form.getInputProps('quantity')} />

          <Group position="right" mt="md">
            <Button fullWidth type="submit">
              Add Product
            </Button>
          </Group>
        </form>
      </Box>
    </div>
  );
};

export default AddItem;
