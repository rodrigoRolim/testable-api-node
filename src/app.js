import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import database from '../config/database'

const app = express()

const configExpress = () => {
  app.use(bodyParser.json())
  app.use('/', routes)

  return app
}
export default () => database.connect().then(configExpress)