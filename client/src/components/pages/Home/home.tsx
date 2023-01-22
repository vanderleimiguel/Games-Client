import { getProfiles } from "../../../mocks/profiles";
import { ProfileCard } from "../../molecules/profileCard/profileCard";
import { ProfileCardListDiv } from "./styles";
import { useEffect, useState } from "react";
import { Profile } from "../../../utils/types/profile";

export function Home() {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  async function getProfilesInfo() {
    const allProfiles = await getProfiles();
    setProfiles(allProfiles);
  }

  useEffect(() => {
    getProfilesInfo();
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
