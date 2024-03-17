import { resourceName } from "..";
import { redisClient } from "../database";

export async function mGet(keys: string[], callback: (data: (string | null)[]) => any) {
    ScheduleResourceTick(resourceName)
    try {
        const data = await redisClient.mGet(keys);
        return callback ? callback(data) : data;
    } catch (error: any) {
        return console.error("Redis error while setting data: " + error.message)
    }
}