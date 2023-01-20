import { FormInput } from "../../atoms/input";
import { StyledForm, StyledLoginForm } from "./styles";

export function LoginForm() {
  return (
    <StyledLoginForm>
      <h2>Login</h2>
      <StyledForm onSubmit={handleSubmit} error={error}>
        <input />
        <input />
        <button>Login</button>
      </StyledForm>
    </StyledLoginForm>
  );
}
