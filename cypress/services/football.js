import { HttpService } from './_http'

export class FootballService extends HttpService {
  constructor() {
    super({ path: '/' })
  }

  getCompetitions({ qs }) {
    return this.get({ path: '/v4/competitions', qs })
  }

  getMatchesFromCompetition({ competitionId, qs }) {
    return this.get({
      path: `/v4/competitions/${competitionId}/matches`,
      qs
    })
  }

  getTeamsFromCompetition({ competitionId, qs }) {
    return this.get({
      path: `/v4/competitions/${competitionId}/teams`,
      qs
    })
  }
}

export default new FootballService()
