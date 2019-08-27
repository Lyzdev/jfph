<?php
	// 1. 连接数据库
	// 2. 执行sql
	// 3. 拿到数据，响应

	include 'conn.php';	
	include 'cross.php';


	$nickname = $_GET['nickname'];
	$email = $_GET['email'];
	$phone = $_GET['phone'];
	$id = $_GET['id'];


	//2. 执行sql语句
	$sql = "UPDATE user SET nickname='$nickname',email='$email',phone=$phone WHERE id=$id";
	$data = mysqli_query($conn, $sql);
	if($data){
		echo 'ok';
	}else{
		echo 'fail';
	}