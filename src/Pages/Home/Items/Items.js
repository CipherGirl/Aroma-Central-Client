import { Button, Grid } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { ItemCard } from '../../../Components/ItemCard/ItemCard';
import useItems from '../../../hooks/useItems';

const Items = () => {
  const [items] = useItems();
  const onlySixItems = items.slice(-6);
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col items-center justify-center mx-0 px-0 md:mx-20 md:px-20">
      <h1 className="mb-20 text-2xl md:text-4xl">Our Latest Items</h1>
      <Grid grow>
        {onlySixItems.map((item) => (
          <Grid.Col span={3} key={item._id}>
            <ItemCard {...item} />
          </Grid.Col>
        ))}
      </Grid>
      <Button
        variant="gradient"
        gradient={{ from: 'black', to: 'grey' }}
        style={{ marginTop: 14, width: 350, margin: 30 }}
        onClick={() => navigate('/manage')}
      >
        Manage Inventory
      </Button>
    </div>
  );
};

export default Items;
