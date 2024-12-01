const express = require('express')
const Pessoa = require('./models/pessoa')

const router = express.Router()

router.get('/', function(req,res){
  res.render('index')
}),

router.post('/formulario', function(req,res){
  Pessoa.create({
    name: req.body.name,
  email: req.body.email,
  city: req.body.city,
  content: req.body.content,
  profession: req.body.profession
  })

  res.redirect('/home')
}),

router.get('/home', function(req,res){
  res.render('home')
 
}),

module.exports = router