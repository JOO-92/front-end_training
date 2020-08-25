const express = require('express')
const router = express.Router()
const Zoo = require('./zoo.js') // zoo 스키마 객체!

const fs = require('fs') // index.html 외의 웹문서 읽어오기 위한

router.post('/', (req, res) => {
    const name = req.body.name
    const habitat = req.body.habitat
    const number = Number.parseInt(req.body.number)
    res.send(`<h1>당신이 추가한 동물은 ${name}!</h1>
    <a href="/find">OK</a>`)
    const zoo = new Zoo({
        number: number,
        animal: {
            name: name, habitat : habitat
        }
    })
    // 데이터베이스에 새로운 객체 저장하기!
    zoo.save().then(success => {
        console.log(success)
    }).catch(failed => {
        console.log(failed)
    })
})

// find 에 대한 get 요청을 라우팅!
router.get('/find', (req, res) => {
    Zoo.find({}).then(success => {
        res.send(`<p>${success}</p> 
        <a href="/">OK</a><br>
        <a href="/delete">DEL</a>`)
    }).catch(failed => {
        console.log(failed)
    })
})

// delete 에 대한 get 과 post 를 라우팅!
router.get('/delete', (req, res) => {
    fs.readFile('./delete.html', (err, data) => {
        if(err){
            console.log(err)
        }
        res.end(data);
    })
})
router.post('/delete', (req, res) => {

    const number = Number.parseInt(req.body.number)
    res.send(`
    <p>지우고 싶은 동물번호는 ${number}!</p>
    <a href="/find">OK</a>
    `)

    Zoo.remove({number:number}).then(success=>{
        console.log(success)
    }).catch(failed=>{console.log(failed)})

})

router.get('/modify', (req, res) => {
    //res.render('delete.html')
    fs.readFile('./update.html', (err, data) => {
        if(err){
        console.error(err);
        }
        res.end(data);
    })
})


router.post('/modify', (req, res) => {
    res.send(`<p>UPDATE DATA!</p>
    <a href="/find">OK</a>`)
    const name = req.body.name;
    const habitat = req.body.habitat
    const number = Number.parseInt(req.body.number)
    Zoo.update({number : number}, {animal:{
        name: name,
        habitat: habitat
    }}).then(success=>{
        console.log(success)
    }).catch(err=>{
        console.log(err)
    })
})
// 다른 파일에서 이것을 사용할 수 있게 한다!
module.exports = router