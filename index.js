// const express=require('express')
import express from 'express';
import login from './pages/login.js';
import submit from './pages/submit.js';
import home from './pages/home.js';
import path from'path'
const app=express();

app.get('/', (req,res)=>{
    const abspath = path.resolve('view/home.html')
    res.sendFile(abspath)
})

app.get('/login', (req,res)=>{
    const abspath = path.resolve('view/login.html')
    res.sendFile(abspath)
})

app.post('/submit', (req,res)=>{
    const abspath = path.resolve('view/submit.html')
    res.sendFile(abspath)
})



app.get('/about', (req,res)=>{
    const abspath = path.resolve('view/about.html')
    res.sendFile(abspath)
})



app.listen(3200); 