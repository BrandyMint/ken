<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Система управления предприятием «Eluda»</title>
	<link rel="stylesheet" type="text/css" href="../css/normalize.css">
	<link rel="stylesheet" type="text/css" href="../styles/kendo.common.min.css">
	<link rel="stylesheet" type="text/css" href="../css/icons.css">
	<link rel="stylesheet" type="text/css" href="../css/templates.css">
	<link rel="stylesheet" type="text/css" title="silver" href="../styles/kendo.silver.min.css">
	<link rel="alternate stylesheet" type="text/css" title="black" href="../styles/kendo.black.min.css">
	<link rel="alternate stylesheet" type="text/css" title="blueopal" href="../styles/kendo.blueopal.min.css">
	<link rel="alternate stylesheet" type="text/css" title="default" href="../styles/kendo.default.min.css">
	<link rel="alternate stylesheet" type="text/css" title="metro" href="../styles/kendo.metro.min.css">
	<script type='text/javascript' src='../js/2012.3.1114/jquery.min.js'></script>
	<script type='text/javascript' src="../js/2012.3.1114/kendo.all.min.js"></script>
	<script type="text/javascript" src="../js/jquery.disable.text.select.js"></script>
	<script type='text/javascript' src="../js/menu.js"></script>
	<script src="../js/jquery.ui.position.js" type="text/javascript"></script>
    <script src="../js/jquery.contextMenu.js" type="text/javascript"></script>
	<script src="../js/cultures/kendo.culture.ru-RU.js"></script>
<script type="text/javascript">
kendo.culture("ru-RU");
</script>
</head>
<body>
<script>
$(document).ready(function () {
	var SelectThemeChooser;
	function sessionStoragesetItem(per, znach) {
		"use strict";
		try {
			sessionStorage.setItem(per, znach);
		} catch (err) { }
	}
	function sessionStoragetItem(per, znach) {
		"use strict";
		var ElSessionStora;
		try {
			ElSessionStora = sessionStorage.getItem(per);
		} catch (err) { }
		ElSessionStora = ElSessionStora || znach;
		sessionStoragesetItem(per, ElSessionStora);
		return ElSessionStora;
	}
	SelectThemeChooser = sessionStoragetItem("kendoSkin", "silver");
	$('link[rel*=style][title]').each(function (i) {
		this.disabled = true;
		if (this.getAttribute('title') === SelectThemeChooser) {this.disabled = false; }
	});
});
</script>
<div class="k-widget" style="border-width: 0px;">
<div id="windtasks" class="window_iframe"></div>
<div id="window_news" class="window_iframe"></div>
<div id="window_messages" class="window_iframe"></div>
<div id="windowtasksr" class="window_iframe"></div>
<div id="window_1"><div id="areacharts"></div></div>
<div id="window_2"><div id="barcharts"></div></div>
<div id="window_3"><div id="createbubblecharts"></div></div>
<div id="window_4"><div id="createdonutcharts"></div></div>
</div>
<script>
$(document).ready(function() {
<?php
	$gadget = explode("|", $_GET['gadget']);
	$position[0] = '{top: "10px", left: "10px"}';
	$position[1] = '{top: "10px", left: "630px"}';
	$position[2] = '{top: "350px", left: "10px"}';
	$position[3] = '{top: "350px", left: "630px"}';
	$position[4] = '{top: "700px", left: "10px"}';
	$position[5] = '{top: "700px", left: "630px"}';
	$position[6] = '{top: "1050px", left: "10px"}';
	$position[7] = '{top: "1050px", left: "630px"}';
	$i = 0;
	foreach ($gadget as &$value) {
		switch($value){
			case 1:
echo '$("#window_news").kendoWindow({
		actions: ["Refresh", "Maximize", "Minimize", "Close"],
		height: "300px",
		width: "600px",
		title: "(3) Новости",
		iframe: true,
		content: "news.htm"
		}).data("kendoWindow").wrapper.css('.$position[$i].');';echo "\n\r";
			break;
			case 2:
echo '$("#window_messages").kendoWindow({
		actions: ["Refresh", "Maximize", "Minimize", "Close"],
		height: "300px",
		width: "600px",
		title: "(1) Переписка/напоминания",
		iframe: true,
		content: "msgs.htm"
		}).data("kendoWindow").wrapper.css('.$position[$i].');';echo "\n\r";
			break;
			case 3:
echo '$("#windtasks").kendoWindow({
		actions: ["Refresh", "Maximize", "Minimize", "Close"],
		height: "300px",
		width: "600px",
		title: "(5) Выполнить",
		iframe: true,
		content: "tasks.htm"
		}).data("kendoWindow").wrapper.css('.$position[$i].');';
		echo "\n\r";
			break;
			case 4:
