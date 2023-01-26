import axios from "axios";
import { profileList } from "../../mocks/profileList";
import { Profile, ProfileInput } from "../types/profile";
import { LoginRequest } from "../types/requests";
import swal from "sweetalert";

axios.defaults.baseURL = "https://xbox-live-api.onrender.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

function handleError(text: string, description: string) {
  swal({
    title: text,
    text: description,
    icon: "warning",
    timer: 5000,
  });
}

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
    } catch (err: any) {
      handleError("Erro ao efetuar login", err.response.data.message[0]);
    }
  },

  // Perfis home
  getProfiles: async (userId: string): Promise<Profile[] | undefined> => {
    try {
      const profiles = await axios.get("/profile/" + userId);
      return profiles.data;
    } catch (err: any) {
      handleError(
        "Erro ao buscar todos os perfis",
        err.response.data.message[0]
      );
    }
  },

  // create profile
  createProfile: async (
    profile: ProfileInput
  ): Promise<Profile | undefined> => {
    try {
      const newProfile = await axios.post("/profile", profile);
      return newProfile.data;
    } catch (err: any) {
      handleError("Erro ao criar perfil", err.response.data.message[0]);
    }
  },

  // delete profile
  deleteProfile: async (profileId: string): Promise<boolean | undefined> => {
    try {
      console.log(profileId);
      const isDeleted = await axios.delete("/profile/" + profileId);
      console.log(isDeleted.status);
      if (isDeleted.status === 204) {
        return true;
      }
    } catch (err: any) {
      handleError("Erro ao deletar Perfil", err.response.data.message[0]);
    }
  },

  updateProfile: async (
    profileId: Profile,
    profile: ProfileInput
  ): Promise<Profile | undefined> => {
    try {
      const updatedProfile = await axios.patch(
        "/profile/" + profileId.id,
        profile
      );
      return updatedProfile.data;
    } catch (err: any) {
      handleError("Erro ao atualizar o perfil", err.response.data.message[0]);
    }
  },
};
