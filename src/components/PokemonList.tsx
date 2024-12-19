import React from "react";
import { IPokemon } from "../models/pokemon";
import PokemonItem from "./PokemonItem";
import Pagination from "./Pagination";
import useApi from "../hooks/useApi";
import Loading from "./Loading";

interface PokemonListProps {}

const PokemonList: React.FC<PokemonListProps> = () => {
  const { data, loading, error } = useApi();

  if (error) return <div>{error}</div>;

  return (
    <div className="m-6">
      <div className="grid grid-cols-6 gap-4 max-w-4xl mx-auto min-h-96">
        {loading ? (
          <div className="min-h-80">
            <Loading />
          </div>
        ) : (
          data?.data?.map((pokemon: IPokemon) => (
            <div key={pokemon.id} className="bg-blue-100 p-4 text-center">
              <PokemonItem pokemon={pokemon} />
            </div>
          ))
        )}
      </div>

      <Pagination count={data?.metadata.count ?? 0} />
    </div>
  );
};

export default PokemonList;
