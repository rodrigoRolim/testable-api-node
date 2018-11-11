class ProductsController {
  
  constructor(Product) {
    this.Product = Product
  }
  get(req, res) {
    return this.Product.find({})
        .then(products => res.send(products))
        .catch(err => res.status(400).send(err.message))
  }
  getById(req, res) {
    const { params: { id } } = req
    return this.Product.find({ _id: id })
      .then(products => res.send(products))
      .catch(err => res.status(400).send(err.message))
  }
  create(req, res) {
    res.send(req.body)
    return Promise.resolve()
  }
}

export default ProductsController