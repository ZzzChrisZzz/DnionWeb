/**
 * Created by zhaoyunlong on 2017/2/13.
 */
$(document).ready(function () {
    $.getJSON("../json/test.json",{"userId":"uId"},function (data) {
        //alert(data.collies[0].oId);
        if (data.collies==""){
            $("#panel-handling").find("tbody").append("<tr>\
                <td colspan=\"7\">\
                没有未处理订单\
                </td>\
            </tr>");
        }
        else{
            $.each(data.collies,function (i,item) {
                add_handling(item);
            })
        }
    },"json");
});
function add_handling(item) {
    var tBody = $("#panel-handling").find("tbody");
    var str = "<tr>\
    <td>" + item.oId + "</td>\
    <td>" + item.type + "</td>\
    <td>" + item.domain + "</td>\
    <td>" + item.company + "</td>\
    <td>" + item.lastTime + "</td>\
    <td>" + item.status + "</td><td>";
    switch (item.type){
        case "待完成":
            str+="<a href=\"Detail.html?oId="+item.oId+"\" class=\"btn btn-success btn-xs\">查看详情</a>\
            <button class=\"btn btn-success btn-xs\">取消订单</button>\
            <button class=\"btn btn-success btn-xs\" data-toggle=\"modal\" data-target=\"#apply\">补全信息</button>\
            <button class=\"btn btn-success btn-xs\">关闭订单</button>";
            break;
        case "审核中":
            str+="<a href=\"Detail.html?oId="+item.oId+"\" class=\"btn btn-success btn-xs\">查看详情</a>\
            <button class=\"btn btn-success btn-xs\">取消订单</button>\
            <button class=\"btn btn-success btn-xs\">关闭订单</button>";
            break;
        case "已签发":
            str+="<a href=\"Detail.html?oId="+item.oId+"\" class=\"btn btn-success btn-xs\">查看详情</a>\
            <button class=\"btn btn-success btn-xs\">取消订单</button>\
            <button class=\"btn btn-success btn-xs\">关闭订单</button>";
            break;
        case "审核失败":
            str+="<a href=\"Detail.html?oId="+item.oId+"\" class=\"btn btn-success btn-xs\">查看详情</a>\
            <button class=\"btn btn-success btn-xs\">取消订单</button>\
            <button class=\"btn btn-success btn-xs\" data-toggle=\"modal\" data-target=\"#apply\">补全信息</button>\
            <button class=\"btn btn-success btn-xs\">关闭订单</button>";
            break;
        case "已关闭":
            str+="<a href=\"Detail.html?oId="+item.oId+"\" class=\"btn btn-success btn-xs\">查看详情</a>";
            break;
    }
    str+="</td></tr>";
    tBody.append(str);
}
