var asyncRedis = require("async-redis");
var redis_config = require('../../config/redis_local.json');


module.exports = {
    set: async function (key, val, expire) {
        var redisClient = asyncRedis.createClient(
            redis_config.port,
            redis_config.host
        );

        let result = await redisClient.set(key, val);

        if (!isNaN(expire) && expire > 0) {
            redisClient.expire(key, parseInt(expire));
        }
        return result;

    },
    get: async function (key, callback) {
        var redisClient = asyncRedis.createClient(
            redis_config.port,
            redis_config.host
        );

        let result =await redisClient.get(key);
        return result;
    }
}