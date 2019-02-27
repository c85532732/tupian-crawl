let rp = require('request-promise')
    , cheerio = require('cheerio')
    , iconv = require("iconv-lite")
;

module.exports = async function (url, charset) {
    if (!charset) charset = "utf8";

    const page =await rp({
        url: url,
        encoding: null
    }).then((body) => {
        return iconv.decode(body, charset);
    }).catch(function (err) {
        return null;
    })

    if(!page)return null;

    let $ = cheerio.load(page, {decodeEntities: false});
    return $;
}