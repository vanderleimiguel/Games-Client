import { ProfileCard } from "../profileCard/profileCard";
import { ProfileCardListDiv } from "./styles";

export function Home() {
  return (
    <ProfileCardListDiv>
      <ProfileCard
        id={"12345ffgg"}
        Title={"testetitle"}
        ImageURL={
          "https://ironstudios.vteximg.com.br/arquivos/ids/306037-650-650/174004_0.jpg?v=637954667482070000"
        }
      />
      <ProfileCard
        id={"12345ffgg"}
        Title={"testetitle"}
        ImageURL={"imageurlteste"}
      />
      <ProfileCard
        id={"12345ffgg"}
        Title={"testetitle"}
        ImageURL={"imageurlteste"}
      />
      <ProfileCard
        id={"12345ffgg"}
        Title={"testetitle"}
        ImageURL={"imageurlteste"}
      />
    </ProfileCardListDiv>
  );
}
