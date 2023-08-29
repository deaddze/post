// const express = require('express');
// const cors = require('cors');
// const multer = require('multer');
// const mongoose = require('mongoose');
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import mongoose from 'mongoose';
import {postCreateValidation, commentCreateValidation} from './validations.js'
import * as PostController from './controllers/PostController.js'
import * as CommentsController from './controllers/CommentsController.js'

const app = express();

app.use(cors());
// app.use('/post', )
// app.options('*', cors())

mongoose.connect('mongodb+srv://nyeoge:12345@cluster0.hzxl5vg.mongodb.net/post?retryWrites=true&w=majority')
.then(() =>{
    console.log('DB connected')
})
.catch((err) => {
    console.log('DB error', err)
})


const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads/')
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage});

app.use(express.json());
app.use('/uploads', express.static('uploads/', {
    setHeaders: (res, path) => {
        res.setHeader('Content-Type', 'image/jpg');
      }
}))


app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/post', postCreateValidation, PostController.create)
app.delete('/posts/:id', PostController.remove);
app.patch('/posts/:id', postCreateValidation, PostController.update)

app.post('/posts/:id/comments', commentCreateValidation, CommentsController.newComment);
app.delete('/posts/:id/comments/:commentId', CommentsController.removeComment)


app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
    url: `/uploads/${req.file.originalname}`
})
})

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(8000, () =>{
    console.log('App start')
});