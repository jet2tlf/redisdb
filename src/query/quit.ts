import { redisClient } from "../database";

export async function quit() {
    redisClient.quit();
}