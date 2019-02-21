var helper = {};
exports.helper = helper;

var log4js = require('log4js')
    ,log4js_config = require('../../config/log4js_config')
;

log4js.configure(log4js_config);

var logDebug = log4js.getLogger('logDebug');
var logInfo = log4js.getLogger('logInfo');
var logWarn = log4js.getLogger('logWarn');
var logErr = log4js.getLogger('logErr');

helper.writeDebug = function(msg){
    if(msg == null)
        msg = "";
    logDebug.debug(msg);
};

helper.writeInfo = function(msg){
    if(msg == null)
        msg = "";
    logInfo.info(msg);
};

helper.writeWarn = function(msg){
    if(msg == null)
        msg = "";
    logWarn.warn(msg);
};

helper.writeErr = function(msg, exp){
    if(msg == null)
        msg = "";
    if(exp != null)
        msg += "\r\n" + exp;
    logErr.error(msg);
};

// 配合express用的方法
exports.use = function(app) {
    //页面请求日志, level用auto时,默认级别是WARN
    app.use(log4js.connectLogger(logInfo, {level:'debug', format:':method :url'}));
}


