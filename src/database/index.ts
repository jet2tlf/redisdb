import { createClient, RedisClientType } from 'redis';
import { performance } from 'perf_hooks';

export var redisClient: RedisClientType;

/**
 * Creates a connection to the Redis database using the provided credentials.
 * @param credentials - The credentials for connecting to the Redis database.
 */
export async function createConnection(credentials: string) {
    if (credentials === "null") return console.error("^3Redis credentials not entered^7");

    redisClient = createClient({ url: credentials });
    
    const start = performance.now();

    redisClient.on('ready', () => {
        const end = performance.now();
        console.log(`^3Redis^7 connection established in ^5${(end - start).toFixed(2)}^7ms`);
    });

    redisClient.on('error', (error: any) => {
        console.error(`^1Redis^7 error: ${error}`);
    });

    await redisClient.connect();
}