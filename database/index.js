var mysql = require('mysql')

const conn = mysql.createConnection({ //untuk koneksi ke mysql
    user : 'rezha' ,
    password : 'raffiandhika',
    host : 'localhost',
    database : 'upload_image',
    port : 3306
})

module.exports = conn