const mongoose = require('mongoose')

const SiswaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
    },
    nis: {
        type: String,
        required: [true, 'Silahkan isikan nis'],
        unique: true
    },
    kelas: {
        type: String,
        required: [true, 'Silahkan isikan kelas'],
    },
    gender: {
        type: String,
        required:  [true, 'Silahkan isikan gender'],
    },
    alamat: {
        type: String,
        required: [true, 'Silahkan isikan alamat'],
        unique: true
    }
   
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     match: [/^\w+\-]?\w+@\w+(\-]?\w+)*(\ \w{2,3})+$/, 'Silahkan isikan email valid!']
    // }
})


module.exports = mongoose.model('Siswa', SiswaSchema)