var threshold = 50;
var state = {
	to: 'light',
	from: 'dark'
}

window.addEventListener('devicelight', function(e) {
	//event.value is the lux value returned by the sensor on the device
	(e.value < threshold) ? swapSheet() : swapSheet();
});

// @TODO need to get current filepath of stylesheets
var swapSheet = function() {
	state.to = state.from + (state.from = state.to, "");
	var stylesheets = document.querySelectorAll('link[rel=stylesheet]');
	for (var i = 0; i < elements.length; i++) {
		if (stylesheets[i].href.indexOf(state.from) !== -1) {
			stylesheets[i].setAttribute('href', './css/' + state.to + '.css');
		}
	}
};
