import { resourceName } from "..";
import { redisClient } from "../database";

/**
 * Checks if a key exists in the Redis database.
 * 
 * @param key - The key to check for existence.
 * @param callback - An optional callback function to handle the result.
 * @returns A Promise that resolves to the existence of the key (1 if exists, 0 if not exists).
 */
export async function exists(key: string, callback: (result: number | null) => any) {
    ScheduleResourceTick(resourceName)
    try {
        const result = await redisClient.exists(key);
        return callback ? callback(result) : result;
    } catch (error: any) {
        return console.error("Redis error while checking if data exists: " + error.message)
    }
}