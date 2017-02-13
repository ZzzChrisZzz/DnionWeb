//jQuery
$(document).ready(function(){
   // alert("成功使用jquery");
    //alert($.cookie("uId")+"cookie");
    var trs=$("tr");
    var i=0
    for(tr in trs){
        if (i%2==0){
            trs.eq(tr).addClass("danger");
        }
        i++;
    }
});
//JavaScript原生
