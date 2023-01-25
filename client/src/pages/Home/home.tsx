import { ProfileCard } from "../../components/profileCard/profileCard";
import { ProfileCardListDiv } from "./styles";
import { useEffect, useState } from "react";
import { Profile } from "../../utils/types/profile";
import { api } from "../../utils/api/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [control, setControl] = useState<boolean>(false);

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/");
  }

  function updatePage() {
    setControl(!control);
  }

  const { id } = useParams();

  async function getProfilesInfo(idAtual: string) {
    const allProfiles = await api.getProfiles(idAtual);
    setProfiles(allProfiles ?? []);
  }

  useEffect(() => {
    getProfilesInfo(id ?? "");
  }, [control]);

  return (
    <ProfileCardListDiv>
      {profiles.map((Profile) => (
        <ProfileCard
          id={Profile.id}
          Title={Profile.Title}
          ImageURL={Profile.ImageURL}
          update={updatePage}
        />
      ))}
    </ProfileCardListDiv>
  );
}
