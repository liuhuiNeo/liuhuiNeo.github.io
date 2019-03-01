
$(window).load(function () {
    $('.contentMainDetail time').eq(0).css({opacity:1});
    $('.contentMainDetail .timeLine').eq(0).css({'width':6,'opacity':0.8,'margin-left':-31});

    $(window).scroll(function () {
        if(document.body.scrollTop >= 0 && document.body.scrollTop < 400) {
            $('.contentHeadMain').slideDown('slow');
        }
        else {
            $('.contentHeadMain').slideUp();
        }
    });

    $('.contentMainDetail').mouseover(function () {

        $('time',$(this).parent()).animate({opacity:1},50);
        $('.timeLine',$(this).parent()).animate({'width':6,'opacity':0.8,'margin-left':-31},50);
        $('time',$('.contentMainDetail').not($(this)).parent()).animate({opacity:0.5},50);
        $('.timeLine',$('.contentMainDetail').not($(this)).parent()).animate({'width':4,'opacity':0.5,'margin-left':-30},50);
    })

})