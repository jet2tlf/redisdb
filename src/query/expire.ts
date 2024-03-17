import { resourceName } from "..";
import { redisClient } from "../database";

export async function expire(key: string, seconds: number, callback: (result: boolean | null) => any) {
    ScheduleResourceTick(resourceName)
    try {
        const result = await redisClient.expire(key, seconds);
        return callback ? callback(result) : result;
    } catch (error: any) {
        return console.error("Redis error while checking if data exists: " + error.message)
    }
}