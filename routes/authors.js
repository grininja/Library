const express = require('express');
const expressrouter =express.Router();
const Author=require('../models/author')
expressrouter.get('/',(req,res)=>{
    res.render('authors/index')
})

expressrouter.get('/new',(req,res)=>{
   res.render('authors/new',{author:new Author()})
})
expressrouter.post('/',(req,res)=>{
    res.send('Create');
})
module.exports = expressrouter;