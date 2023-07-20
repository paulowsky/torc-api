const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

const { TARGET, FOOTBALL_DATA_TOKEN, env } = require('./cypress/config')

console.log('Environment configuration:')
console.table({ TARGET, ...env })

const data = {}

module.exports = defineConfig({
  e2e: {
    baseUrl: env.BASE_URL,
    defaultCommandTimeout: 7000,
    viewportWidth: 1000,
    viewportHeight: 600,
    downloadsFolder: 'cypress/downloads',
    trashAssetsBeforeRuns: true,
    video: true,
    env: {
      TARGET,
      FOOTBALL_DATA_TOKEN,
      ...env,
      allure: true,
      allureReuseAfterSpec: true
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config)

      on('task', {
        setValue({ key, value }) {
          data[key] = value
          return null
        },
        getValue(key) {
          return data[key] || null
        }
      })

      return config
    }
  }
})
