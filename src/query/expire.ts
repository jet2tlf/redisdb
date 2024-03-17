import { resourceName } from "..";
import { redisClient } from "../database";

/**
 * Sets a timeout on a key. After the timeout has expired, the key will be automatically deleted.
 * 
 * @param key - The key to set the timeout for.
 * @param seconds - The number of seconds until the key expires.
 * @param callback - An optional callback function to be called with the result of the operation.
 * @returns A Promise that resolves to the result of the operation, or the result passed to the callback function.
 */
export async function expire(key: string, seconds: number, callback: (result: boolean | null) => any) {
    ScheduleResourceTick(resourceName)
    try {
        const result = await redisClient.expire(key, seconds);
        return callback ? callback(result) : result;
    } catch (error: any) {
        return console.error("Redis error while checking if data exists: " + error.message)
    }
}