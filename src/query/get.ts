import { resourceName } from "..";
import { redisClient } from "../database";

export async function get(key: string, callback: (data: string | null) => any) {
    ScheduleResourceTick(resourceName)
    try {
        const data = await redisClient.get(key);
        return callback ? callback(data) : data;
    } catch (error: any) {
        return console.error("Redis error while getting data: " + error.message)
    }
}