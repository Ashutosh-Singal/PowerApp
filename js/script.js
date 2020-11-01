//Right swipe menu
$(document).on("pagecreate", "#mainp", function () {
	$(document).on("swiperight", "#mainp", function (e) {
		if ($(".ui-page-active").jqmData("panel") !== "open") {
			$(".left-panel-main").panel("open");
		}
	});
});
$(document).on("pagecreate", "#yourapp", function () {
	$(document).on("swiperight", "#yourapp", function (e) {
		if ($(".ui-page-active").jqmData("panel") !== "open") {
			$(".left-panel-yourapp").panel("open");
		}
	});
});
$(document).on("pagecreate", "#rec", function () {
	$(document).on("swiperight", "#rec", function (e) {
		// We do this by checking the data that the framework stores on the page element (panel: open).
		if ($(".ui-page-active").jqmData("panel") !== "open") {
			$(".left-panel-curated").panel("open");
		}
	});
});
$(document).on("pagecreate", "#login", function () {
	$(document).on("swiperight", "#login", function (e) {
		// We do this by checking the data that the framework stores on the page element (panel: open).
		if ($(".ui-page-active").jqmData("panel") !== "open") {
			$(".left-panel-login").panel("open");
		}
	});
});
$(document).on("pagecreate", "#signup", function () {
	$(document).on("swiperight", "#signup", function (e) {
		// We do this by checking the data that the framework stores on the page element (panel: open).
		if ($(".ui-page-active").jqmData("panel") !== "open") {
			$(".left-panel-signup").panel("open");
		}
	});
});

function refresh() {
	location.reload()
}