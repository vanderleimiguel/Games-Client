import { FormEvent } from "react";
import { FormInput } from "../../atoms/input";
import { StyledForm, StyledLoginForm } from "./styles";

const error = false;

export function LoginForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const loginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    console.log(loginPayload);
  }

  return (
    <StyledLoginForm>
      <h2>Login</h2>
      <StyledForm onSubmit={handleSubmit} error={error}>
        <input placeholder="Seu email" name="email" />
        <input placeholder="Sua senha" name="password" />
        <button type="submit">Login</button>
      </StyledForm>
    </StyledLoginForm>
  );
}
