class ProductsController {
  
  constructor(Product) {
    this.Product = Product
  }
  get(req, res) {
    // return res.send([{
    //   name: 'Default product',
    //   description: 'product description',
    //   price: 100
    // }])
    return this.Product.find({})
        .then(products => res.send(products))
        .catch(err => res.status(400).send(err.message))
  }
}

export default ProductsController