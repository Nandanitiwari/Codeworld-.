const express = require("express")
const path = require("path")
const app = express();
const port = 30;

//EXPRESS SPECIF STUFF
app.use('/static', express.static('static'))// for serving static files

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')   //set the template engine for as pug
app.set('views', path.join(__dirname, 'views'))  //set the view directory

//ENDPOINTS
app.get("/index" ,(req, res) => {
    res.status(209).render('index.pug')
});

//START THE SERVER
app.listen(port, ()=>{
    console.log(`the application started successfully on port ${port}`);
})