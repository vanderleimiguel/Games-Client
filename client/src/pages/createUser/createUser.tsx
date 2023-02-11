import { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContentDiv } from "./styles";
import { api } from "../../utils/api/api";
import { UserInput } from "../../utils/types/requests";
import swal from "sweetalert";

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
      userResponse = await api.updateUser(userToUpdate, newUser);
    } else {
      userResponse = await api.createUser(newUser);
    }

    const idProfile = localStorage.getItem("id");
    if (userResponse) {
      navigate("/");
    }
  }

  async function DeleteUser() {
    swal({
      title: "Deletar Seu Usuario?",
      text: "Tem certeza que deseja deletar seu usuario?",
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: {
          text: "Cancelar",
          value: null,
          visible: true,
          closeModal: true,
          className: "",
        },
        confirm: {
          text: "Confirmar",
          value: true,
          visible: true,
          closeModal: true,
        },
      },
    }).then(async (res) => {
      if (res) {
        const isDeletedUser = await api.deleteUser(id ?? "");
        if (isDeletedUser) {
          navigate("/");
        }
      }
    });
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
        {localStorage.getItem("token") ? (
          <button onClick={DeleteUser}>Deletar</button>
        ) : null}
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
