import { Link } from "react-router-dom";
import useTeamGallery from "../hooks/useTeamGallery";
import DeleteButton from "./DeleteButton";

export default function TeamsTable() {
  const { teams } = useTeamGallery();

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Em Estoque</th>
          <th>Categoria</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team) => (
          <tr key={team.id}>
            <td>{team.id}</td>
            <td>{team.name}</td>
            <td>{team.quantity} unid.</td>
            <td>{team.category}</td>
            <td>
              <Link to={`/teams/${team.id}`} className="button is-primary is-small">
                Ver
              </Link>
              <Link to={`/teams/${team.id}/update`} className="button is-small">
                Atualizar
              </Link>
              <DeleteButton teamId={team.id} teamName={team.name} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}