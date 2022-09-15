import { Icon } from '@iconify/react';
import { Stack, ActionIcon, Group, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PokemonCard } from '@/components/elements/PokemonCard';
import { PokemonSearch } from '@/components/elements/PokemonSearch';

import {
  increment,
  decrement,
  reset,
  skipTo,
} from '@/store/slice/counterSlice.js';

const LIMIT = 10;
const MAX_POKEMON = 1154;

const HomePage = () => {
  const count = useSelector((state) => state.counter.value);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchResult) {
      // NOTE: We minus 1 because the page index start at 0. E.g: Id 14 -> index
      // 3, page 1
      dispatch(skipTo(searchResult.id - 1));
    }
  }, [searchResult, dispatch]);

  const page = Math.floor(count / LIMIT);

  const { data: pokemonData, isFetching } = useQuery(
    ['pokemonPage', page],
    async () => {
      const { data: pokemonPageList } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${
          page * LIMIT
        }&limit=${LIMIT}`,
      );

      const pokemonList = await Promise.all(
        pokemonPageList.results.map(async (pokemon) => {
          const { data: pokemonInfo } = await axios.get(pokemon.url);
          return pokemonInfo;
        }),
      );
      return pokemonList;
    },
    { enabled: !searchResult, refetchOnWindowFocus: false },
  );

  // NOTE: Search result has higher priority than page data
  const pokemonInfo = searchResult || pokemonData?.at(count % LIMIT);
  return (
    <Stack align="center">
      <Stack align="center" className="w-2/3">
        <Title align="center" className="w-full truncate">
          Pokedex
        </Title>
        <PokemonSearch
          setIsSearching={setIsSearching}
          setSearchResult={setSearchResult}
        />
        <Stack align="center" className="w-full">
          {isFetching || isSearching || !pokemonInfo ? (
            <PokemonCard.Skeleton />
          ) : (
            <PokemonCard pokemonInfo={pokemonInfo} />
          )}
          <Group position="center">
            <ActionIcon
              color="blue"
              variant="light"
              size={56}
              onClick={() => {
                if (count > 0 && count < MAX_POKEMON) {
                  dispatch(decrement());
                } else {
                  dispatch(skipTo(MAX_POKEMON - 1));
                }
                setSearchResult(null);
              }}
              disabled={isSearching}
              className="!sm:order-first !order-1 flex-shrink"
            >
              <Icon icon="fluent-emoji-flat:fast-down-button" height={32} />
            </ActionIcon>
            <ActionIcon
              color="blue"
              variant="light"
              size={56}
              onClick={() => {
                if (count < MAX_POKEMON - 1) {
                  dispatch(increment());
                } else {
                  dispatch(reset());
                }
                setSearchResult(null);
              }}
              disabled={isSearching}
            >
              <Icon icon="fluent-emoji-flat:fast-up-button" height={32} />
            </ActionIcon>
          </Group>
        </Stack>

        <ActionIcon
          color="blue"
          variant="light"
          size={40}
          onClick={() => {
            dispatch(reset());
            setSearchResult(null);
          }}
          disabled={isSearching}
        >
          <Icon
            icon="fluent-emoji-flat:counterclockwise-arrows-button"
            height={26}
          />
        </ActionIcon>
      </Stack>
    </Stack>
  );
};

export { HomePage };
