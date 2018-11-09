import express from 'express'
const router = express.router()

router.get('/products', (req, res) => {
  res.send([{
    name: 'Default product',
    description: 'product description',
    price: 100
  }])
})

export default router