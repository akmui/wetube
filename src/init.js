import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();
import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
    this.address().port, app.settings.env);
}
app.listen(PORT, handleListening);