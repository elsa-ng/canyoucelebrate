const express = require("express");
const app = express();
const path = require("path");
const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static("media"));
app.use(express.static("fullcalendar"));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/calendar", (req, res)=>{
    res.sendFile(path.join(__dirname + "/views/calendar.html"));
});

app.listen(HTTP_PORT, ()=>{
    console.log("Listening on " + HTTP_PORT);
});