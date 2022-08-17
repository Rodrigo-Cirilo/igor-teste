const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get("/activate-signal", (req, res) =>{
    console.log('chegou get activate')
    res.send({active: 'get activate'})
})

app.get("/deactivate-signal", (req, res) =>{
    console.log('chegou get deactivate')
    res.send({deactivate: 'get deactivate'})
})


app.post("/activate", (req, res) =>{
    console.log('chegou post active')
    res.send({active: 'received'})
})


app.post("/deactivate", (req, res) =>{
    console.log('chegou post active')
    res.send({deactivate: 'received'})
})



app.listen(PORT, ()=>{
    console.log('server running on 3000 port');
})