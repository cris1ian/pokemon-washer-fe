import React from "react";
import PokemonList from "../src/components/PokemonList";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorHandler from "../src/components/ErrorHandler";
import { Provider } from "react-redux";
import { store } from "../src/store";

export default function Home() {
  return (
    <div>
      <ErrorBoundary errorComponent={ErrorHandler}>
        <Provider store={store}>
          <h1 className="text-4xl text-center m-9 font-bold">Pokémon List</h1>
          <PokemonList />
        </Provider>
      </ErrorBoundary>
    </div>
  );
}
