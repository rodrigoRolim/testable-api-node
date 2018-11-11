import mongoose from 'mongoose'

mongoose.Promise = Promise
const mongodUrl = process.env.MONGODB_URL || 'mongodb://localhost/test'
const connect = () => mongoose.connect(mongodUrl, { useNewUrlParser: true })

export default {
  connect
}

