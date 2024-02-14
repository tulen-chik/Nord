require("dotenv").config();
const express = require("express");
import sequelize from "./db";

const PORT = process.env.PORT;

const app = express();

const start = async () => {
    try {
        await sequelize.
        app.listen(PORT, () => console.log("http://localhost:" + PORT));
    } catch (e) {
        console.log(e);
    }
};

start()
