let firstAns = 4;
let timer;
window.onload = function() {
	let t = 60;
	timer = setInterval(function() {
		$('#h').text(t);
		t--;
		if (t < 0) {
			clearInterval(timer)
		}
	}, 1000)
}
//Функция,проверяет ответы и меняет вопросы
//Если ответ неправильный, то выводим тот же вопрос
function() {
	
}