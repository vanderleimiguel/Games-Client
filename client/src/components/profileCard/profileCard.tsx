import { api } from "../../utils/api/api";
import { Profile } from "../../utils/types/profile";
import { Buttons, ButtonsDiv, ProfileCardSection } from "./style";

interface CardProps extends Profile {
  update: () => void;
}

export function ProfileCard({ id, Title, ImageURL, update }: CardProps) {
  async function DeleteCard() {
    const isDeleted = await api.deleteProfile(id);
    console.log(isDeleted);
    if (isDeleted) {
      update();
    }
  }

  return (
    <ProfileCardSection>
      <img src={ImageURL} alt={ImageURL} />
      <h2>{Title}</h2>
      <ButtonsDiv>
        <Buttons color="blue" width="50px">
          Editar
        </Buttons>
        <Buttons color="red" width="50px" onClick={DeleteCard}>
          Deletar
        </Buttons>
      </ButtonsDiv>
    </ProfileCardSection>
  );
}
