$(document).ready(function(){
    var url = location.href;
    //index为由home-page 传输过来的数据,设置第index-1个option selected属性为true;
    var index = url.substr(-1,1);
    var $optionList = $("#partment option")
    if(!(index<=9&&index>=0)){
        index=0;
    }
    $optionList[index-1].selected = "true";
})