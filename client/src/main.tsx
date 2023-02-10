import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Login } from "./pages/login/login";
import { Content, GlobalStyle, theme } from "./styles/global-styles";
import { Home } from "./pages/Home/home";
import { Footer } from "./components/footer/footer";
import Header from "./components/header/header";
import { CreateProfile } from "./pages/createProfile/createProfile";
import { CreateUser } from "./pages/createLogin/createLogin";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home/:id" element={<Home />} />
            <Route path="/create-profile" element={<CreateProfile />} />
            <Route path="/update/:id" element={<CreateProfile />} />
            <Route path="/create-user" element={<CreateUser />} />
          </Routes>
        </Content>
      </BrowserRouter>
      {/* <Footer /> */}
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
