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


})