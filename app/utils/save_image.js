let img_root_path = require('../../config/tsconfig.json').img_root_path
    , moment = require('moment')
    , fs = require('fs')
    , download = require('download')
;


module.exports = async function (src) {
    let timenow = moment().format('YYYY-MM-DD');
    let filename = moment().format('x')+src.substring(src.lastIndexOf('.'));
    //let filename = src.substring(src.lastIndexOf('/') + 1);
    let img_path = img_root_path + timenow + "/" + filename;

    var save_path = process.cwd() + img_root_path;
    if (!fs.existsSync(save_path)) {
        fs.mkdirSync(save_path);
    }

    save_path = save_path + timenow + "/";

    if (!fs.existsSync(save_path)) {
        fs.mkdirSync(save_path);
    }
    save_path = save_path + filename;

    let img = await download(src).then(data => {
        fs.writeFileSync(save_path, data);
        return img_path;
    });
    return img;
}