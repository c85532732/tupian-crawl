let sit_config = require("../../config/site.json")
    , utils = require("../utils")
    ,info=require('./info')
;

module.exports = {
    req_img_list: async function (url) {
        let arr_url=[];
        arr_url.push(url);
        for(var i=2;i<20;i++){
            let tmp_url=url.substring(0,url.lastIndexOf('.'))+"_"+i+".html";
            arr_url.push(tmp_url)
        }

        let img_arr=[];
        let option={};
        for(var i=0;i<arr_url.length;i++){
            let tmp_url=arr_url[i];
            let $ = await utils.reqhtml(tmp_url, "gb2312");
            if(!$)break;

            let src = $("#picBody").find("img").attr("src");

            let img = await utils.save_image(src);
            img_arr.push(img);
            if(i==0){
                option.title=$(".articleV4Tit").text();
                option.summary=$(".articleV4Desc").text();
            }
        }
        option.logo=img_arr[0];
        option.imglist=img_arr.join('|');
        await info.save_one(option);
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
        $(".MeinvTuPianBox ul li").each(function () {
            let href = sit_config.site_2717.host + $(this).find("a").first().attr("href");
            arr_list.push(href);
        });

        return arr_list;
    }
};