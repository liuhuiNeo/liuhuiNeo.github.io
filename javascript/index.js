$(window).load(function () {

    $(".page2_content1 .page2_content1_img").hover(function () {
        $($(this).children("img").eq(1)).animate({opacity:1},100);
    },function () {
        $($(this).children("img").eq(1)).animate({opacity:0},100);
    });
    $(".page2_content1 img").not($(".page2_content1_img_mask")).click(function () {
        console.log($(this).attr("src"));
        $("#myModal img").attr("src",($(this).attr("src")));
    });


})