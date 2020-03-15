window.onload = function() {
	function getRandomNumber(size) {
		return Math.floor(Math.random()*size)
	}

	function getDistance(event, target) {
		let difX = event.offsetX - target.x;
		let difY = event.offsetY - target.y;
		return Math.sqrt((difX*difX)+(difY*difY))
	}

	function getHint(distance) {
		if (distance < 30) {
			return 'Сгоришь'
		}
		if (distance < 50) {
			return 'Очень горячо'
		}
		if (distance < 100) {
			return 'Горячо'
		}
		if (distance < 200) {
			return 'Тепло'
		}
		if (distance < 400) {
			return 'Холодно'
		}
		if (distance < 600) {
			return 'Очень холодно'
		}
		if (distance < 700) {
			return 'Мороз'
		}
	}
	let width = $('#map').width()
	let height = $('#map').height()
	let clicks = 15;

	let target = {
		x:getRandomNumber(width),
		y:getRandomNumber(height)
	};

	$('#map').css('cursor', 'pointer');
	$('#map').click(function(event) {
		clicks--
		let distance = getDistance(event, target)
		let hint = getHint(distance);
		$('#heading').text(hint);
		$('#clicks').text(clicks);
		if (distance < 15) {
			$('#heading').text("Вы выиграли!");
			$('#clicks').text("");
		}
		if (clicks < 0) {
			$('#heading').text("Вы проиграли!");
			$('#clicks').text("");
		}
	});
}