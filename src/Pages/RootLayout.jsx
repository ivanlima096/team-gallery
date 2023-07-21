import { FaFutbol, FaLinkedinIn, FaGithub, FaFileDownload } from "react-icons/fa"
import { Link, Outlet } from "react-router-dom"

export default function RootLayout() {

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/"><FaFutbol className="footballLogo" /></Link>
          <Link to="/">Galeria de Times</Link>
        </div>
        <nav>
          <Link className="link" to="/">Início</Link>
          <Link className="link" to="/teams">Times</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        Feito por Ivan Lima com React
        <div className="links">
          <Link to="https://www.linkedin.com/in/ivan-lima-dev/" target="_blank">< FaLinkedinIn /></Link >
          <Link to="https://github.com/ivanlima096" target="_blank">< FaGithub /></Link >
          <Link to="https://drive.google.com/file/d/1wEXAyjiYbv0yeUiVuH0xJaLoO9mue3GC/view?usp=drive_link" target="_blank">< FaFileDownload /></Link >
        </div>
      </footer>
    </>
  )
}