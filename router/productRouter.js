const express = require('express')
const router = express.Router()
const { productControler } = require('./../controler/')
const { addProduct,getAllData } = productControler
const upload = require('./../helpers/uploader')

router.post('/addProduct' , upload.single('avatar') , addProduct)
router.get('getAllProduct' , getAllData )

module.exports = router