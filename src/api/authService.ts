import { tokenPassword, tokenURL, tokenUsername } from "config/constants";

export const getJWTToken = async (): Promise<string> => {
  const response = await fetch(tokenURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "insomnia/8.6.1",
    },
    body: JSON.stringify({
      username: tokenUsername,
      password: tokenPassword,
    }),
  });

  if (!response.ok) {
    throw new Error("Error al obtener el token");
  }

  const data = await response.json();
  return data.token;
};
