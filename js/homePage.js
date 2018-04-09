$(document).ready(function(){
    // 点击icon 跳转到修改页面并执行发送点击的图标位置
    $('.glyphicon-edit').each(function(){
        $(this).click(function(){
            var index = $(this).attr('index');
            location.href='change-information.html?'+'Index='+ index;
        })
    })

    
})