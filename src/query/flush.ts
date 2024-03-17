import { resourceName } from "..";
import { redisClient } from "../database";

/**
 * Flushes the Redis database.
 * 
 * @param callback - Optional callback function to handle the result of the flush operation.
 * @returns A Promise that resolves to the result of the flush operation, or the value returned by the callback function if provided.
 */
export async function flushDb(callback: (data: string | null) => any) {
    ScheduleResourceTick(resourceName)
    try {
        const result = await redisClient.flushDb();
        return callback ? callback(result) : result;
    } catch (error: any) {
        return console.error("Redis error while setting data: " + error.message)
    }
}