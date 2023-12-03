import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import http from "http";
import mongoose from "mongoose";

import router from "./router/index";

require("dotenv").config();

const app = express();

app.use(cors({ credentials: true }));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});

mongoose.Promise = Promise;
mongoose.connect(process.env.DB_MONGO_URI || "");
mongoose.connection.on("error", (err) => {
  console.error(`🚫 MongoDB  → ${err.message}`);
});

app.use("/", router());
