var type = {
    str:[
        "我是一名设计爱好者",
        "我喜欢摄影，喜欢音乐，也喜欢挑战",
        "我感想敢做",
        "我在学习，在进步！",
        "我渴望一个机会！"],
    length:0,//数组
    i:0,//字符
    typeAction:true,
    speed:100
};

$(window).load(function () {

    $(".page2_content1 .page2_content1_img").hover(function () {
        $($(this).children("div")).animate({opacity:1},100);
    },function () {
        $($(this).children("div")).animate({opacity:0},100);
    });
    $(".page2_content1_img_mask a").click(function () {
        console.log($(this).parent().siblings("img"));
        $("#myModal img").attr("src",($(this).attr("img-src")));
    });

    //page head
    var scroll = false;
    $(window).scroll(function () {
        var scrollTopH = $(window).scrollTop();
        var blurH = $(".page2_headblur").offset().top;
        var windowH = $(window).height();
        if(blurH <= scrollTopH + windowH - 500 && scroll == false){
            $("#page_head").animate({top:-50},300);
            scroll = true;
        }
        if(blurH > scrollTopH + windowH - 500 && scroll == true){
            $("#page_head").animate({top:0},300);
            scroll = false;
        }
    })

    $("#emailAddr").hover(function () {
        $(this)[0].innerText = "点击复制";
    },function () {
        $(this)[0].innerText = "我的邮箱";
    })
    
    //跳转到作品
    $(".slideTo_portfolio").click(function () {
        var titleH = $(".page2_title1").offset().top;
        var timer = setInterval(function () {
            var windowH = $(window).scrollTop();
            //获取步长 确定移动方向(正负值) 步长应该是越来越小的，缓动的算法。
            var step = (titleH-windowH)/5;
            //对步长进行二次加工(大于0向上取整,小于0项下取整)
            step = step>0?Math.ceil(step):Math.floor(step);
            //动画原理： 目标位置 = 当前位置 + 步长
            windowH += step
            $(window).scrollTop(windowH);
            //检测缓动动画有没有停止
            if(Math.abs(titleH-windowH)<=Math.abs(step)){
                windowH = titleH; //直接移动指定位置
                clearInterval(timer);
            }
        },30);
    })

    //下载简历
    $("#download_resume").click(function(){
        var url = "https://liuhuineo.github.io/download/%E6%B5%8B%E8%AF%95.rar";
        window.open(url);
    });

    typing();


    $("#viewMore").click(function(){
        console.log(1);
        $.ajax({
            url: "viewmore.html",
            cache: false,
            success: function(html){
                $("#myModal1").html(html);
                console.log(html)
            }
        });
    })
});
function typing(){
    var divTyping = document.getElementById("divTyping");
    if (type.length <= type.str[type.i].length && type.typeAction) {
        divTyping.innerHTML = type.str[type.i].slice(0, type.length++) + "|";
        setTimeout("typing(type.str[type.i])", type.speed);//递归调用
    }
    else{
        type.typeAction = false;
        type.length == type.str[type.i].length? type.speed=500:type.speed = 100;
        if(type.length != 0){
            divTyping.innerHTML = type.str[type.i].slice(0, type.length--) + "|";//结束打字,移除 _ 光标
            setTimeout("typing(type.str[type.i])", type.speed);//递归调用
        }else {
            divTyping.innerHTML = "";
            type.typeAction = true;
            type.length = 0;
            setTimeout("typing(type.str[type.i])", type.speed);//递归调用
            type.i+1>= type.str.length ? type.i=0:type.i++;
        }
    }
}
function  copyEmail(event) {

    var clipboard = new ClipboardJS("#emailAddr");//实例化
    //复制成功执行的回调，可选
    clipboard.on('success', function() {
       alert("邮箱复制成功！");
    });
    //复制失败执行的回调，可选
    clipboard.on('error', function(e) {

    });
}