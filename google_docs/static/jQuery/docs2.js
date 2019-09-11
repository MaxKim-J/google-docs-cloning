$('.window-section-1').parallax({imageSrc: 'https://www.google.com/intl/ko_KR/docs/about//images/docs/banner-1600.jpg'});

$(window).ready(function () {

    var max = 320; //100% 투명할때의 스크롤 값

    $(window).scroll(function () {

        var scrollPX = $(this).scrollTop();

        if (scrollPX < max) {

            $(".section-wraper-1").css({"opacity": (max - scrollPX) / max});

        } else {

            $(".section-wraper-1").css({"opacity": 0});

        }

    });

});

$(function () {

    $("#tab1").hide();
    $("#tab2").hide();
    $("#tab3").hide();

    $("#imgtab1").hide();
    $("#imgtab2").hide();
    $("#imgtab3").hide();

});

$(function () {
    $("#li1").click(function () {
        $("#li1").removeClass("active");
        //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
        $(this).addClass("active");

        $("#together_p").hide();

        $("#li1").hide();
        $("#li2").show();
        $("#li3").show();

        $("#tab1").show();
        $("#tab2").hide();
        $("#tab3").hide();

        $("#imgtab1").show();
        $("#imgtab2").hide();
        $("#imgtab3").hide();
        $("#imgtab").hide();

    });

    $("#li2").click(function () {
        $("#li2").removeClass("active");
        //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
        $(this).addClass("active");

        $("#together_p").hide();

        $("#li2").hide()
        $("#li1").show()
        $("#li3").show()
        $("#tab2").show();
        $("#tab1").hide();
        $("#tab3").hide();
        $("#imgtab2").show();
        $("#imgtab1").hide();
        $("#imgtab3").hide();
        $("#imgtab").hide();
    });

    $("#li3").click(function () {
        $("#li3").removeClass("active");
        //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
        $(this).addClass("active");

        $("#together_p").hide();

        $("#li3").hide();
        $("#li1").show();
        $("#li2").show();
        $("#tab3").show();
        $("#tab1").hide();
        $("#tab2").hide();
        $("#imgtab3").show();
        $("#imgtab1").hide();
        $("#imgtab2").hide();
        $("#imgtab").hide();
    });
});
