require('dotenv/config')

const TARGET = process.env.TARGET || 'dev'
const FOOTBALL_DATA_TOKEN =
  process.env.FOOTBALL_DATA_TOKEN || 'missing token in env'

module.exports = {
  TARGET,
  FOOTBALL_DATA_TOKEN,
  env: require(`./env/${TARGET}.json`)
}
