import axios from "axios";
import { profileList } from "../../mocks/profileList";
import { Profile, ProfileInput } from "../types/profile";
import { LoginRequest } from "../types/requests";

axios.defaults.baseURL = "https://xbox-live-api.onrender.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

// verificar tokem se é valido atraves do interceptor
axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        Authorization: "Bearer " + token,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    if (error.response.status === 401) {
      if (localStorage.getItem("token")) localStorage.removeItem("token");
    }
    throw new Error(error.response.data.message);
  }
);

export const api = {
  // login de usuario
  login: async ({ Email, Password }: LoginRequest) => {
    try {
      const response = await axios.post("/auth", { Email, Password });
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  // Perfis home
  getProfiles: async (userId: string): Promise<Profile[] | undefined> => {
    try {
      const profiles = await axios.get("/profile/" + userId);
      return profiles.data;
    } catch (err) {
      alert(err);
    }
  },

  // create profile
  createProfile: async (
    profile: ProfileInput
  ): Promise<Profile | undefined> => {
    try {
      const newProfile = await axios.post("/profile", profile);
      return newProfile.data;
    } catch (err) {
      alert(err);
    }
  },
};
