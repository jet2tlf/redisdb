import { resourceName } from "..";
import { redisClient } from "../database";

/**
 * Retrieves the value associated with the specified key from Redis.
 * 
 * @param key - The key to retrieve the value for.
 * @param callback - An optional callback function to handle the retrieved data.
 * @returns The retrieved data or the result of the callback function if provided.
 */
export async function get(key: string, callback: (data: string | object | null) => any) {
    ScheduleResourceTick(resourceName)
    try {
        let result;
        const data = await redisClient.get(key);

        try {
            result = JSON.parse(data as string);
        } catch (error) {
            result = data
        }

        return callback ? callback(result) : result;
    } catch (error: any) {
        return console.error("Redis error while getting data: " + error.message)
    }
}