const express = require("express")
const path = require("path")
const app = express();
const port = 40;

// for serving static files
app.use('/static', express.static('static'))

//set the template engine for as pug
app.set('view engine', 'pug')

//set the view directory
app.set('views',path.join(__dirname, 'views') )

//our pug demo endpoint
app.get("/demo", (req, res) => {
    res.status(200).render('demo', {title: 'hello nandani', message: 'keep safe'})
});

// app.get("/index" ,(res, req) => {
//     res.status(209).render('index')
// });

app.get("/", (req, res) => {
    res.status(200).send("this is home page of my first express app ")
});

app.get("/about", (req, res) => {
    res.status(201).send("this is get request of about page of my first express app ")
});

app.post("/about", (req, res) => {
    res.status(203).send("this is post request of about page of my first express app ")
});

app.get("/services", (req, res) => {
    res.send("this is services page of my first express app ")
});

app.get("/this", (req, res) => {
    res.status(404).send("this page is not found ")
});

app.listen(port, ()=>{
    console.log(`the application started successfully on port ${port}`)
})