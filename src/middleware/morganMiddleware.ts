import config from "config"
import morgan, { StreamOptions } from "morgan"
import logger from "../../config/logger"

const stream: StreamOptions = {
    write: (messege) => logger.http(messege)
}
/*skip é uma maneira de controlar condicionalmente se o middleware Morgan deve registrar ou não as solicitações HTTP,
 dependendo do ambiente em que seu aplicativo está sendo executado.
 Isso é útil para evitar que o registro de solicitações seja ativado em ambientes de produção,
 onde você pode não querer que os registros detalhados de solicitações apareçam nos logs.
 */
const skip = () => {
    const env = config.get<string>("env") || "development"
    return env !== "development"
}

//Ele define quais informações serão registradas para cada solicitação HTTP.
const morganMiddleware = morgan(
    ":method :url :status :res[content-length] - :response-time ms",
    {stream, skip}
)

export default morganMiddleware