import { redisClient } from "../database";
import { resourceName } from "..";

/**
 * Publishes a value to a specific channel in Redis.
 *
 * @param channel - The channel to send to.
 * @param value - The value to publish for the channel.
 * @param callback - An optional callback function to handle the result of the publish operation.
 * @returns The result of the publish operation, or the result passed to the callback function if provided.
 */
export async function publish( channel: string, value: string, callback: (data: number) => any) {
    ScheduleResourceTick(resourceName);
    try {
        const result = await redisClient.publish(channel, value);
        return callback ? callback(result) : result;
    } catch (error: any) {
        return console.error("Redis error while publishing data: " + error.message);
    }
}
