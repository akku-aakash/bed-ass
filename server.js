const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require('fs')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.post('/', urlencodedParser, (req, res) => {
    const {youremail, yourname} = req.body
    fs.appendFileSync('response.txt', `\nEmail - ${youremail}, \nName - ${yourname}`);
    res.sendStatus(200);
});