import express from "express";
var app = express();

const PORT = 4000;
const handleListening = () => console.log(`listening on:http://localhost:${PORT}`);
const handleHome = (req, res) => res.send('Hi from home!');
const handleProfile = (req, res) => res.send("Hi this is my profile");
const handleProfile2 = (req, res) => res.send("Yay");

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.get("/profile2", handleProfile2);
app.listen(PORT, handleListening);