import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiResp, RespData } from "../models/api-resp";
import { IPokemon } from "../models/pokemon";
import { API_URL } from "../constants/api";

const useApi = (offset: number, limit: number) => {
  const [data, setData] = useState<RespData<IPokemon> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const endpoint: string = `${API_URL}/pokemon`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const params = { limit, offset };
      try {
        const response: AxiosResponse<ApiResp<IPokemon>> = await axios.get(
          endpoint,
          { params }
        );
        console.log({ response });
        setData(response.data.data);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [offset]);

  return { data, loading, error };
};

export default useApi;
