const express = require('express')
const path = require('node:path')
const router = require('./routes')
const bodyParsert = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({ extended: true}))

app.use(bodyParsert.urlencoded({extended: false}))
app.use(bodyParsert.json())



app.use(router)
const PORT = 3000

app.listen(PORT, () => console.log(`Server running on http://localhost${PORT}`))