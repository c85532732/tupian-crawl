
module.exports=function (str,flg,sn) {
    var newstr="";

    var tmp1=str.substring(0, sn);
    var tmp2=str.substring(sn);
    newstr+=tmp1+flg+tmp2;

    return newstr;
}