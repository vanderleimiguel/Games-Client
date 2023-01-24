import { ProfileCard } from "../../components/profileCard/profileCard";
import { ProfileCardListDiv } from "./styles";
import { useEffect, useState } from "react";
import { Profile } from "../../utils/types/profile";
import { api } from "../../utils/api/api";
import { useParams } from "react-router-dom";

export function Home() {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const { id } = useParams();

  async function getProfilesInfo(idAtual: string) {
    const allProfiles = await api.getProfiles(idAtual);
    setProfiles(allProfiles ?? []);
  }

  useEffect(() => {
    getProfilesInfo(id ?? "");
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
