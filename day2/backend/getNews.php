<?php
header("Access-Control-Allow-Origin:*");
$con = mysql_connect("sql.h211.vhostgo.com","yuanxiaobo","19870616yxb");
if (!$con)
{
  die('Could not connect: ' . mysql_error());
}
mysql_select_db("yuanxiaobo", $con);
$result = mysql_query("select * from news");
// some code
$data = array();
while($row = mysql_fetch_array($result, MYSQL_ASSOC))
{
  //array_pop() 删除数组的最后一个元素（出栈）
  //array_push() 将一个或多个元素插入数组的末尾（入栈）
  array_push($data ,$row);
}

$apiData = array("news"=>$data);
//输出jsonp数据 {"news":[{"title":"qqqqaaa","text":"sssqweqweaaa","id":"29","source":"qqqqqwe"},{"title":"asdsasd","text":"asdasd","id":"31","source":"asdasd"},{"title":"123213qwewe","text":"123123qweqwe","id":"32","source":"12323qeqe"},{"title":"qweqwe","text":"qweqwe","id":"33","source":"qwqwe"}]}
echo json_encode($apiData);
mysql_close($con);
?>