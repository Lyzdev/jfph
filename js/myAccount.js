$(function(){
    // 账号渲染
var userid=localStorage.getItem("id");
if(userid){
    var user=localStorage.getItem("username");
    $(".myuser").html(user);
}
})