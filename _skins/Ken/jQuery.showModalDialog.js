(function($) {
	// START of plugin definition
	$.fn.showModalDialog = function(options) {

		// build main options and merge them with default ones
		var optns = $.extend({}, $.fn.showModalDialog.defaults, options);

		if (window.frameElement && window.parent.$ && window.parent.$.showModalDialog) {
			optns.position = [25, 25];
			window.parent.$.showModalDialog (optns);
			return;
		}

		var $div = $('<div />')
		$div.attr({
			'class': 'modal_div'
		});
		$div.css({
			'padding'                    : 0,
			'margin'                     : 0,
			'overflow'                   : 'auto',
			'-webkit-overflow-scrolling' :'touch'
		});

		// create the iframe which will open target page
		var $frame = $('<iframe />');
		$frame.attr({
			'src'       : optns.url,
			'name'      : '_modal_iframe',
			'scrolling' : optns.scrolling
		});

		// set the padding to 0 to eliminate any padding,
		// set padding-bottom: 10 so that it not overlaps with the resize element
		$frame.css({
			'padding'        : 0,
			'margin'         : 0,
			'padding-bottom' : 10
		});

		$div.append ($frame);

		// create jquery dialog using recently created iframe
		var $modalWindow = $div.dialog({
			autoOpen  : true,
			modal     : true,
			width     : optns.width,
			height    : optns.height,
			resizable : optns.resizable,
			position  : optns.position,
			closeText : '',
			overlay   : {
				opacity    : 0.5,
				background : "black"
			},
			open: function(event, ui) {
				// close on click outside dialog
				$('.ui-widget-overlay').bind('click', function () {
					$(this).siblings('.ui-dialog').find('.ui-dialog-content').dialog('close');
				})
			},
			close: function() {
				// save the returnValue in options so that it is available in the callback function
				optns.returnValue = $frame[0].contentWindow.window.returnValue;
				optns.onClose();
			},
			resizeStop: function() { $frame.css("width", "100%"); }
		});

		// set the width of the frame to 100% right after the dialog was created
		// it will not work setting it before the dialog was created
		$div.css ("width", "100%");
		$frame.css ("width", "100%");
		$frame.css ("height", "100%");

		// pass dialogArguments to target page
		$frame[0].contentWindow.window.dialogArguments = optns.dialogArguments;
		// override default window.close() function for target page
		$frame[0].contentWindow.window.close = function() { $modalWindow.dialog('close'); };

		var close_dialog = function() {$modalWindow.dialog('close')};
		$('.ui-dialog-titlebar-close').on("touchend", close_dialog);
		$('.ui-dialog-titlebar-close').on("mouseup", close_dialog);

		$frame.load(function() {
			if ($modalWindow) {

				var maxTitleLength = 50; // max title length
				var title = $(this).contents().find("title").html(); // get target page's title

				if (title.length > maxTitleLength) {
					// trim title to max length
					title = title.substring(0, maxTitleLength) + '...';
				}

				// set the dialog title to be the same as target page's title
				$modalWindow.dialog('option', 'title', 'Выберите из справочника' + ' "' + title + '"');
			}
		});

		return null;
	};

	// plugin defaults
	$.fn.showModalDialog.defaults = {
		url             : null,
		dialogArguments	: null,
		height          : 'auto',
		width           : 'auto',
		position        : [0, 0],
		resizable       : true,
		scrolling       : 'yes',
		onClose         : function() { },
		returnValue     : null
	};
	// END of plugin
})(jQuery);

// do so that the plugin can be called $.showModalDialog({options}) instead of $().showModalDialog({options})
jQuery.showModalDialog = function(options) { $().showModalDialog(options); };

