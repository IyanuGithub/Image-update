const router = require('express').Router()

//const uploadImage = require('../controller/uploadController')
const {createProduct, getProducts} = require('../controller/productController')
const uploadImage = require('../controller/uploadController')


router.post('/upload', uploadImage)
router.route('/').get(getProducts).post(createProduct)



module.exports = router