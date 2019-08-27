<?php
	// 1. 连接数据库
	// 2. 进行数据的增删改查
	// 3. 响应
    header('Content-Type: text/html;charset=utf-8');
    include './cross.php';


	// 1. 连接数据库
	$conn = mysqli_connect('localhost','root','root','jfph',3306) or die('Error');


	// 2. 进行数据的增删改查
		//获取get参数  获取post参数
		// $_GET['a']  $_POST['a']
	$username = $_GET['username'];	//获取用户名
	//书写sql语句
	$sql = "SELECT * FROM user WHERE username='$username'";
	//执行sql语句
	$data = mysqli_query($conn, $sql);

	// 3. 响应
	//根据返回数据的数量，进行登录判断
	if(mysqli_num_rows($data) > 0){
		echo 'fail';
	}else{
		echo 'ok';
    }
    
?>