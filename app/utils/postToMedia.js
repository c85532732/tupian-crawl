/**
 * Created by jack on 17-12-13.
 */
var needle = require("needle");

module.exports = function (imglists, callback) {
    var url = "http://attach.ybbs.ca/imgmanage/urlupload";

    if(imglists.length==1){
        imglists.push(null);
    }

    var data = {
        urls:imglists
    };

    data=require('querystring').stringify(data);

    var options = {
        headers: {
            'X-API-KEY': 'be8kddtUucnkdZ6eC56ZpNTJ',
            "Content-Type": 'application/x-www-form-urlencoded',
            "Content-Length": data.length
        }
    };

    needle.post(url, data, options, function (err, resp, body) {
        if (err) {
            console.log(err);
            return callback(err);
        }

        callback(null, body.out_data);
    });
};