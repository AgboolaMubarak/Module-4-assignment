(function(window) {
	var AddWord = "Good Bye";
	var Bye = function (name) {
  		console.log(AddWord + " " + name);
	}
	
	window.Bye = Bye;

})(window);