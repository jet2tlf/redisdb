import { resourceName } from "..";
import { redisClient } from "../database";

export async function exists(key: string, callback: (result: number | null) => any) {
    ScheduleResourceTick(resourceName)
    try {
        const result = await redisClient.exists(key);
        return callback ? callback(result) : result;
    } catch (error: any) {
        return console.error("Redis error while checking if data exists: " + error.message)
    }
}