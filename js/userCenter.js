$(function () {
    // 我的账户
    $(".userflnav>li").on('click', function () {
        $(this).addClass("active");
        $(this).siblings('li').removeClass("active");
        if ($(this).find("dl")) {
            $(this).find("dl").slideDown();
            $(this).siblings('li').find("dl").slideUp();
        };
    })
    function addStyle(path) {
        // if (!path) {
        //     return false;
        // }
        // var indx = path.lastIndexOf("/") + 1;
        // if(path.substr(indx)=="#usercenter"){return false;}else{
        //     path = path.substr(indx).substr(1);
        // };
        console.log(path)
        // $(`.userflnav li[id=${path}]`).addClass("active");
        // $(`.userflnav li[id=${path}]`).trigger("click");
        // $(`.userflnav li[id=${path}]`).siblings("li").removeClass("active");
        // $(`.userflnav li[id=${path}]`).siblings("li").closest("dl").slideUp();
    }
    addStyle(location.hash);
})