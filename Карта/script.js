window.onloud = function() {
	function getRandomNumber(size) {
		return Math.floor(Math.random()*size)
	}

	function getDistance(event, target) {
		let difX = event.offsetX - target.x;
		let difY = event.offsetY - target.y;
		return Math.sqrt((difX*difX)+(difY*difY))
	}

	let width = $('#map').width()
	let height = $('#map').height()
	let clicks = 0;

	let target = {
		x:getRandomNumber(width),
		y:getRandomNumber(height)
	};

	$('#map').css('cursor', 'pointer');
	$('#map').click(function(event) {
		clicks++
		let distance = getDistance(event, target)
		let hint = getHint(distance);
	});
}