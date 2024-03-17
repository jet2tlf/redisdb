import { resourceName } from "..";
import { redisClient } from "../database";

export async function del(key: string, callback: (result: number | null) => any) {
    ScheduleResourceTick(resourceName)
    try {
        const result = await redisClient.del(key);
        return callback ? callback(result) : result;
    } catch (error: any) {
        return console.error("Redis error while deleting data: " + error.message)
    }
}