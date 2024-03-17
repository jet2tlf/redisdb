import { redisClient } from "../database";

export async function connect() {
    redisClient.connect();
}