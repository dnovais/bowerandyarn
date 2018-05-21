$(document).ready(function(){
	$("#button_libs").on("click", function(){
		$("body").scrollTo("#libs", 500);
	})

	$("#button_main").on("click", function () {
		$("body").scrollTo("#main", 500);
	})

	var libs = [
		{"name": "Jquery", "package_manager": "Bower"},
		{"name": "Jquery ScrollTo", "package_manager": "Bower"},
		{"name": "Lodash", "package_manager": "Yarn"},
		{"name": "Moment", "package_manager": "Yarn"}
	]

	_.each(libs, function(item){
		$("#lib_lists").append('<li>' + item.name + ' - ' + item.package_manager + '</li>')
	})

	function update() {
		$('#clock').html(moment().format('H:mm:ss'));
	}

	setInterval(update, 1000);
})



