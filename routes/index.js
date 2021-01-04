const express = require('express');
const expressrouter =express.Router();

expressrouter.get('/',(req,res)=>{
    res.render('index')
})
module.exports = expressrouter;