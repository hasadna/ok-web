var LRU = require("lru-cache"),
    options = {
      max: 500,
      maxAge: 1000 * 60
    },
    cache = LRU(options);
module.exports = cache;