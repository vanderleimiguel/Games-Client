import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderButtons,
  HeaderComponent,
  HeaderLogo,
  HeaderSearch,
} from "./styles";

export default function Header() {
  return (
    <HeaderComponent>
      <HeaderLogo>
        <Link to="/">
          <h1>Xbox Live</h1>
          <img src="" alt="logo" />
        </Link>
      </HeaderLogo>
      <HeaderSearch>
        <input type="text" placeholder="Procure seu perfil" />
      </HeaderSearch>
      <HeaderButtons>
        <div>
          <button>Jogos</button>
          <button>Sair</button>
        </div>
      </HeaderButtons>
    </HeaderComponent>
  );
}
