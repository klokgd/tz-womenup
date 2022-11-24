import express from "express"
import {config} from "dotenv";
config();
const app = express()
const PORT = process.env.Port;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})