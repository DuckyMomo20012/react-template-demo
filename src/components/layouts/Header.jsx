import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Anchor,
  Group,
  Tooltip,
  Text,
  Button,
  useMantineColorScheme,
  Space,
  Image,
  Box,
  Divider,
} from '@mantine/core';
import { Link } from 'react-router-dom';

import logo from '@/logo.svg';

const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <>
      <Group position="flex-start">
        <Anchor
          underline={false}
          spacing="xs"
          component={Link}
          to="/"
          className="flex items-center gap-2"
        >
          <Box component="span">
            <Image
              src={logo}
              height={32}
              width={32}
              className="animate-duration-5000 animate-spin"
            />
          </Box>
          <Text align="center">React Template</Text>
        </Anchor>
        <Space w="xl" />
        <Anchor underline={false} component={Link} to="/">
          Home
        </Anchor>
        <Anchor underline={false} component={Link} to="/contact">
          Contact
        </Anchor>
      </Group>
      <Group>
        <Tooltip label="Source code">
          <Anchor
            href="https://github.com/DuckyMomo20012/traffic-sign-detection"
            target="_blank"
          >
            <ActionIcon size="lg" variant="outline">
              <Icon icon="ant-design:github-filled" width={24} />
            </ActionIcon>
          </Anchor>
        </Tooltip>
        <Tooltip label={dark ? 'Light mode' : 'Dark mode'}>
          <ActionIcon
            color="blue"
            onClick={() => toggleColorScheme()}
            size="lg"
            variant="outline"
          >
            <Icon
              icon={dark ? 'ic:outline-dark-mode' : 'ic:outline-light-mode'}
              width={24}
            />
          </ActionIcon>
        </Tooltip>
        <Divider orientation="vertical" className="my-1" />
        <Button component={Link} to="/auth/login" variant="light">
          Login
        </Button>
        <Button component={Link} to="/auth/register" variant="outline">
          Register
        </Button>
      </Group>
    </>
  );
};

export { Header };
