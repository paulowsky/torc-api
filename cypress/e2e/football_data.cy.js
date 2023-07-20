import data from '../config/data'

import FootballService from '../services/football'

describe('Football Data', { tags: ['@football_data'] }, () => {
  it('Should list competitions', { tags: ['@list_competitions'] }, () => {
    FootballService.getCompetitions({ qs: data.football.qs }).then(response => {
      cy.wrap(response.status).should('equal', 200)
      cy.wrap(response.body.competitions).should('not.be.empty')
      cy.wrap(response.body.count).should('equal', 13)
      cy.wrap(response.body.competitions.length).should('equal', 13)
      cy.wrap(response.body.competitions[0].id).should('equal', 2013)
      cy.wrap(response.body.competitions[0].code).should('equal', 'BSA')
    })
  })

  it(
    'Should list matches from competition',
    { tags: ['@list_competition_matches'] },
    () => {
      FootballService.getMatchesFromCompetition({
        competitionId: data.football.competitionId,
        qs: data.football.qs
      }).then(response => {
        cy.wrap(response.status).should('equal', 200)
        cy.wrap(response.body.competition.code).should(
          'equal',
          data.football.competitionId
        )
        cy.wrap(response.body.filters.season).should('equal', '2023')
        cy.wrap(response.body.matches).should('not.be.empty')
        cy.wrap(response.body.resultSet.count).should('equal', 15)
        cy.wrap(response.body.matches.length).should('equal', 15)
        cy.wrap(response.body.matches[0].id).should('equal', 432364)
      })
    }
  )

  it(
    'Should list teams from competition',
    { tags: ['@list_competition_teams'] },
    () => {
      FootballService.getTeamsFromCompetition({
        competitionId: data.football.competitionId,
        qs: data.football.qs
      }).then(response => {
        cy.wrap(response.status).should('equal', 200)
        cy.wrap(response.body.competition.code).should(
          'equal',
          data.football.competitionId
        )
        cy.wrap(response.body.filters.season).should('equal', '2023')
        cy.wrap(response.body.teams).should('not.be.empty')
        cy.wrap(response.body.count).should('equal', 20)
        cy.wrap(response.body.teams.length).should('equal', 20)
        cy.wrap(response.body.teams[0].id).should('equal', 1765)
      })
    }
  )
})
