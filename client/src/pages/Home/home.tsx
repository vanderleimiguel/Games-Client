import { ProfileCard } from "../../components/profileCard/profileCard";
import { ProfileCardListDiv } from "./styles";
import { useEffect, useState } from "react";
import { Profile } from "../../utils/types/profile";
import { api } from "../../utils/api/api";

export function Home() {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const idAtual = "2cc3678c-470c-4ad0-ae26-42c7687e0757";

  async function getProfilesInfo(idAtual: string) {
    const allProfiles = await api.getProfiles(idAtual);
    setProfiles(allProfiles ?? []);
  }

  useEffect(() => {
    getProfilesInfo(idAtual);
  }, []);

  return (
    <ProfileCardListDiv>
      {profiles.map((Profile) => (
        <ProfileCard
          id={Profile.id}
          Title={Profile.Title}
          ImageURL={Profile.ImageURL}
        />
      ))}
    </ProfileCardListDiv>
  );
}
