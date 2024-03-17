import { redisClient } from "../database";

export async function reload() {
    redisClient.quit();
    redisClient.connect();
}