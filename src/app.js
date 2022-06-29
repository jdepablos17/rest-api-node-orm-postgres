import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import router from "./routes/index.js";
const app = express();

// Middlewares
app.use(morgan("dev"));
//app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router)

export default app;