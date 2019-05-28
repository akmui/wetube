import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";


var app = express();

const PORT = 4000;
const handleListening = () => console.log(`listening on:http://localhost:${PORT}`);
const handleHome = (req, res) => res.send('Hi from home!');
const handleProfile = (req, res) => res.send("Hi this is my profile");
const handleProfile2 = (req, res) => res.send("Yay");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());


app.get("/", handleHome);
app.get("/profile", handleProfile);
app.get("/profile2", handleProfile2);
app.listen(PORT, handleListening);