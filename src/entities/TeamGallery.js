export default class TeamGallery {
  constructor({ name, nacionality, img, fans, leagueNational, continental, cupNational, description }) {
    this.id = Math.floor(Math.random() * 1000000)
    this.name = name
    this.nacionality = nacionality
    this.img = img
    this.fans = +fans
    this.leagueNational = +leagueNational
    this.continental = +continental
    this.cupNational = +cupNational
    this.description = description
  }
}
