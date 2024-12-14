import { useState, useEffect } from 'react';
import axios from 'axios';
import { PokemonResponse } from '../types/pokemon';

const usePokemon = (url: string) => {
  const [data, setData] = useState<PokemonResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default usePokemon;
