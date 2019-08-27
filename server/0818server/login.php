<?php
	// 1. 连接数据库
	// 2. 进行数据的增删改查
	// 3. 响应
	header('Content-Type: text/html;charset=utf-8');
	include 'cross.php';
	date_default_timezone_set("Asia/Shanghai");

	// 1. 连接数据库
	$conn = mysqli_connect('localhost','root','root','jfph',3306) or die('Error');


	// 2. 进行数据的增删改查
		//获取get参数  获取post参数
		// $_GET['a']  $_POST['a']
	$username = $_POST['username'];	//获取用户名
	$pwd = $_POST['pwd'];	//获取密码

	//书写sql语句
	$sql = "SELECT * FROM user WHERE username='$username' && pwd='$pwd'";
	//执行sql语句
	$data = mysqli_query($conn, $sql);


	//表单  ajax区别？
	//发送表单后，必须跳转到一个新页面！
	//ajax可以收到服务器响应，不用跳转新页面

	// 3. 响应
	//根据返回数据的数量，进行登录判断
	if(mysqli_num_rows($data) > 0){

		//使用mysqli_fetch_assoc 获取一条$data返回的数据
		$user = mysqli_fetch_assoc($data);

		$time = date("Y-m-d H:i:s");
		$id = $user['id'];
		$usql = "UPDATE user SET lastlogintime='$time' WHERE id=$id;";
		mysqli_query($conn, $usql);

		echo $user['id'];
	}else{
		echo 'fail';
	}
?>