$(function () {
    var mySwiper = new Swiper('.banner', {
        autoplay: 2500,//可选选项，自动滑动
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    })
    var mySwiper = new Swiper('.text-report', {
        autoplay: 4000,//可选选项，自动滑动
        loop: true,
    })


    // 数据动态实现
    function numMove(obj) {
        $(obj).each(function () {
            console.log($(this))
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                    duration: 3500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
        });

    }
    numMove(".count");



    //   添加动画
    var time = ["d0", "d1", "d2", "d3", "d4"];

    document.onscroll = function () {
        var sTop = document.documentElement.scrollTop;
        if (sTop > 100 && sTop < 220) {
            $(".achievement .ani").eq(0).addClass("animated fadeInLeft d3");
            $(".achievement .ani").eq(1).addClass("animated fadeInRight d3");
        }
        else if (sTop > 220 && sTop < 450) {
            $(".feature .ani1").eq(0).addClass("animated bounceInLeft d4");
            $(".feature .ani1").eq(1).addClass("animated bounceInUp d4");
            $(".feature .ani1").eq(2).addClass("animated bounceInRight d4");



        }else if (sTop > 500 && sTop < 600) {
            $(".pro .ani").eq(0).addClass("animated fadeInUp d2 dl0");
            $(".pro .ani").eq(1).addClass("animated fadeInUp d3 dl1");
            $(".pro .ani").eq(2).addClass("animated fadeInUp d4 dl2");



        }








    }

  
	



   

})