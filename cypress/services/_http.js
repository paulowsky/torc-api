export class HttpService {
  constructor({ baseUrl, path }) {
    this.baseUrl = baseUrl || Cypress.env('BASE_URL')
    this.path = path || '/'

    this.url = `${this.baseUrl}${this.path}`
  }

  get({ headers, path, qs }) {
    return cy.request({
      method: 'GET',
      url: `${this.url}${path}`,
      qs,
      headers: {
        'X-Auth-Token': Cypress.env('FOOTBALL_DATA_TOKEN'),
        ...headers
      }
    })
  }

  post({ body, headers, path }) {
    return cy.request({
      method: 'POST',
      url: `${this.url}${path}`,
      body,
      headers: {
        'X-Auth-Token': Cypress.env('FOOTBALL_DATA_TOKEN'),
        ...headers
      }
    })
  }

  patch({ body, headers, path }) {
    return cy.request({
      method: 'PATCH',
      url: `${this.url}${path}`,
      body,
      headers: {
        'X-Auth-Token': Cypress.env('FOOTBALL_DATA_TOKEN'),
        ...headers
      }
    })
  }

  put({ body, headers, path }) {
    return cy.request({
      method: 'PUT',
      url: `${this.url}${path}`,
      body,
      headers: {
        'X-Auth-Token': Cypress.env('FOOTBALL_DATA_TOKEN'),
        ...headers
      }
    })
  }

  delete({ headers, path }) {
    return cy.request({
      method: 'DELETE',
      url: `${this.url}${path}`,
      headers: {
        'X-Auth-Token': Cypress.env('FOOTBALL_DATA_TOKEN'),
        ...headers
      }
    })
  }
}
