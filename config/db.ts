import config from "config";
import mongoose from "mongoose";

//logger
import logger from "../config/logger";

async function connect() {

    const dbUri = config.get<string>("dbUri")

    try {
        
        await mongoose.connect(dbUri)
        logger.info("conectou ao BD")

    } catch (e) {
        logger.error("Deu errado a conexao")
        logger.error(`Erro: ${e}`)
        
    }
}

export default connect;