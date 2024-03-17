import { redisClient } from "../database";

/**
 * Reloads the Redis client by quitting the current connection and establishing a new one.
 * @returns {Promise<void>} A promise that resolves when the reload is complete.
 */
export async function reload() {
    redisClient.quit();
    redisClient.connect();
}