import { useNavigate } from "react-router-dom";

export function CreateProfile() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Go to home
      </button>
    </div>
  );
}
