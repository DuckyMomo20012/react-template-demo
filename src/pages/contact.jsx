import { Icon } from '@iconify/react';
import { Box, Group, Stack, Text, ThemeIcon, Title } from '@mantine/core';

const Contact = () => {
  return (
    <Stack align="center">
      <Title>Contact Us</Title>
      <Stack>
        <Group>
          <ThemeIcon variant="light" size="xl">
            <Icon icon="ic:baseline-alternate-email" height={24} />
          </ThemeIcon>
          <Box>
            <Text color="dimmed" size="xs">
              Email
            </Text>
            <Text>example@gmail.com</Text>
          </Box>
        </Group>
        <Group>
          <ThemeIcon variant="light" size="xl">
            <Icon icon="ic:outline-phone-iphone" height={24} />
          </ThemeIcon>
          <Box>
            <Text color="dimmed" size="xs">
              Phone
            </Text>
            <Text>1111111111</Text>
          </Box>
        </Group>
        <Group>
          <ThemeIcon variant="light" size="xl">
            <Icon icon="ic:outline-home" height={24} />
          </ThemeIcon>
          <Box>
            <Text color="dimmed" size="xs">
              Address
            </Text>
            <Text>Example address</Text>
          </Box>
        </Group>
        <Group>
          <ThemeIcon variant="light" size="xl">
            <Icon icon="ic:outline-light-mode" height={24} />
          </ThemeIcon>
          <Box>
            <Text color="dimmed" size="xs">
              Working hours
            </Text>
            <Text>8 a.m. - 11 p.m.</Text>
          </Box>
        </Group>
      </Stack>
    </Stack>
  );
};

export { Contact };
