import IoRedis from "ioredis";
import log from "./logger";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const REDIS_PORT = process.env.REDIS_PORT || "6379";
const REDIS_HOST = process.env.REDIS_HOST || "localhost";

const client = new IoRedis(parseInt(REDIS_PORT), REDIS_HOST);

log.info(`Redis connection status: ${client.status}`);

export default client;
