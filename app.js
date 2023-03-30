const cors=require("cors")
const express = require('express')
require('./db')
const { getProducts, getOne, addProduct, delProduct } = require('./controller/product')

const app = express()
const port = 5000 || process.env.PORT
const api = 'api/v2'

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

app.use(express.json())
app.use(cors(corsOptions))

app.get(`/${api}/products`, getProducts)
app.get(`/${api}/product/:id`, getOne)
app.post(`/${api}/add`, addProduct)
app.delete(`/${api}/del/:id`, delProduct)

app.listen(port, () => {
    console.log(`Ecom app listening on port http://localhost:${port}`)
})

