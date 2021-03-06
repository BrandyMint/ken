var i18n = {
	F5: "Внимание! Вы изменили содержимое некоторых полей ввода. Перезагрузка страницы приведёт к утере этой информации. Продолжить?"
};

function i18n_calendar (Calendar) {

	Calendar._DN = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
	Calendar._MN = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
	Calendar._TT = {
		"TOGGLE"          : "Сменить день начала недели (ПН/ВС)",
		"PREV_YEAR"       : "Пред. год (удерживать для меню)",
		"PREV_MONTH"      : "Пред. месяц (удерживать для меню)",
		"GO_TODAY"        : "На сегодня",
		"NEXT_MONTH"      : "След. месяц (удерживать для меню)",
		"NEXT_YEAR"       : "След. год (удерживать для меню)",
		"SEL_DATE"        : "Выбрать дату",
		"DRAG_TO_MOVE"    : "Перетащить",
		"PART_TODAY"      : " (сегодня)",
		"MON_FIRST"       : "Показать понедельник первым",
		"SUN_FIRST"       : "Показать воскресенье первым",
		"CLOSE"           : "Закрыть",
		"TODAY"           : "Сегодня",
		"DEF_DATE_FORMAT" : "y-mm-dd",
		"TT_DATE_FORMAT"  : "D, M d",
		"WK"              : "нед" 
	};

}

kendo.ui.Upload.prototype.options.localization = 
  $.extend(kendo.ui.Upload.prototype.options.localization, {
	select: "Выберите...",
    cancel: "Отмена",
    retry: "Повторить",
    remove: "Удалить",
    uploadSelectedFiles: "Загрузить файлы",
    dropFilesHere: "Для загрузки, перетащите файл сюда.",
    statusUploading: "загрузка",
    statusUploaded: "загрузил",
    statusFailed: "не удалось"
});

kendo.culture("ru-RU");
