import React, { useState } from "react";
import { IPokemon } from "../models/pokemon";
import PokemonItem from "./PokemonItem";
import Pagination from "./Pagination";
import useApi from "../hooks/useApi";
import { API_URL } from "../constants/api";

interface PokemonListProps {}

const PokemonList: React.FC<PokemonListProps> = () => {
  const [offset, setOffset] = useState<number>(0);
  const { data, loading, error } = useApi(offset);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="m-6">
      <div className="grid grid-cols-6 gap-4">
        {data?.data?.map((pokemon: IPokemon) => (
          <div key={pokemon.id} className="bg-blue-100 p-4 text-center">
            <PokemonItem pokemon={pokemon} />
          </div>
        ))}
      </div>
      <Pagination
        offset={offset}
        count={data?.metadata.count ?? 0}
        onPageChange={setOffset}
      />
    </div>
  );
};

export default PokemonList;
