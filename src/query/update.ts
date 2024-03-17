import { resourceName } from "..";
import { redisClient } from "../database";

/**
 * Updates the value of a key in Redis.
 * 
 * @param key - The key to update.
 * @param value - The new value for the key.
 * @param callback - An optional callback function to handle the result of the update operation.
 * @returns The result of the update operation, or the value returned by the callback function if provided.
 */
export async function update(key: string, value: string, callback: (data: string | null) => any) {
    ScheduleResourceTick(resourceName)
    try {
        const result = await redisClient.set(key, value, { XX: true });
        return callback ? callback(result) : result;
    } catch (error: any) {
        return console.error("Redis error while setting data: " + error.message)
    }
}