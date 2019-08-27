$(function () {
    // 哈希地址改变
    window.onhashchange = changePage;
    function changePage() {
        var hash = location.hash;
        switch (hash) {
            case "#register":
            case "#login":
                $(".content-wrap").load("../pages/loginRegister.html");
                break;
            case "#optimization":
                $(".content-wrap").load("../pages/optimization.html");
                break;
            case "#protect":
                $(".content-wrap").load("../pages/protect.html");
                break;
            case "#introduction":
                $(".content-wrap").load("../pages/introduction.html");
                break;
            case "#informationpublish":
                $(".content-wrap").load("../pages/informationpublish.html");
                break;
            case "#myborrow":
                $(".content-wrap").load("../pages/myborrow.html");
                break;
            case "#contactus":
                $(".content-wrap").load("../pages/contactus.html", function () {
                    var map = new AMap.Map("container", {
                        resizeEnable: true
                    });
                    AMap.service(["AMap.PlaceSearch"], function () {
                        //构造地点查询类
                        var placeSearch = new AMap.PlaceSearch({
                            pageSize: 5, // 单页显示结果条数
                            pageIndex: 1, // 页码
                            city: "010", // 兴趣点城市
                            citylimit: true,  //是否强制限制在设置的城市内搜索
                            map: map, // 展现结果的地图实例
                            panel: "panel", // 结果列表将在此容器中进行展示。
                            autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
                        });
                        //关键字查询
                        placeSearch.search('玖富普惠');
                    });
                });
                break;
            case "#knowledge":
                $(".content-wrap").load("../pages/knowledge.html");
                break;
            case "#select":
                $(".content-wrap").load("../pages/select.html");
                break;
            case "#borrowinfo":
                $(".content-wrap").load("../pages/borrowinfo.html");
                break;










            // 个人中心-========================================
            case "#usercenter":
                personalHashChange(hash);
                break;
            case "#usercenter/myaccount":
                personalHashChange(hash);
                break;
            case "#usercenter/choiceborrow":
                personalHashChange(hash);
                break;
            case "#usercenter/bestchoiceborrow":
                personalHashChange(hash);
                break;
            case "#usercenter/myborrow":
                personalHashChange(hash);
                break;
            case "#usercenter/rechargecenter":
                personalHashChange(hash);
                break;

            case "#usercenter/accountsetting":
                personalHashChange(hash);
                break;
            case "#usercenter/messagecenter":
                personalHashChange(hash);
                break;
            case "#usercenter/memberback":
                personalHashChange(hash);
                break;
            case "#usercenter/userback":
                personalHashChange(hash);
                break;
            case "#usercenter/applyborrow":
                personalHashChange(hash);
                break;
            case "#usercenter/applydetail":
                personalHashChange(hash);
                break;



            // 个人中心-========================================
            default:
                $(".content-wrap").load('../pages/home.html');
                break;
        }
    }
    function personalHashChange(path) {
        // 1句代码
        path = path === '#usercenter' ? 'usercenter/myaccount' : path.substr(1)
        // 解决重复加载个人中心问题
        if ($('.load-content').length) {   // 如果各种中心已经加载过了
            // addStyle(path)
            console.log("长度为：",$('.load-content').length)
            $('.load-content').load(`../pages/${path}.html`) // 那么直接加载右侧内容部分
        } 
        else {  // 否则 就是个人中心 没有加载过
            // 那么,先加载个人中心父页面  再加载右侧子页面
            $('.content-wrap').load('../pages/usercenter.html', function () {
                // addStyle(path)
                $('.load-content').load(`../pages/${path}.html`)
            })
        }
    }
    // function addStyle(path) {
    //     if (!path) {
    //         return;
    //     }
    //     var indx = path.lastIndexOf("/") + 1;
    //     path = path.substr(indx);
    //     $(`.userflnav li[id=${path}]`).addClass("active");
    //     $(`.userflnav li[id=${path}]`).trigger("click");
    //     $(`.userflnav li[id=${path}]`).siblings("li").removeClass("active");
    //     $(`.userflnav li[id=${path}]`).siblings("li").closest("dl").slideUp();
    // }
    // 页面加载调用一次
    changePage();
    // addStyle(location.hash);
    // 账号渲染
    var userid = localStorage.getItem("id");
    if (userid) {
        var user = localStorage.getItem("username");
        $(".info-bar-login").hide();
        $(".info-bar-register").hide();
        $(".info-bar").prepend(`<li class="info-bar-user"><a href="#usercenter">${user}</a></li>
        <li class="info-bar-logout"><a href="#login">退出</a></li>`)

        $(".menu-borrow").prepend('<li class="menu-apply"><a href="#usercenter/applyborrow">发布借款</a></li>')
    }
    // 退出
    $(".info-bar").on("click", ".info-bar-logout", function () {
        $(".info-bar-user").remove();
        $(".info-bar-logout").remove();
        $(".menu-borrow").find(".menu-apply").remove();
        localStorage.clear();
        alert("账号已退出");
        $(".info-bar-login").show();
        $(".info-bar-register").show();
        // location.href="/#login"

    })
    // 超时退出
    var timer = setInterval(function () {
        if (localStorage.getItem("endtime") && new Date().getTime() > localStorage.getItem("endtime")) {
            location.href = "/";
            $(".info-bar-logout").trigger("click");
            clearInterval(timer);

        }

    }, 600000)
    console.dir($(".test"))

})