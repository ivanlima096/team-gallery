import { useParams } from "react-router-dom";
import TeamsForm from "../../components/TeamsForm";
import useTeamGallery from "../../hooks/useTeamGallery"

export default function UpdateTeams() {
  const { getTeam } = useTeamGallery()
  const { id } = useParams()

  const team = getTeam(id)
  return (
    <>
      <h1>Atualizar Time</h1>
      <TeamsForm teamToUpdate={team} />
    </>
  )
}