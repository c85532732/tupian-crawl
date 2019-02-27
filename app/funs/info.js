let db=require('../db')
    ,moment=require('moment')
;

module.exports={
    save_one:async function (param) {
        let option={
            title:param.title,
            tags:'',
            summary:param.summary,
            logo:param.logo,
            imglist:param.imglist,
            createtime:moment()
        }
        let info=await db.info.create(option);
        return info;
    }
}