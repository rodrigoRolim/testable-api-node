import mongoose from 'mongoose'

mongoose.Promise = Promise
const mongodUrl = process.env.MONGODB_URL || 'mongod://localhost/test'
const connect = () => mongoose.connect(mongodUrl)

export default {
  connect
}

