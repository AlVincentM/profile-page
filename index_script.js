$(document).ready(function() {
	$("#about").scroll(function() {
		$("#about").addClass(function() {
			return "animate-fade-in";
		});
	});
});