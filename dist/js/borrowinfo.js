
$(function(){
    var str=location.search.split("=")[1]

    $.ajax({
        type: "get",
        url: "http://172.16.16.127:8282/getborrowinfo.php",
        data: {
            borrowid:str,
        },
        dataType: "json",
        success: function (response) {
            console.log(response)
            for(key in response){
                console.log(response[key])
                $(`#${key}`).html(response[key]);
            }
            $("#interest").html(parseFloat(response["interest"]).toFixed(2))
            $("#repaytype").html(response["repaytype"]=="0"?"按月分期":"按月到期")








            
            // {"id":"1","userid":"1500","borrowmoney":"542542","interest":"3","minbid":"5424","days":"542","title":"25424","info":"2542542","borrowtime":"2","repaytype":"0","ownmoney":"0","bouns":"254254"}
        }
    });


    // 投资按钮
    $(".invest-btn").on("click",function(){
        if($("#invest-money").val()==""){
            alert("投资一点给这个可怜的孩子吧")
        }else{
            $.ajax({
                type: "get",
                url: "http://172.16.16.127:8282/invest.php",
                data: {
                    id:localStorage.getItem("id"),
                    borrowid:location.search.split("=")[1],
                    chargemoney:$("#invest-money").val(),

                },
                // dataType: "dataType",
                success: function (response) {
                    if(response=="ok"){
                        alert("投资成功！")
                        location.href="/#usercenter";
                        $("#myaccount").trigger("click");
                    }else{
                        alert("投资失败！")
                    }
                    
                }
            });
        }


        
    })

})