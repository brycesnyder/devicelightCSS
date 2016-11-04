window.addEventListener('devicelight', function(e) {
	var threshold = 50;
	//event.value is the lux value returned by the sensor on the device
	(e.value < threshold) ? swapSheet('dark', 'light') : swapSheet('light', 'dark');

});

// @TODO need to get current filepath of stylesheets
// @TODO need to detemine to & fro swap
var swapSheet = function(to, fro) {
	var stylesheets = document.querySelectorAll('link[rel=stylesheet]');
	for (var i = 0; i < elements.length; i++) {
		if (stylesheets[i].href.indexOf(fro) !== -1) {
			stylesheets[i].setAttribute('href', './css/' + to + '.css');
		}
	}
};
