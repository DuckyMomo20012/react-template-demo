import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Anchor,
  Group,
  Tooltip,
  Text,
  useMantineColorScheme,
  Space,
  Image,
  Box,
  Divider,
  Button,
  Header as MantineHeader,
} from '@mantine/core';
import { Link } from 'react-router-dom';

import logo from '@/logo.svg';

const Header = ({ setNavBarOpened }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <MantineHeader height={48} px={24}>
      <Group className="h-full" position="apart" noWrap>
        <Icon
          icon="ic:baseline-menu"
          onClick={() => {
            setNavBarOpened((prevNavBarOpened) => !prevNavBarOpened);
          }}
          className="block md:hidden"
          height={24}
        />
        <Group position="left" className="!md:flex !hidden !flex-grow">
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
          <Tooltip label={dark ? 'Light mode' : 'Dark mode'}>
            <ActionIcon
              color="blue"
              onClick={() => toggleColorScheme()}
              size="lg"
              variant="outline"
              className="!md:flex !hidden"
            >
              <Icon
                icon={dark ? 'ic:outline-dark-mode' : 'ic:outline-light-mode'}
                width={24}
              />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Source code">
            <Anchor
              href="https://github.com/DuckyMomo20012/react-template"
              target="_blank"
            >
              <ActionIcon size="lg" variant="outline">
                <Icon icon="ant-design:github-filled" width={24} />
              </ActionIcon>
            </Anchor>
          </Tooltip>
          <Divider className="!md:flex !hidden my-1" orientation="vertical" />
          <Button
            className="!md:flex !hidden"
            component={Link}
            to="/auth/login"
            variant="light"
          >
            Login
          </Button>
          <Button
            className="!md:flex !hidden"
            component={Link}
            to="/auth/register"
            variant="outline"
          >
            Register
          </Button>
        </Group>
      </Group>
    </MantineHeader>
  );
};

export { Header };
