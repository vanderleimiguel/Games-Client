import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HeaderButtons,
  HeaderComponent,
  HeaderLogo,
  HeaderSearch,
} from "./styles";

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderComponent>
      <HeaderLogo>
        <Link to="/home">
          <h1>Xbox Live</h1>
          <img
            src="./public/control.png"
            alt="logo"
            height="30px"
            width="30px"
          />
        </Link>
      </HeaderLogo>
      <HeaderSearch>
        <input type="text" placeholder="Procure seu perfil" />
      </HeaderSearch>
      <HeaderButtons>
        <div>
          <button
            onClick={() => {
              navigate("/create-profile");
            }}
          >
            Cadastrar Perfil
          </button>
          <button>Jogos</button>
          <button>Sair</button>
        </div>
      </HeaderButtons>
    </HeaderComponent>
  );
}
