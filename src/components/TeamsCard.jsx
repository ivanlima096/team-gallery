import { Link, useParams } from "react-router-dom"
import useTeamGallery from "../hooks/useTeamGallery"
import DeleteButton from "./DeleteButton"

// name, nacionality, img, fans, leagueNational, continental, cupNational

export default function TeamsCard() {
  const { getTeam } = useTeamGallery()
  const { id } = useParams()

  const team = getTeam(id)
  return (
    <>
      <div key={team.id} className="teamCard">
        <img src={team.img} alt="{team.name}" />
        <h2>{team.name}</h2>
        <div className="nationality-fans">
          <div className="nationality">
            <span>Nacionalidade</span>
            <h3>{team.nacionality}</h3>
          </div>
          <div className="fans">
            <span>Torcedores (milhões)</span>
            <h3>{team.fans}</h3>
          </div>
        </div>
        <div className="titles">
          <div className="title">
            <span>Ligas</span><h3>{team.leagueNational}</h3>
          </div>
          <div className="title">
            <span>Continentais</span><h3>{team.continental} </h3>
          </div>
          <div className="title">
            <span>Copas </span><h3>{team.cupNational}</h3>
          </div>
        </div>
        <p className="description">{team.description}</p>
        <div className="buttons">
          <Link to={`/teams/${team.id}/update`}><button>Atualizar</button></Link>
          <DeleteButton teamName={team.name} teamId={team.id} />
        </div>
      </div>
    </>
  )
}