//Nopal Bagus Prabowo
//XII RPL 4 
// 18

const express = require('express')
const router = express.Router()

const siswacontroller = require('../controllers/siswas')
const siswa = require('../controllers/siswas')

router.get('/siswas',siswacontroller.index)

router.get('/siswa/:id',siswacontroller.show)

router.post('/siswa', siswacontroller.store)

router.put('/siswa/:id', siswacontroller.update)

router.delete('/siswa/:id', siswacontroller.delete)

module.exports = router