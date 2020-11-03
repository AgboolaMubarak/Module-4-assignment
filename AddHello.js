(function(window) {
	var AddWord = "Hello";
	var hello = function (name) {
		console.log(AddWord + " " + name);
	}

	window.hello = hello;

})(window);
