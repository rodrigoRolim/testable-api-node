describe('Routes: Products', () => {
  const defaultProduct = {
    name: 'Default product',
    description: 'product description',
    price: 100
  }
  describe('GET /products', () => {
    let request
    before(() => {
      return setupApp()
               .then(app => {
                 request = supertest(app)
               })
    })
    it('should return list of products', done => {
      request
        .get('/products')
        .end((err, res) => {
          expect(res.body[0]).to.eql(defaultProduct)
          done(err);
        })
    })
  })
})
