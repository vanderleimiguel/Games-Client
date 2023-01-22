import axios from "axios";
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

// login de usuario
export const api = {
  login: async ({ Email, Password }: LoginRequest) => {
    try {
      const response = await axios.post("/auth", { Email, Password });
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  // Profiles

  // getProfiles: async () => {
  //   try {
  //     const response = await axios.get("/classroom");
  //     return response.data;
  //   } catch (err: any) {
  //     alert(err);
  //   }
  // },

  // createProfile: async (payload: CreateClassroomPayload) => {
  //   try {
  //     const response = await axios.post("/classroom", payload);
  //     return response.data;
  //   } catch (err) {
  //     alert(err);
  //   }
  // },

  // updateProfile: async (payload: UpdateClassroomPayload) => {
  //   try {
  //     const response = await axios.patch("/profile/", payload);
  //     return response.data;
  //   } catch (err) {
  //     alert(err);
  //   }
  // },

  // deleteProfile: async (payload: string) => {
  //   try {
  //     const response = await axios.delete(`/profile/${payload}`);
  //     return response.data;
  //   } catch (err) {
  //     alert(err);
  //   }
  // },
};
