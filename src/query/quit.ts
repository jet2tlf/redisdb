import { redisClient } from "../database";

/**
 * Closes the connection to the Redis server.
 * @returns {Promise<void>} A Promise that resolves when the connection is closed.
 */
export async function quit() {
    redisClient.quit();
}