import { useParams } from "react-router-dom";
import TeamsForm from "../../components/TeamsForm";
import useTeamGallery from "../../hooks/useTeamGallery"
import TeamGallery from "../../entities/TeamGallery";

export default function UpdateTeams() {
  const { getTeam } = useTeamGallery()
  const { id } = useParams()

  const team = getTeam(id)
  console.log(team);
  return (
    <>
      <h1>Atualizar Time</h1>
      <TeamsForm teamToUpdate={team} />
    </>
  )
}