import { useNavigate } from "react-router-dom"
import useTeamGallery from "../hooks/useTeamGallery"

export default function DeleteButton({ teamName, teamId }) {
  const { deleteTeam } = useTeamGallery()
  const navigate = useNavigate()

  const handleDelete = () => {
    if (confirm(`Deseja excluir o clube ${teamName}`)) {
      deleteTeam(teamId)
      navigate("/teams")
    }
  }

  return (
    <button className="deleteButton" onClick={handleDelete}>
      Excluir
    </button>
  )
}