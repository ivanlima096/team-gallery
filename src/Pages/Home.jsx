import useTeamGallery from "../hooks/useTeamGallery";

export default function Home() {
  const { teams } = useTeamGallery();

  const teamsQuantity = teams.length;

  const teamWithMostLeagueTitles = teams.reduce((mostTitlesTeam, currentTeam) =>
    currentTeam.leagueNational > mostTitlesTeam.leagueNational ? currentTeam : mostTitlesTeam
  );

  const teamWithMostCupTitles = teams.reduce((mostTitlesTeam, currentTeam) =>
    currentTeam.cupNational > mostTitlesTeam.cupNational ? currentTeam : mostTitlesTeam
  );

  const teamWithMostContinentals = teams.reduce((mostTitlesTeam, currentTeam) =>
    currentTeam.continental > mostTitlesTeam.continental ? currentTeam : mostTitlesTeam
  );

  const teamWithMostFans = teams.reduce((mostFans, currentTeam) =>
    currentTeam.fans > mostFans.fans ? currentTeam : mostFans
  );

  // Objeto para rastrear a soma dos títulos nacionais por nacionalidade
  const nationalityTitleSums = {};
  // Objeto para rastrear o time com mais títulos nacionais por nacionalidade
  const mostLeagueTitlesByNationality = {};

  teams.forEach((team) => {
    const nationality = team.nacionality;
    const leagueNational = team.leagueNational;

    if (!nationalityTitleSums[nationality]) {
      nationalityTitleSums[nationality] = leagueNational;
      // Defina o time atual como o time com mais títulos para esta nacionalidade
      mostLeagueTitlesByNationality[nationality] = team;
    } else {
      nationalityTitleSums[nationality] += leagueNational;
      // Verifique se o time atual tem mais títulos do que o time com mais títulos nesta nacionalidade
      if (leagueNational > mostLeagueTitlesByNationality[nationality].leagueNational) {
        mostLeagueTitlesByNationality[nationality] = team;
      }
    }
  });

  return (
    <main className="home">
      <h1>Galeria de Times</h1>
      <h4>Estatísticas</h4>
      <div className="homeFlex">
        <div className="homeCard">
          <span>Quantidade de Times Cadastrados</span>
          <h2>{teamsQuantity}</h2>
        </div>
        <div className="homeCard">
          <span>Time com mais ligas Nacionais</span>
          <h2>{teamWithMostLeagueTitles.name}: {teamWithMostLeagueTitles.leagueNational}</h2>
        </div>
        <div className="homeCard">
          <span>Time com mais continentais</span>
          <h2>{teamWithMostContinentals.name}: {teamWithMostContinentals.continental}</h2>
        </div>
        <div className="homeCard">

          <span>Time com mais copas Nacionais</span>
          <h2>{teamWithMostCupTitles.name}: {teamWithMostCupTitles.cupNational}</h2>
        </div>
        <div className="homeCard">
          <span>Time com maior torcida</span>
          <h2>{teamWithMostFans.name}: {teamWithMostFans.fans} milhões</h2>
        </div>
        <div className="homeCard">
          <span>Times com mais títulos nacionais por nacionalidade:</span>
          {Object.entries(mostLeagueTitlesByNationality).map(([nationality, team]) => (
            <p key={nationality}>{nationality} - {team.name}: {team.leagueNational}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
