import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { profileList } from "../../mocks/profileList";
import { ProfileInput } from "../../utils/types/profile";
import { ContentDiv } from "./styles";
import { api } from "../../utils/api/api";

export function CreateProfile() {
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newProfile: ProfileInput = {
      Title: e.currentTarget.profileTitle.value,
      ImageURL: e.currentTarget.profileImageUrl.value,
    };

    await api.createProfile(newProfile);
    navigate("/home");
  }

  return (
    <ContentDiv>
      <h2>Cadastro de Perfil</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome do Perfil</label>
        <input type="text" name="profileTitle" required></input>
        <label>Imagem do Perfil</label>
        <input type="text" name="profileImageUrl" required></input>
        <button type="submit">Cadastrar</button>
      </form>
    </ContentDiv>
  );
}
