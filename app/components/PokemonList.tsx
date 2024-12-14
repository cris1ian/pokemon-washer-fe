import React, { useState } from 'react';
import { Pokemon } from '../types/pokemon';
import PokemonItem from './PokemonItem';
import Pagination from './Pagination';
import usePokemon from '../hooks/usePokemon';

interface PokemonListProps {
  apiUrl: string;
}

const PokemonList: React.FC<PokemonListProps> = ({ apiUrl }) => {
  const [url, setUrl] = useState(apiUrl);
  const { data, loading, error } = usePokemon(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div>
        {data?.results.map((pokemon) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        currentPage={data?.next || ''}
        previousPage={data?.previous || ''}
        onPageChange={setUrl}
      />
    </div>
  );
};

export default PokemonList;
