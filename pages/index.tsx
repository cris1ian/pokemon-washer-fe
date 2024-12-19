import React from "react";
import PokemonList from "../src/components/PokemonList";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorHandler from "../src/components/ErrorHandler";

export default function Home() {
  return (
    <div>
      <ErrorBoundary errorComponent={ErrorHandler}>
        <h1 className="text-4xl text-center m-9 font-bold">Pokémon List</h1>
        <PokemonList />
      </ErrorBoundary>
    </div>
  );
}
