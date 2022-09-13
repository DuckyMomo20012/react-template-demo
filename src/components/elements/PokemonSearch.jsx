import { Icon } from '@iconify/react';
import { ActionIcon, TextInput } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce.js';

const PokemonSearch = ({ setIsSearching, setSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const debounceSearchTerm = useDebounce(searchTerm, 500);

  const { data, isFetching } = useQuery(
    ['pokemon', debounceSearchTerm],
    async () => {
      try {
        const query = debounceSearchTerm.toLowerCase().replace(' ', '');

        const { data: pokemonInfo } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${query}`,
        );

        // NOTE: Cleanup error if data is found
        setError('');

        return pokemonInfo;
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response?.status === 404) {
            setError('Pokemon not found');
          }
        } else {
          setError('Something went wrong...');
        }

        return null;
      }
    },
    { enabled: !!debounceSearchTerm, refetchOnWindowFocus: false },
  );

  useEffect(() => {
    setIsSearching(isFetching);
  }, [isFetching, setIsSearching]);

  useEffect(() => {
    if (data) {
      setSearchResult(data);
    }
  }, [data, setSearchResult]);

  return (
    <TextInput
      placeholder="Search Pokemon name or ID"
      icon={<Icon icon="fluent-emoji-flat:magnifying-glass-tilted-right" />}
      onChange={(e) => {
        setSearchTerm(e.currentTarget.value);
        setError('');
      }}
      error={error}
      value={searchTerm}
      rightSection={
        <ActionIcon radius="xl" color="blue">
          <Icon
            onClick={() => {
              setSearchTerm('');
              setError('');
            }}
            icon="ic:outline-close"
          />
        </ActionIcon>
      }
    />
  );
};

export { PokemonSearch };
