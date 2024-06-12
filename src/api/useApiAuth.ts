import { useEffect, useState } from "react";

import { getJWTToken } from "api/authService";

const useApiAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await getJWTToken();
        setToken(token);
      } catch (error) {
        setError("Error al obtener el token");
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, []);

  return { token, error, loading };
};

export default useApiAuth;
