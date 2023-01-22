import { Profile } from "../../../utils/types/profile";
import { ProfileCardSection } from "./style";

export function ProfileCard({ id, Title, ImageURL }: Profile) {
  return (
    <ProfileCardSection>
      <img src={ImageURL} alt={ImageURL} />
      <h2>{Title}</h2>
    </ProfileCardSection>
  );
}
