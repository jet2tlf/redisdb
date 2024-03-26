import { RedisClientType } from "redis";
import { redisClient } from "../database";
import { resourceName } from "..";

type Subscription = {
    redisClient: RedisClientType;
    callbacks: ((data: string) => void)[];
};

const subscribers: Record<string, Subscription> = {};

/**
 * Subscribes to a channel to receive values to a callback from Redis.
 *
 * @param channel - The channel to receive from.
 * @param callback - A callback function to handle the result of the subscribe operation.
 */
export async function subscribe(channel: string, callback: (data: string) => void) {
    ScheduleResourceTick(resourceName);
    try {
        if (!Object.prototype.hasOwnProperty.call(subscribers, channel)) {
            subscribers[channel] = {
                redisClient: await redisClient.duplicate(),
                callbacks: [],
            };

            await subscribers[channel].redisClient.connect();
            await subscribers[channel].redisClient.subscribe(
                channel,
                (data: string) => {
                    subscribers[channel].callbacks.forEach((callback) => callback(data));
                }
            );
        }

        subscribers[channel].callbacks.push(callback);
    } catch (error: any) {
        return console.error("Redis error while subscribing channel: " + error.message);
    }
}
