var request = require('request').defaults({encoding: null});

// Utility function that downloads a URL and invokes
// callback with buffer
module.exports = function (options, callback) {

    var uri = options.uri;

    // default is unlimited
    var maxFileSize = options.max || false;

    var options_ = {
        uri: uri,
        method: 'GET',
        port: 80,
        timeout: 300000,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko',
            "X-Forwarded-For":"101.206.162.70"
        }
    };

    request(options_, function (err, res, buffer) {

        if (err) {
            return callback(err);
        } else if (200 !== res.statusCode) {
            err = new Error('Failed. HTTP response status code: ' + res.statusCode);
            callback(err);
        } else {
            var fileSize = Math.ceil(res.headers['content-length'] / 1024);  // in KB

            callback(null, buffer);
        }
    });
};