echo '$("#windowtasksr").kendoWindow({
		actions: ["Refresh", "Maximize", "Minimize", "Close"],
		height: "300px",
		width: "600px",
		title: "(0) На контроле",
		iframe: true,
		content: "tasks.htm"
		}).data("kendoWindow").wrapper.css('.$position[$i].');';echo "\n\r";
			break;
			case 5:
echo '
$("#areacharts").kendoChart({theme: $(document).data("kendoSkin") || "default",title: {text: "Internet Users"},legend: {position: "bottom"},chartArea: {background: ""},seriesDefaults: {type: "area"},series: [{name: "World",data: [15.7, 16.7, 20, 23.5, 26.6]}, {name: "United States",data: [67.96, 68.93, 75, 74, 78]}],valueAxis: {labels: {format: "{0}%"}},categoryAxis: {categories: [2005, 2006, 2007, 2008, 2009]},tooltip: {visible: true,format: "{0}%"}});
		$("#window_1").kendoWindow({
			actions: ["Maximize", "Minimize", "Close"],
			height: "300px",
			width: "600px",
			title: "Area Charts"
		}).data("kendoWindow").wrapper.css('.$position[$i].');';
			break;
			case 6:
echo '
$("#barcharts").kendoChart({theme: $(document).data("kendoSkin") || "default",title: {text: "Internet Users"},legend: {position:"bottom"},chartArea: {background: ""},seriesDefaults: {type: "bar"},series: [{name: "World",data: [15.7, 16.7, 20, 23.5, 26.6] }, {name: "United States", data: [67.96, 68.93, 75, 74, 78]}],valueAxis: {labels: {format: "{0}%"}},categoryAxis: {categories: [2005, 2006, 2007, 2008, 2009]}, tooltip: {visible: true,format: "{0}%"}});
		$("#window_2").kendoWindow({
			actions: ["Maximize", "Minimize", "Close"],
			height: "300px",
			width: "600px",
			title: "Bar Charts"
		}).data("kendoWindow").wrapper.css('.$position[$i].');';
			break;
			case 7:
echo '
$("#createbubblecharts").kendoChart({theme: $(document).data("kendoSkin") || "default", title: {     text: "Job Growth for 2011" }, legend: {     visible: false }, series: [{     type: "bubble",     data: [{ x: -2500, y: 50000, size: 500000, category: "Microsoft"     }, { x: 500, y: 110000, size: 7600000, category: "Starbucks"     }, { x: 7000, y: 19000, size: 700000, category: "Google"     }, { x: 1400, y: 150000, size: 700000, category: "Publix Super Markets"     }, { x: 2400, y: 30000, size: 300000, category: "PricewaterhouseCoopers"     }, { x: 2450, y: 34000, size: 90000, category: "Cisco"     }, { x: 2700, y: 34000, size: 400000, category: "Accenture"     }, { x: 2900, y: 40000, size: 450000, category: "Deloitte"     }, { x: 3000, y: 55000, size: 900000, category: "Whole Foods Market"     }] }], xAxis: {     labels: { format: "{0:N0}", skip: 1     },     axisCrossingValue: -5000,     majorUnit: 2000,     plotBands: [{ from: -5000, to: 0, color: "#00f", opacity: 0.05     }] }, yAxis: {     labels: { format: "{0:N0}"     },     line: { width: 0     } }, tooltip: {     visible: true,     format: "{3}: {2:N0} applications",     opacity: 1 }});
		$("#window_3").kendoWindow({
			actions: ["Maximize", "Minimize", "Close"],
			height: "300px",
			width: "600px",
			title: "Bubble Charts"
		}).data("kendoWindow").wrapper.css('.$position[$i].');';
			break;
			case 8:
echo '
	$("#createdonutcharts").kendoChart({theme: $(document).data("kendoSkin") || "default",title: {    text: "Break-up of Spain Electricity Production for 2008"},legend: {    position: "bottom",    labels: {        template: "#= text # (#= value #%)"    }},seriesDefaults: {    labels: {        visible: true,        position: "outsideEnd",        format: "{0}%"    }},series: [{    type: "donut",    data: [{        category: "Hydro",        value: 22    }, {        category: "Solar",        value: 2    }, {        category: "Nuclear",        value: 49    }, {        category: "Wind",        value: 27    }]}],tooltip: {    visible: true,    format: "{0}%"}});
		$("#window_4").kendoWindow({
			actions: ["Maximize", "Minimize", "Close"],
			height: "300px",
			width: "600px",
			title: "Donut Charts"
		}).data("kendoWindow").wrapper.css('.$position[$i].');';
			break;
			default:
		}
		$i++;
	}
?>
})
</script>
</body>
</html>