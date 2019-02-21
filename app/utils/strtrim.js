
module.exports=function (str) {
    var regEx = /\s+/g;
    return str.replace(regEx, '');
}