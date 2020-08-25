const express = require('express')
const app = express()
const db = require('./db.js')
const route = require('./route.js')
const bodyParser = require('body-parser')

db(); // 데이터베이스와 연결하기!

app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/', route)

app.listen(4003, () => {
    console.log("Now 4003 port listening!")
})