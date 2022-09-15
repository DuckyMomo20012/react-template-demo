import {
  Text,
  Stack,
  Image,
  Group,
  Card,
  Badge,
  Skeleton,
  LoadingOverlay,
  Box,
} from '@mantine/core';
import { pokemonTypeColor } from '@/constants/pokemonTypeColor.js';
import { useImageLoad } from '@/hooks/useImageLoad.js';

const PokemonCard = ({ pokemonInfo }) => {
  const { imageRef, isLoaded, isError } = useImageLoad();
  const imageSrc = pokemonInfo.sprites.front_default || '';

  return (
    <Card className="flex-1 max-w-max w-full" withBorder>
      <Stack align="center" py="md">
        <Box className="relative">
          <Image
            src={imageSrc}
            withPlaceholder
            // width={280}
            // height={280}
            imageRef={imageRef}
            imageProps={{ className: '!sm:(h-70 w-70) !aspect-square' }}
          />
          <LoadingOverlay overlayOpacity={1} visible={!isLoaded && !isError} />
        </Box>
        <Group position="center" className="w-full">
          <>
            <Text
              size="xl"
              transform="capitalize"
              align="center"
              className="truncate"
            >
              {pokemonInfo.name || 'Unknown'}
            </Text>
            <Badge>No. {pokemonInfo.id}</Badge>
          </>
        </Group>
        <Group position="center" className="w-full">
          {pokemonInfo.types.map(({ slot, type }) => {
            return (
              <Badge key={slot} color={pokemonTypeColor[type.name]}>
                {type.name}
              </Badge>
            );
          })}
        </Group>
      </Stack>
    </Card>
  );
};

const PokemonCardSkeleton = () => {
  return (
    <Card className="flex-1 max-w-max w-full" withBorder>
      <Stack align="center" py="md">
        <Skeleton
          height={280}
          width={280}
          className="!w-full !h-auto !sm:(h-70 w-70) !aspect-square"
        />
        <Group position="center" className="w-full">
          <Skeleton height={31} className="!w-1/2" />
          <Skeleton height={20} width={75} />
        </Group>
        <Group position="center" className="w-full">
          <Skeleton height={20} width={75} />
          <Skeleton height={20} width={75} />
        </Group>
      </Stack>
    </Card>
  );
};

PokemonCard.Skeleton = PokemonCardSkeleton;

export { PokemonCard };
