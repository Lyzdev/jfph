<?php
	// 借款
	include 'conn.php';
	include 'cross.php';
	header('Content-Type: text/html;charset=utf-8'); 

	$userid = $_GET['acc'];	//借款人用户名
	$borrowmoney = $_GET['borrowmoney'];	//借款金额
	$interest = $_GET['interest'];	//借款利息
	$borrowtime = $_GET['borrowtime'];	//借款期限 单位：月
	$repaytype = $_GET['repaytype'];	//还款方式 0：按月分期 1：按月到期
	$minbid = $_GET['minbid'];		//最小投标
	$bouns = $_GET['bouns'];		//投标奖金
	$days = $_GET['days'];			//招标天数（在网站上挂多少天）
	$title = $_GET['title'];		//借款标题
	$info = $_GET['info'];			//借款描述
	
	

	//拼接sql语句
	$sql = "INSERT INTO borrow(userid,borrowmoney,interest,minbid,days,title,info,borrowtime,repaytype,bouns) VALUES('$userid','$borrowmoney','$interest','$minbid','$days','$title','$info','$borrowtime',$repaytype,$bouns)";

	//执行sql语句
	$data = mysqli_query($conn,$sql );
	if($data){
		echo 'ok';
	}else{
		echo 'fail';
	}

?>