require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose")
const requireDir = require("require-dir");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.BD_URL, { useUnifiedTopology: true, useNewUrlParser: true });

requireDir('./src/models/');
app.use("/api", require("./src/routes"));

app.listen(process.env.PORT);