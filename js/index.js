$(function(){
	//页面加载完成之后执行
	pageInit();
});
function pageInit(){
	//创建jqGrid组件
	jQuery("#list2").jqGrid(
			{
				url : 'E://projects/JQGrid/data/JSONData.json',//组件创建完成之后请求数据的url
				datatype : "json",//请求数据返回的类型。可选json,xml,txt
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
	/*创建jqGrid的操作按钮容器*/
	/*可以控制界面上增删改查的按钮是否显示*/
	jQuery("#list2").jqGrid('navGrid', '#pager2', {edit : false,add : false,del : false});
}