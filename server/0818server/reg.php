<?php
	// 1. 连接数据库
	// 2. 进行数据的增删改查
	// 3. 响应
	header('Content-Type: text/html;charset=utf-8');
	include 'cross.php';


	// 1. 连接数据库
	$conn = mysqli_connect('localhost','root','root','jfph',3306) or die('Error');


	// 2. 进行数据的增删改查
		//获取get参数  获取post参数
		// $_GET['a']  $_POST['a']
	$username = $_POST['username'];	//获取用户名
	$pwd = $_POST['pwd'];	//获取密码
	$email = $_POST['email'];	//获取邮箱
	$nickname = $_POST['nickname'];	//昵称

	//书写sql语句
	$sql = "INSERT INTO user(username,pwd,email,nickname) VALUES('$username','$pwd','$email','$nickname')";
	//执行sql语句
	$data = mysqli_query($conn, $sql);


	//表单  ajax区别？
	//发送表单后，必须跳转到一个新页面！
	//ajax可以收到服务器响应，不用跳转新页面

	// 3. 响应
	//根据返回数据的数量，进行登录判断
	if($data){
		echo 'ok';
	}else{
		echo 'fail';
	}
?>