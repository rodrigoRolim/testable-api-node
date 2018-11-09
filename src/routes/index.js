import express from 'express'
import producstRoute from './products'
const router = express.router()

router.use('/products', producstRoute)
router.get('/', (req, res) => {
  res.send('Hello world')
})

export default router