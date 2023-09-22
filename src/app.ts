//ENV variables
require("dotenv").config();

import config from "config";
import express from "express";

const app = express()

//JSON middleware
app.use(express.json())

//DB
import db from "../config/db";
//Routes
import router from "./router";

app.use("/api/", router);


//Logger
import logger from "../config/logger";

//guardar o arquivo de config
const port = config.get<number>("port");

app.listen(port, async () => {
    await db();

    logger.info(`Aplicação esta funcionando na porta:  ${port}`);
})