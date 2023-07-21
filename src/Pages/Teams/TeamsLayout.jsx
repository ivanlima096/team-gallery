import { Outlet, Link, useLocation } from "react-router-dom"
import { FaList, FaPlusCircle } from "react-icons/fa"

export default function TeamsLayout() {
  const { pathname } = useLocation()
  return (
    <>
      <h1 className="listTeam">Lista de Times</h1>
      <div className="teamOptions">
        <Link to="/teams" className={` teamOption ${pathname === "/teams" ? "active" : ""}`}><FaList className="icon" />Ver Times</Link>
        <Link to="/teams/new" className={`  teamOption  ${pathname === "/teams/new" ? "active" : ""}`}><FaPlusCircle className="icon" /> Novo Time</Link>
      </div>
      <Outlet />
    </>
  )
}