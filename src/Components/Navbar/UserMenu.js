import { forwardRef } from 'react';
import {
  Group,
  Avatar,
  Text,
  Menu,
  UnstyledButton,
  Divider,
} from '@mantine/core';
import useFirebase from '../../hooks/useFireBase';
import { Link } from 'react-router-dom';

const UserButton = forwardRef(
  ({ image, name, email, icon, ...others }, ref) => (
    <UnstyledButton
      ref={ref}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      {...others}
    >
      <Group>
        <Avatar src={null} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="xs" weight={600}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  )
);

const UserMenu = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <Group position="center">
      <Menu
        withArrow
        placement="center"
        control={
          <UserButton
            name={user.displayName || 'User Name'}
            email={user.email}
          />
        }
      >
        <Menu.Label>User Menu</Menu.Label>

        <Menu.Item>
          <Link to="/addItem" className=" text-sm hover:font-semibold">
            Add Item
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/user/items" className=" text-sm hover:font-semibold">
            My Items
          </Link>
        </Menu.Item>
        <Divider />
        <Menu.Item onClick={() => handleSignOut()}>Signout</Menu.Item>
      </Menu>
    </Group>
  );
};

export default UserMenu;
