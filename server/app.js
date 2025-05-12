const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb')
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { request } = require('http');
const app = express();
app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, 'data.json');


//GET API Method
app.get('/show', async (request,response)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    response.json(data)
    //response.send(data)
});

//Form Start
app.post('/api/form', formFn);
function formFn(request, response) {
    const newData = request.body;
    //Read existing Data
    let data = [];
    if (fs.existsSync(filePath)) {
        const file = fs.readFileSync(filePath, 'urf8');
        if (file) data = JSON.parse(file);
    }
    data.push(newData);
    //write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    response.json({ message: 'Data save' })
}
//Form End

//User Start
app.get('/api/users', UserFn);
function UserFn(request, response) {
    response.json([
        {
            id: 1,
            name: 'Welcome to my portfolio! I am a developer who loves turning ideas into clean, efficient code. Here you ll find projects that highlight my skills in building reliable, user-focused applications. Take a Look around',
        }
    ]);
}
//User End

//About Start
app.get('/api/abouts', AboutFn);
function AboutFn(request, response) {
    response.json([
        { id: 1, para: "Welcome! I'm Rajat Kumar, a passionate and creative developer specializing in Web Development, Android App Development and Software Development. With a solid foundation in computer applications and hands-on experience in building real-world solutions, I'm dedicated to turning ideas into powerful, user-friendly digital products." },
        { id: 2, para: "As a Web Devloper, I design and build responsive, modern websites using technologies like HTML, CSS, Javascript, and Frameworks such as React and Bootstrap. I focus on creating clean, efficient code and delivering visually appealing and functional user interfaces. " },
        { id: 3, para: "Hello, My name is Rajat Kumar, I am live in  Lucknow in India and  belong from Azamgarh." },
        { id: 3, para: "HTML CSS JavaScript  Bootstrap  Java  Python  React  Angular  NodeJS  " }
    ])
}
//About End

//Content Start
app.get('/api/content', contentApi);
function contentApi(request, response) {
    response.json([
        { id: 1, para: "Welcome! I'm Rajat Kumar, a passionate and creative developer specializing in Web Development, Android App Development and Software Development. With a solid foundation in computer applications and hands-on experience in building real-world solutions, I'm dedicated to turning ideas into powerful, user-friendly digital products." },
        { id: 2, para: "As a Web Devloper, I design and build responsive, modern websites using technologies like HTML, CSS, Javascript, and Frameworks such as React and Bootstrap. I focus on creating clean, efficient code and delivering visually appealing and functional user interfaces. " },
        { id: 3, para: "Hello, My name is Rajat Kumar, I am live in  Lucknow in India and  belong from Azamgarh." },
        { id: 3, para: "HTML CSS JavaScript  Bootstrap  Java  Python  React  Angular  NodeJS  " }
    ])
}
//Content End

app.listen(3000)