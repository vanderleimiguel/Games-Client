import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Login } from "./pages/login/login";
import { GlobalStyle, theme } from "./global-styles";
import { Home } from "./pages/Home/home";
import { Footer } from "./components/footer/footer";
import Header from "./components/header/header";
import { CreateProfile } from "./pages/createProfile/createProfile";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-profile" element={<CreateProfile />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
