const Product = require('../model/product')

exports.getProducts = async(req, res) => {
    const allProducts = await Product.find({})
    res.send(allProducts)
}

exports.addProduct = (req, res) => {
    const product = new Product(req.body)
    product.save().then(() => {
      res.send('Added Successfully to DB')
    }).catch((e) => {
      res.status(404).send(e)
    })
}

exports.delProduct = ('/:id', (req, res) => {
  let delID = req.params.id
  Product.findOneAndDelete({_id: delID})
  res.send("DELETE Request Called")
})