import { resourceName } from "..";
import { redisClient } from "../database";

export async function update(key: string, value: string, callback: (data: string | null) => any) {
    ScheduleResourceTick(resourceName)
    try {
        const result = await redisClient.set(key, value, { XX: true });
        return callback ? callback(result) : result;
    } catch (error: any) {
        return console.error("Redis error while setting data: " + error.message)
    }
}