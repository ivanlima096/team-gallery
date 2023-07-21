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

  const teamGallery = {
    teams,
    addTeam
  }

  return (
    <TeamsContext.Provider value={teamGallery}>
      {children}
    </TeamsContext.Provider>
  )
}