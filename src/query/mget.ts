import { resourceName } from "..";
import { redisClient } from "../database";

/**
 * Retrieves multiple values from Redis based on the given keys.
 * @param keys - An array of keys to retrieve values for.
 * @param callback - An optional callback function to handle the retrieved data.
 * @returns A Promise that resolves to an array of retrieved values, or the result of the callback function if provided.
 */
export async function mGet(keys: string[], callback: (data: (string | null)[]) => any) {
    ScheduleResourceTick(resourceName)
    try {
        const data = await redisClient.mGet(keys);
        return callback ? callback(data) : data;
    } catch (error: any) {
        return console.error("Redis error while setting data: " + error.message)
    }
}