var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()
var multer = require('multer')
var mysql = require('mysql')
var fs = require('fs')
var port = 4000
const { productRouter } = require('./router')

// untuk membuat folder upload bisa diakses public
app.use('/uploads',express.static('uploads'))

// untuk menerima data dari FE
app.use(bodyParser.json())

//cross origin
app.use(cors())

app.get('/', (req,res) => {
    res.send('<h1> Selamat Datang di API upload Image </h1>')
})

app.use('/product' , productRouter)



// app.post('/images', upload.array('photoarray', 3), (req,res) => {
//     console.log(req.files)
//     res.send('Sukses')
// })

app.listen(port , () => console.log('Berjalan di port ' + port))