<?php
	include 'conn.php';
	include 'cross.php';


	//获取用户ID
	$id = $_GET["id"];
	$chargemoney = $_GET["chargemoney"];//用户本次充值的金额
	$sql = "UPDATE user SET totalmoney=totalmoney+$chargemoney, usablemoney=usablemoney+$chargemoney WHERE id=$id";
	$data = mysqli_query($conn, $sql);

	if($data){
		//充值成功
		echo 'ok';	//服务器常见正确和失败  0失败 1成功    ok成功  fail、error失败
	}else{
		//充值失败
		echo 'fail';	
	}

?>