$(function(){
    // 登录注册切换
     $('.spa1').click(function(){
         $(this).addClass('color').siblings().removeClass('color');
         $(this).parents(".right").find('.login').show().siblings('.land').hide()
     })
     $('.spa2').click(function(){
        $(this).addClass('color').siblings().removeClass('color');
        $(this).parents(".right").find('.land').show().siblings('.login').hide()
    })
 // 注册表单验证
     //初始化插件
     $("#form").validate({
   //规则
        rules: {
            //用户名
            username: {
                required: true,
                isUser: true
            },
            //密码
            pwd: {
                required: true,
                isPwd: true
            },
            //密码
            email: {
                required: true,
                isEmail: true
            },
            //密码
            nickname: {
                required: true,
                isNickname: true
            },
        },
        //规则的错误提示信息
        messages: {
            //用户名
            username: {
                required: "请必须输入用户名!!!",
            },
            //密码
            pwd: {
                required: "请输入密码",
            },
            email: {
                required: "请输入邮箱",
            },
            nickname: {
                required: "请输入密码",
            },
        }
    })
  //用户名自定义验证   
    jQuery.validator.addMethod("isUser", function (value, element) {
        var tel = /^1[34578]\d{9}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入正确用户名");
    //密码自定义验证   
 jQuery.validator.addMethod("isPwd", function (value, element) {
        var tel =  /^[A-z][A-z0-9_-]{5,11}$/;
        return this.optional(element) || (tel.test(value));
    }, "输入正确密码!!!!");
// 邮箱验证
    jQuery.validator.addMethod("isEmail", function (value, element) {
        var tel =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return this.optional(element) || (tel.test(value));
    }, "输入正确邮箱!!!!");
// 昵称验证
    jQuery.validator.addMethod("isNickname", function (value, element) {
        var tel =/^[a-zA-Z]{1}[0-9a-zA-Z_]{1,}$/;
        return this.optional(element) || (tel.test(value));
    }, "输入正确昵称!!!!");
})