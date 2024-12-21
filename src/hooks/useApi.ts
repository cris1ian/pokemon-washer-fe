import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { ApiResp, RespData } from "../models/api-resp";
import { IPokemon } from "../models/pokemon";
import { API_URL } from "../constants/api";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const useApi = () => {
  const endpoint: string = `${API_URL}/pokemon`;

  const limit = useSelector((state: RootState) => state.pagination.step);
  const offset = useSelector((state: RootState) => state.pagination.offset);

  const [data, setData] = useState<RespData<IPokemon> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
        setData(response.data.data);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [offset, limit]);

  return { data, loading, error };
};

export default useApi;
