import { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContentDiv } from "./styles";
import { api } from "../../utils/api/api";
import { UserInput } from "../../utils/types/requests";

export function CreateUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isAdmin = false;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newUser: UserInput = {
      Name: e.currentTarget.userName.value,
      Email: e.currentTarget.userEmail.value,
      Password: e.currentTarget.userPassword.value,
      CPF: e.currentTarget.userCPF.value,
    };

    let userResponse;
    if (id) {
      const userToUpdate = { ...newUser, id: id, isAdmin: isAdmin };
      console.log(userToUpdate);
      userResponse = await api.updateUser(userToUpdate, newUser);
    } else {
      userResponse = await api.createUser(newUser);
    }

    const idProfile = localStorage.getItem("id");
    if (userResponse) {
      navigate("/");
    }
  }

  return (
    <ContentDiv>
      <h2>{id ? "Atualizar Login" : "Cadastro de Usuario"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome do Usuario</label>
        <input type="text" name="userName" required></input>
        <label>Email do usuario</label>
        <input type="text" name="userEmail" required></input>
        <label>Password</label>
        <input type="text" name="userPassword" required></input>
        <label>CPF</label>
        <input type="text" name="userCPF" required></input>
        <button type="submit">{id ? "Atualizar" : "Cadastrar"}</button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Sair
        </button>
      </form>
    </ContentDiv>
  );
}
