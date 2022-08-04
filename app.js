const express = require('express')
const app = express()


app.get("/", (req, res) =>{
    console.log('chegou get')
    res.send({active: 'recebi get'})
})


app.post("/activate-signal", (req, res) =>{
    console.log('chegou post active')
    res.send({active: 'received'})
})


app.post("/deactivate-signal", (req, res) =>{
    console.log('chegou post active')
    res.send({deactivate: 'received'})
})



app.listen(3000, ()=>{
    console.log('server running on 3000 port');
})