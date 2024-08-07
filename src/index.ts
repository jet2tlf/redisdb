import { get } from "./query/get";
import { del } from "./query/del";
import { set } from "./query/set";
import { quit } from "./query/quit";
import { exists } from "./query/exists";
import { expire } from "./query/expire";
import { update } from "./query/update";
import { reload } from "./query/reload";
import { connect } from "./query/connect";
import { publish } from "./pubsub/publish";
import { subscribe } from "./pubsub/subscribe";
import { keys } from "./query/keys";
import { flushDb } from "./query/flush";

import { createConnection } from "./database";

export const credentials = GetConvar("redisCredentials", "null");
export const resourceName: string = GetCurrentResourceName();

setTimeout(async () => {
    try {
        await createConnection(credentials);
    } catch (error) {
        console.error(error)
    }
})

exports("get", get);
exports("del", del);
exports("set", set);
exports("quit", quit);
exports("exists", exists);
exports("expire", expire);
exports("update", update);
exports("reload", reload);
exports("connect", connect);
exports("publish", publish);
exports("subscribe", subscribe);
exports("keys", keys);
exports("flushDb", flushDb);
