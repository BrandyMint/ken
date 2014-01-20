<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<html>
<head>
    <title>(4) Система управления предприятием «Eluda»</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" type="text/css" href="/css/normalize.css">
	<link rel="stylesheet" type="text/css" href="http://cdn.kendostatic.com/2012.3.1114/styles/kendo.common.min.css">
	<link rel="stylesheet" type="text/css" href="http://cdn.kendostatic.com/2012.3.1114/styles/kendo.default.min.css">
	<link rel="stylesheet" type="text/css" href="/css/icons.css">
	<link rel="stylesheet" type="text/css" href="/css/templates.css">
	<script type='text/javascript' src='http://code.jquery.com/jquery-1.8.2.js'></script>
	<script type='text/javascript' src="http://cdn.kendostatic.com/2012.3.1114/js/kendo.all.min.js"></script>
	<script type="text/javascript" src="/js/jquery.disable.text.select.js"></script>
	<script type='text/javascript' src="/js/menu.js"></script>
	<script src="/js/jquery.ui.position.js" type="text/javascript"></script>
    <script src="/js/jquery.contextMenu.js" type="text/javascript"></script>
	<script src="/js/cultures/kendo.culture.ru-RU.js"></script>
<script type="text/javascript">
kendo.culture("ru-RU");

	var SelectThemeChooser;
	try {
        SelectThemeChooser = sessionStorage.getItem("kendoSkin");
    } catch(err) {}
    SelectThemeChooser = SelectThemeChooser || "default";
	try {
        sessionStorage.setItem("kendoSkin", SelectThemeChooser);
    } catch(err) {}
	document.write('<link rel="stylesheet" type="text/css" href="http://cdn.kendostatic.com/2012.3.1114/styles/kendo.'+SelectThemeChooser+'.min.css">');

</script>
</head>
<body>
<div class="block k-widget" style="border-width: 0px;height:100%;">
<h3>Выбор скинов: </h3><div class="fon"><ul id="themeChooser"><li></li></ul></div>
<h3>Верхняя панель:</h3><div class="fon"><ul id="TopPanel"><li></li></ul></div>
<h3>Левая панель:</h3><div class="fon"><ul id="LeftPanel"><li></li></ul></div>
<h3>Ширина левой панели:</h3><div class="fon"><input id="slider" /></div>
<p>
<br>
<button id="save" class="k-button">Сохранить</button>
</p>
</div>
<style>
body, html {height:100%;overflow: hidden;}
.fon {background-color: white;padding: 5px;color:#293135;display:table;}
</style>
<script>
$(document).ready(function() {
	/******************************** Левая панель **********************************/
	
	var leftmenuvar;
	try {
        leftmenuvar = sessionStorage.getItem("leftmenu");
    } catch(err) {}
    leftmenuvar = leftmenuvar || "open";
	
	try {
        sessionStorage.setItem("leftmenu", leftmenuvar);
	} catch(err) {}
	
	LeftPanel(topmenu);
	function LeftPanel(topmenu){
		var themes = [
                { text: "Открыта", value: "open" },
                { text: "Закрыта", value: "close" }
            ],
		template = kendo.template("<li data-value='#=value#' class='skin-#=value#'><span>#= text #</span></li>");
		$("#LeftPanel").html(kendo.render(template, themes)).on("click", "li", function() {
			var li = $(this).children("span").addClass("k-state-selected").end(),
                        leftmenuvar = themes[li.index()];
                li.siblings().children("span").removeClass("k-state-selected");
			try {
                sessionStorage.setItem("leftmenu", leftmenuvar.value);
			} catch(err) {}
				
			});
		$("#LeftPanel .skin-"+leftmenuvar+" span").addClass("k-state-selected");
	}
	
	/****************************** Размер левой панели ******************************/
	var leftmenuvarsize;
	try {
        leftmenuvarsize = sessionStorage.getItem("leftmenusize");
    } catch(err) {}
    leftmenuvarsize = leftmenuvarsize || "220px";
	
	try {
        sessionStorage.setItem("leftmenusize", leftmenuvarsize);
	} catch(err) {}
	
	$("#slider").kendoSlider({
        change: function(e){
		try {
			sessionStorage.setItem("leftmenusize", e.value);
		} catch(err) {}
		},
        min: 185,
        max: 300,
        smallStep: 1,
        largeStep: 10,
        value: leftmenuvarsize
    });
	/******************************** Верхняя панель **********************************/
	var topmenu;
	try {
        topmenu = sessionStorage.getItem("topmenu");
    } catch(err) {}
    topmenu = topmenu || "close";
	
	try {
        sessionStorage.setItem("topmenu", topmenu);
	} catch(err) {}
	TopPanel(topmenu);
	function TopPanel(topmenu){
		var themes = [
                { text: "Открыта", value: "open" },
                { text: "Закрыта", value: "close" }
            ],
		template = kendo.template("<li data-value='#=value#' class='skin-#=value#'><span>#= text #</span></li>");
		$("#TopPanel").html(kendo.render(template, themes)).on("click", "li", function() {
			var li = $(this).children("span").addClass("k-state-selected").end(),
                        topmenu = themes[li.index()];
                li.siblings().children("span").removeClass("k-state-selected");
			try {
                sessionStorage.setItem("topmenu", topmenu.value);
			} catch(err) {}
				
			});
		$("#TopPanel .skin-"+topmenu+" span").addClass("k-state-selected");
	}
	/******************************** Смена скинов ************************************/
	themeChooser(SelectThemeChooser);
	function themeChooser(SelectThemeChooser){
	   var themes = [
                { text: "Black", value: "black" },
                { text: "Blue Opal", value: "blueopal" },
                { text: "Default", value: "default" },
                { text: "Metro", value: "metro" },
                { text: "Silver", value: "silver" }
            ],
			template = kendo.template("<li data-value='#=value#' class='skin-#=value#'><span>#= text #</span></li>");
			$("#themeChooser").html(kendo.render(template, themes)).on("click", "li", function() {
				var li = $(this).children("span").addClass("k-state-selected").end(),
                           SelectThemeChooser = themes[li.index()];
                li.siblings().children("span").removeClass("k-state-selected");
				try {
                sessionStorage.setItem("kendoSkin", SelectThemeChooser.value);
				} catch(err) {}
				//window.location.reload();
			});
			$("#themeChooser .skin-"+SelectThemeChooser+" span").addClass("k-state-selected");
    };
	/********************************** Сохранить *****************************************/
	$('#save').click(function(){
		self.parent.location="/";
	})
	
	/**************************************************************************************/
});
</script>
</body>
</html>