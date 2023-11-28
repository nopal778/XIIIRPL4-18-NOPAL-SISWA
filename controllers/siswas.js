//Nopal Bagus Prabowo
//XII RPL 4
// 18

const Siswa = require('../models/Siswa')

module.exports ={
    //get all siswa
    index: async(req, res) => {
        try{
            const siswas = await Siswa.find()
            if(siswas.length > 0){
                res.status(200).json({
                    status: true,
                    data: siswas,
                    method: req.method,
                    url: req.url
                })
            }else{
                res.json({
                    status: false,
                    message: "Data ini masih kosong"
                })
            }
        } catch (error){
            res.status(400).json({sucess: false})
        }
    
    },
    
    //get a siswa
    show: async(req, res) => {
        try{
            const siswa = await Siswa.findById(req.params.id)
            res.json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message:"data sudah berhasil didapat"
            })
        } catch (error){
            res.status(400).json({sucess: false})
        }
        
    },
    store: async(req, res) => {
        try {
            const siswa = await Siswa.create(req.body)
            res.status(200).json({
                status: true,
                data:siswa,
                method: req.method,
                url:req.url,
                message: "data sudah berhasil ditambahkan"
            })
        } catch (error){
            res.status(400).json({sucess: false, message: error.message })
            

        }
        // siswas.push(req.body)
       
    },
    update: async(req, res) => {
        try{
            const siswa = await Siswa.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message:"data sudah berhasil diubah"
            })
        } catch (error){
            res.status(400).json({sucess: false})
        }
        

    },
    delete: async(req, res) => {
        try{
            await Siswa.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data sudah berhasil dihapus"
            })
        } catch(error) {
            res.status(400).json({sucess: false})
        }
        
    }
        
}