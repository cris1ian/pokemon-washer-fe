import React, { useState } from "react";
import { IPokemon } from "../models/pokemon";
import PokemonItem from "./PokemonItem";
import Pagination from "./Pagination";
import useApi from "../hooks/useApi";
import Loading from "./Loading";

const STEP: number = 12;

interface PokemonListProps {}

const PokemonList: React.FC<PokemonListProps> = () => {
  const [offset, setOffset] = useState<number>(0);
  const { data, loading, error } = useApi(offset, STEP);

  // if (loading ) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <div className="m-6">
      {loading ? (
        <div className="min-h-80">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-6 gap-4 max-w-4xl mx-auto">
          {data?.data?.map((pokemon: IPokemon) => (
            <div key={pokemon.id} className="bg-blue-100 p-4 text-center">
              <PokemonItem pokemon={pokemon} />
            </div>
          ))}
        </div>
      )}

      <Pagination
        step={STEP}
        offset={offset}
        count={data?.metadata.count ?? 0}
        setOffset={setOffset}
      />
    </div>
  );
};

export default PokemonList;
