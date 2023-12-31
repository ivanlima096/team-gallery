import { createContext, useState } from "react";

export const TeamsContext = createContext({})

export function TeamsContextProvider({ children }) {
  const [teams, setTeams] = useState(() => {
    const storedTeams = localStorage.getItem('ilo-teams')
    if (!storedTeams) return []
    const teams = JSON.parse(storedTeams)
    return teams
  })

  const addTeam = (team) => {
    setTeams(currentState => {
      const updatedTeams = [team, ...currentState]
      localStorage.setItem('ilo-teams', JSON.stringify(updatedTeams))
      return updatedTeams
    })
  }

  const deleteTeam = (teamId) => {
    setTeams(currentState => {
      const updatedTeams = currentState.filter(team => team.id !== teamId)
      localStorage.setItem('ilo-teams', JSON.stringify(updatedTeams))
      return updatedTeams
    })
  }

  const getTeam = (teamId) => {
    return teams.find(team => team.id === +teamId)
  }

  const updateTeam = (teamId, newAttributes) => {
    setTeams(currentState => {
      const teamIndex = currentState.findIndex(team => team.id === +teamId)
      const updatedTeams = [...currentState]
      Object.assign(updatedTeams[teamIndex], newAttributes)
      localStorage.setItem('ilo-teams', JSON.stringify(updatedTeams))
      return updatedTeams
    })
  }

  const teamGallery = {
    teams,
    addTeam,
    deleteTeam,
    getTeam,
    updateTeam
  }

  return (
    <TeamsContext.Provider value={teamGallery}>
      {children}
    </TeamsContext.Provider>
  )
}