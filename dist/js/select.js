$(function () {
    $('tr:odd').css('background', '#f2f2f2');
    $('.list2').click(function () {
        $(this).addClass('lcolor').siblings().removeClass('lcolor')
    })


    // 数据渲染

    function addDatatoDom(page = 1) {
        // var page=1

        

        $.ajax({
            type: "get",
            url: "http://172.16.16.127:8282/getborrow.php",
            data: {
                page: page,
                row: 5,

            },
            dataType: "json",
            success: function (response) {
                let str = "";
                var data=response.data;

                // console.log(response.data);
                var total = response.total;
                var maxpage = response.maxpage;
                for (var i=0;i<data.length;i++) {
                    str += `<tr class="row">
                                    <td class="col-md-1">${data[i].userid}</td>
                                    <td class="col-md-1">${data[i].borrowmoney}</td>
                                    <td class="col-md-1">${parseFloat(data[i].interest).toFixed(2)}%</td>
                                    <td class="col-md-1">${data[i].minbid}元</td>
                                    <td class="col-md-1">${data[i].days}天</td>
                                    <td class="col-md-1">${data[i].title}</td>
                                    <td class="col-md-2">${data[i].info}</td>
                                    <td class="col-md-1">${data[i].borrowtime}天</td>
                                    <td class="col-md-1">${data[i].repaytype==0?"按月分期":"按月到期"}</td>
                                    <td class="col-md-1">${data[i].ownmoney}元</td>
                                    <td class="col-md-1">
                                            <span><a href="?bid=${data[i].id}#borrowinfo">投标信息</a></span>
                                    </td>
                                </tr>`

                                // console.log(1,response[i].ownmoney)
                }
                $("#addlist").html(str);
                












                // pageMe.js 使用方法
                $("#page").paging({
                    pageNum: page, // 当前页面
                    totalNum: maxpage, // 总页码
                    totalList: total, // 记录总数量
                    callback: function (num) { //回调函数
                        addDatatoDom(num)
                    }
                });

            }
        });













    }
    addDatatoDom()







    // 分页



















})