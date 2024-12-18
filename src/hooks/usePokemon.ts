import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { ApiResp } from "../models/api-resp";
import { Pokemon } from "../models/pokemon";

const usePokemon = (url: string) => {
  const [data, setData] = useState<Pokemon[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response: AxiosResponse<ApiResp<Pokemon[]>> = await axios.get(url);
        console.log({ response });
        setData(response.data.data);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default usePokemon;
