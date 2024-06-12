import { useEffect, useState } from "react";

import { baseURL } from "config/constants";
import { ResultType } from "types/result";
import useApiAuth from "./useApiAuth";

interface UseFetchResults {
  data: ResultType[];
  loading: boolean;
  error: string | null;
}

export const useFetchResults = (page: number): UseFetchResults => {
  const [data, setData] = useState<ResultType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { token, error: authError, loading: authLoading } = useApiAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(baseURL + `/results?page=${page}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Error al obtener los resultados");
        }

        const data = await response.json();

        setData((prevData) => [...prevData, ...data["hydra:member"]]);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (authError) {
      setError(authError);
    } else if (authLoading) {
      setLoading(true);
    } else if (token) {
      fetchData();
    }
  }, [authError, authLoading, page, token]);

  return { data, loading, error };
};
