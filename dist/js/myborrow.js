$(function () {
    $('.img1').hover(function () {
        $('.box1').fadeIn()
    }, function () {
        $('.box1').fadeOut()
    })

    $('.img2').hover(function () {
        $('.box2').fadeIn()
    }, function () {
        $('.box2').fadeOut()
    })

    $('.img3').hover(function () {
        $('.box3').fadeIn()
    }, function () {
        $('.box3').fadeOut()
    })

    $('.img4').hover(function () {
        $('.box4').fadeIn()
    }, function () {
        $('.box4').fadeOut()
    })

    $('.img5').hover(function () {
        $('.box5').fadeIn()
    }, function () {
        $('.box5').fadeOut()
    })

    window.onscroll = function () {
        var sTop = document.documentElement.scrollTop;
        console.log(sTop);
        if (sTop == 300) {
            $(".main").find("img").addClass("animated zoomIn slower")
            return false;
        } else if (sTop == 600) {
            $(".easy .title").addClass("animated fadeInRight slower");
            $(".easy").find("img").addClass("animated fadeInLeft slower");
           
            return false;

        } 
    }













})