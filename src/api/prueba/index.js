const express = require('express')
const router = express.Router()
const {prueba,getModel} = require('./model')

router.get('/makeTest', async (req,res,next) => {
    try {
        const newP = prueba.build({
            nombre:'Luis',
            ape:'Caballero',
            ciudad:'Santiago'
        })
        await newP.save()
        res.end('Creado')
    } catch (error) {
        if(error){
            res.status(400).json({
                msg: error.stack
            })
        }
    }
})

router.get('/models', (req,res,next) => {
    console.log(getModel());
    res.end('nada')
})
router.get('/', async (req, res, next) => {
    try {
        let query = {
            where: {}
        }
        if(req.query){
            if(req.query.id && req.query.nombre){
                query.where.id = req.query.id
                query.where.nombre = req.query.nombre
            }
        }else{
            query = {}
        }
        const registros = await prueba.findAll(query)
        res.status(200).json({
            registros
        })
    } catch (error) {
        if(error){
            res.status(400).json({
                msg: error.stack
            })
        }
    }
})

module.exports = router