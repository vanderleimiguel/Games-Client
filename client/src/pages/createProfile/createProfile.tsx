import { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileInput } from "../../utils/types/profile";
import { ContentDiv } from "./styles";
import { api } from "../../utils/api/api";

export function CreateProfile() {
  const navigate = useNavigate();
  const { id } = useParams();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newProfile: ProfileInput = {
      Title: e.currentTarget.profileTitle.value,
      ImageURL: e.currentTarget.profileImageUrl.value,
    };

    let profileResponse;
    if (id) {
      const profileToUpdate = { ...newProfile, id: id };
      profileResponse = await api.updateProfile(profileToUpdate, newProfile);
    } else {
      profileResponse = await api.createProfile(newProfile);
    }

    const idProfile = localStorage.getItem("id");
    if (profileResponse) {
      navigate("/home/" + idProfile);
    }
  }

  return (
    <ContentDiv>
      <h2>{id ? "Atualizar Perfil" : "Cadastro de Perfil"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome do Perfil</label>
        <input type="text" name="profileTitle" required></input>
        <label>Imagem do Perfil</label>
        <input type="text" name="profileImageUrl" required></input>
        <button type="submit">{id ? "Atualizar" : "Cadastrar"}</button>
      </form>
    </ContentDiv>
  );
}
