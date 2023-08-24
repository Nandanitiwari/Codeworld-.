const express = require("express")

const app = express();
const port = 50;

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