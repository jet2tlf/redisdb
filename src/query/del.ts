import { resourceName } from "..";
import { redisClient } from "../database";

/**
 * Deletes a key from the Redis database.
 * 
 * @param key - The key to delete.
 * @param callback - An optional callback function to handle the result.
 * @returns The number of keys deleted, or null if an error occurred.
 */
export async function del(key: string, callback: (result: number | null) => any) {
    ScheduleResourceTick(resourceName)
    try {
        const result = await redisClient.del(key);
        return callback ? callback(result) : result;
    } catch (error: any) {
        return console.error("Redis error while deleting data: " + error.message)
    }
}