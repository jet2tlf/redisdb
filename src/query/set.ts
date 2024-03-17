import { resourceName } from "..";
import { redisClient } from "../database";

/**
 * Sets the value of a key in Redis.
 * 
 * @param key - The key to set.
 * @param value - The value to set for the key.
 * @param callback - An optional callback function to handle the result of the set operation.
 * @returns The result of the set operation, or the result passed to the callback function if provided.
 */
export async function set(key: string, value: string, callback: (data: string | null) => any) {
    ScheduleResourceTick(resourceName)
    try {
        const result = await redisClient.set(key, value);
        return callback ? callback(result) : result;
    } catch (error: any) {
        return console.error("Redis error while setting data: " + error.message)
    }
}