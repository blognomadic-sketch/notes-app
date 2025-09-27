// server/index.js — minimal Express API
const express = require('express');
const app = express();
app.use(express.json());
let notes = [{id:1, text:'First note'}];
app.get('/notes', (req,res)=> res.json(notes));
app.post('/notes', (req,res)=>{
const id = notes.length? notes[notes.length-1].id+1 : 1;
const note = { id, text: req.body.text||'' };
notes.push(note);
res.status(201).json(note);
});
app.listen(3000, ()=> console.log('Server running on http://localhost:3000'));
