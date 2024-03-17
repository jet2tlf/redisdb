import { redisClient } from "../database";

/**
 * Connects to the Redis server.
 */
export async function connect() {
    redisClient.connect();
}