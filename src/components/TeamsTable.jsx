import { Link } from "react-router-dom";
import useTeamGallery from "../hooks/useTeamGallery";
import DeleteButton from "./DeleteButton";

export default function TeamsTable() {
  const { teams } = useTeamGallery();

  return (
    <table
      className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Símbolo</th>
          <th>Nome</th>
          <th>Nacionalidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team) => (
          <tr key={team.id}>
            <td>{team.id}</td>
            <td><img src={team.img} alt={team.name} /></td>
            <td>{team.name}</td>
            <td>{team.nacionality}</td>
            <td>
              <button>
                <Link to={`/teams/${team.id}`} className="button is-primary is-small">
                  Ver
                </Link>
              </button>
              <button>
                <Link to={`/teams/${team.id}/update`} className="button is-small">
                  Atualizar
                </Link>
              </button>
              <DeleteButton className="deleteButton" teamId={team.id} teamName={team.name} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}