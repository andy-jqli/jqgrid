$(function(){
	//页面加载完成之后执行
	pageInit();
});
function pageInit(){
	//创建jqGrid组件
	jQuery("#list2").jqGrid(
			{
				dataType: 'json',//请求数据返回的类型。可选json,xml,txt
				colNames : [ 'Inv No', 'Date', 'Client', 'Amount', 'Tax','Total', 'Notes' ],//jqGrid的列显示名字
				colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
				             {name : '编号',index : 'id',width : 55}, 
				             {name : '往返日期',index : 'invdate',width : 180}, 
				             {name : '目的地',index : 'name asc, invdate',width : 100}, 
				             {name : '主人公',index : 'amount',width : 150,align : "right"}, 
				             {name : '记忆片刻',index : 'tax',width : 280,align : "right"}, 
				             {name : '美食',index : 'tax',width : 220,align : "right"},
				             {name : '景点',index : 'tax',width : 320,align : "right"}, 
				           ],
				rowNum : 10,//一页显示多少条
				rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
				pager : '#pager2',//表格页脚的占位符(一般是div)的id
				sortname : 'id',//初始化的时候排序的字段
				sortorder : "desc",//排序方式,可选desc,asc
				mtype : "post",//向后台请求数据的ajax的类型。可选post,get
				viewrecords : true,
				caption : "JSON Example"//表格的标题名字
			});
	
	var rows = [
		{
			"id": "13",
			"cell": [
				"13",
				"2014.09.15-2014.09.20",
				"北京",
				"Harvey/Wenddy",
				"0.00",
				"驴肉火烧",
				"天安门、故宫、长城、颐和园、香山公园、玉渊潭公园、鸟巢、水立方、世界公园、后海、南锣鼓巷、烟袋斜街"
			]
		}, {
			"id": "12",
			"cell": [
				"12",
				"2015.03.31-2017.06.24",
				"上海",
				"Harvey/Wenddy",
				"840.00",
				"生煎，小笼包",
				"外滩、上海科技馆、动物园、上海野生动物园、世纪公园、滴水湖、中华艺术宫、三甲港、外白渡桥"
			]
		}, {
			"id": "11",
			"cell": [
				"11",
				"2015.09.06-2015.09.08",
				"杭州",
				"Harvey/Wenddy",
				"720.00",
				"西湖醋鱼",
				"西湖、西溪湿地公园"
			]
		}, {
			"id": "10",
			"cell": [
				"10",
				"2016.01.01-2016.01.02",
				"苏州",
				"Harvey/Wenddy",
				"120.00",
				"东坡肉",
				"观前街、金鸡湖"
			]
		}, {
			"id": "9",
			"cell": [
				"9",
				"2016.09.04-2016.09.06",
				"宁波",
				"Harvey/Wenddy",
				"海鲜",
				"宁波老外滩、东钱湖、天一阁"
			]
		}, {
			"id": "8",
			"cell": [
				"8",
				"",
				"昆山",
				"Harvey/Wenddy",
				"200.00",
				"万三猪蹄",
				"周庄"
			]
		}, {
			"id": "7",
			"cell": [
				"7",
				"2017.04.02-2017.04.04",
				"南京",
				"Harvey/Wenddy",
				"134.00",
				"左师傅桂花糕、莲子赤豆元宵",
				"夫子庙、秦淮河、玄武湖、明孝陵、中山陵、1912"
			]
		}, {
			"id": "6",
			"cell": [
				"6",
				"2016.10.19-2016.12.22",
				"福州",
				"Wenddy",
				"60.00",
				"渔粉",
				"三坊七巷、闽江"
			]
		}, {
			"id": "5",
			"cell": [
				"5",
				"2017.02.05-2017.02.12",
				"西安",
				"Harvey/Wenddy",
				"100.00",
				"凉皮、肉夹馍、羊肉泡馍",
				"钟楼、回民街"
			]
		}, {
			"id": "4",
			"cell": [
				"4",
				"2016.04.23-2016.04.24",
				"临安",
				"Harvey/Wenddy",
				"150.00",
				"竹笋",
				"大明山、太湖源"
			]
		}
	];
	for(var i=0;i<rows.length;i++){  
        $("#gridTable").jqGrid('addRowData',i+1,rows[i]);  
    }  
	/*创建jqGrid的操作按钮容器*/
	/*可以控制界面上增删改查的按钮是否显示*/
	jQuery("#list2").jqGrid('navGrid', '#pager2', {edit : false,add : false,del : false});
}