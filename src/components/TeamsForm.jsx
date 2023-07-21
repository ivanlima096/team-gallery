import { useRef, useState } from "react"
import TeamGallery from "../entities/TeamGallery";
import useTeamGallery from "../hooks/useTeamGallery";
import UpdateTeams from "../Pages/Teams/UpdateTeams";
import { useNavigate } from "react-router-dom";

export default function TeamsForm({ teamToUpdate }) {
  const defaultTeam = {
    name: "",
    nacionality: "",
    img: "",
    fans: 0,
    titles: {
      leagueNational: 0,
      continental: 0,
      cupNational: 0,
    },
    description: ""
  }

  const [teams, setTeams] = useState(teamToUpdate ? teamToUpdate : defaultTeam)
  const { addTeam, updateTeam } = useTeamGallery()
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const handleChange = (ev => {
    const { name, value, type } = ev.target;

    if (name === "leagueNational" || name === "continental" || name === "cupNational") {
      setTeams((currentState) => ({
        ...currentState,
        titles: {
          ...currentState.titles,
          [name]: type === "number" ? parseFloat(value) : value,
        },
      }));
    }
    setTeams(currentState => {
      return {
        ...currentState,
        [ev.target.name]: ev.target.value
      }
    })
  })

  const handleSubmit = (ev) => {
    ev.preventDefault()

    try {
      if (teamToUpdate) {
        updateTeam(teamToUpdate.id, teams)
        alert("Time atualizado com sucesso!")
        navigate(`/teams/${teamToUpdate.id}`)
      } else {
        const teamGallery = new TeamGallery(teams)
        addTeam(teamGallery)
        alert("Time cadastrado com sucesso!")
        inputRef.current.focus()
        setTeams(defaultTeam)
        navigate(`/teams`)
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              ref={inputRef}
              value={teams.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nacionality">Nacionalidade</label>
            <input
              type="text"
              name="nacionality"
              id="nacionality"
              required
              value={teams.nacionality}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="img">Link do Escudo:</label>
            <input
              type="url"
              name="img"
              id="img"
              required
              value={teams.img}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="fans">Torcedores (em milhões):</label>
            <input
              type="number"
              name="fans"
              id="fans"
              required
              min={0.00}
              step={1}
              value={teams.fans}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="leagueNational">Ligas Nacionais:</label>
            <input
              type="number"
              name="leagueNational"
              id="leagueNational"
              required
              min={0.00}
              step={1.0}
              value={teams.leagueNational}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="continental">Taças Continentais: </label>
            <input
              type="number"
              name="continental"
              id="continental"
              required
              min={0.00}
              step={1.0}
              value={teams.continental}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="cupNational">Copas Nacionais: </label>
            <input
              type="number"
              name="cupNational"
              id="cupNational"
              required
              min={0.00}
              step={1.0}
              value={teams.cupNational}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="description">Descrição</label>
          <textarea
            name="description"
            id="description"
            required
            rows={6}
            maxLength={75}
            value={teams.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button>
          Salvar
        </button>
      </form>
    </main>
  )
}