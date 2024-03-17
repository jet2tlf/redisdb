import { resourceName } from "..";
import { redisClient } from "../database";

export async function keys(pattern: string, callback: (data: string[] | null) => any) {
    ScheduleResourceTick(resourceName)
    try {
        const data = await redisClient.keys(pattern);
        return callback ? callback(data) : data;
    } catch (error: any) {
        return console.error("Redis error while setting data: " + error.message)
    }
}