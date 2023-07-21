import { Outlet, Link, useLocation } from "react-router-dom"
import { FaList, FaPlusCircle } from "react-icons/fa"

export default function TitlesLayout() {
  const { pathname } = useLocation()
  return (
    <>
      <h1 className="listTitle">Lista de Times</h1>
      <div className="titleOptions">
        <Link to="/titles" className={` titleOption ${pathname === "/titles" ? "active" : ""}`}><FaList className="icon" />Ver Times</Link>
        <Link to="/titles/new" className={`  titleOption  ${pathname === "/titles/new" ? "active" : ""}`}><FaPlusCircle className="icon" /> Novo Time</Link>
      </div>
      <Outlet />
    </>
  )
}