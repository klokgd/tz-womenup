import express from "express"
import {config} from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import {todoRoutes} from "./routes/todoRoutes.js";
config();
const app = express()
const PORT = process.env.Port;

mongoose.connect(process.env.mongoUri)



app.use(bodyParser.json());
app.use("/todo", todoRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})