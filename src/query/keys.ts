import { resourceName } from "..";
import { redisClient } from "../database";

/**
 * Retrieves all keys matching the specified pattern from the Redis database.
 * 
 * @param pattern - The pattern to match against keys.
 * @param callback - An optional callback function to handle the retrieved data.
 * @returns A Promise that resolves to an array of matching keys, or the result of the callback function if provided.
 */
export async function keys(pattern: string, callback: (data: string[] | null) => any) {
    ScheduleResourceTick(resourceName)
    try {
        const data = await redisClient.keys(pattern);
        return callback ? callback(data) : data;
    } catch (error: any) {
        return console.error("Redis error while setting data: " + error.message)
    }
}