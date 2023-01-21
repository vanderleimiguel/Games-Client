import { LoginRequest } from "../types/requests";

export const api = {
  login: async ({ Email, Password }: LoginRequest) => {
    const response = await fetch("https://xbox-live-api.onrender.com/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email, Password }),
    });
    return await response.json();
  },
};
