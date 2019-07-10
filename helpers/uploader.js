var multer = require('multer')

const storageConfig = multer.diskStorage({
    // FILE MAU DISIMPAN DIMANA
    destination : (req,file,cb) => {
        cb(null, './uploads')
    },
    // NAMA FILE
    filename : (req,file,cb) => {
        cb(null, 'PRD-' + Date.now() + '.' + file.mimetype.split('/')[1])
    }
})

const filterConfig = (req,file,cb) => {
    if (file.mimetype.split('/')[1] === 'png' || file.mimetype.split('/')[1] === 'jpeg') {
        cb(null,true) 
    } else {
        cb(new Error('Image must be Jpeg / Png'),false)
    }
}

var upload = multer({storage : storageConfig, fileFilter : filterConfig, limits : {fileSize : 5 * 1000000}})

module.exports = upload