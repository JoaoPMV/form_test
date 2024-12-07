const express = require('express')
const UsuarioController = require('./src/controllers/UsuarioController')

const router = express.Router()

router.get('/', UsuarioController.login)


module.exports = router