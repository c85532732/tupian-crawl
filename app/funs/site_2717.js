let sit_config = require("../../config/site.json")
    , utils = require("../utils")
    , fs = require('fs');
;

module.exports = {
    req_img_list: async function (url) {
        let $ = await utils.reqhtml(url, "gb2312");
        let img_list = [];
        let src = $("#picBody").find("img").attr("src");
        img_list.push(src);
        /*utils.download({uri: src}, function (err, buffer) {
            fs.writeFile('1.jpg', buffer, function (err) {
                if (err) {
                    console.log(err)
                }
            });
        });*/
         utils.postToMedia(img_list,function (err,data) {
             console.log(data);
         });

    },
    req_detail_html: async function () {
        let base = this;
        let arr_list = await base.req_list_html();

        if (!arr_list) return null;

        for (let i = 0; i < 1; i++) {
            let tmp_url = arr_list[i];
            base.req_img_list(tmp_url);
        }

    },
    req_list_html: async function () {
        let url = sit_config.site_2717.wenshen;
        let $ = await utils.reqhtml(url, "gb2312");
        if (!$) {
            return null;
        }
        let arr_list = [];
        $(".MeinvTuPianBox ul li a").each(function () {
            let href = sit_config.site_2717.host + $(this).attr("href");
            arr_list.push(href);
        });

        return arr_list;
    }
};