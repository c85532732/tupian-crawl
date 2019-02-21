var http = require('http');

module.exports = function (url, callback) {
    var req = http.get(url, function (res) {
        var pageData = "";
       // if (!charset) charset = "utf8";
        res.setEncoding("utf8");
        res.on('error', function (errget) {

        });
        res.on('data', function (chunk) {
            pageData += chunk;
        });
        res.on('end', function () {
            callback(pageData);
        });
    });
};