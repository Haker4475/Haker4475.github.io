const now = new Date();
let imgSrc = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fool.com%2Fthe-ascent%2Fcredit-cards%2Farticles%2Fhow-to-add-an-authorized-user-to-a-chase-credit-card%2F&psig=AOvVaw3ZdNyAZUBejf_LKcXlZ1qm&ust=1583143710922000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjao4-E-ecCFQAAAAAdAAAAABAD"

function readURL(input) {
	if (input.files && input.files[0]) {
		let reader = new FileReader();

		reader.onload = function(e) {
			imgSrc = e.target.result;
		}

		reader.readAsDataURL(input.files[0])
	}
}
window.onload = function() {
	let month = +now.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}
	let day = now.getDate();
	if (day < 10) {
		day = '0' + day;
	}
	let nowDate = now.getFullYear()+'-'+month+'-'+day;
	$('#age').attr('max', nowDate);
}

function calcAge(date) {
	let arr = date.split('-');
	let year = +arr[0];
	let month = +arr[1];
	let day = +arr[2];


	let age = now.getFullYear() - year;
	// Высчитываем возраст
	if (month > now.getMonth()+1) {
		age--;
	}
	if (month == now.getMonth()+1) {
		if (day > now.getDate()) {
			age--;
		}
	}

	if (age < 0) {
		age = "Вы ещё не родились!"
	}

	return age;
}

function getGames() {
	let games = [];
	$('input[type="checkbox"]:checked').each(function() {
		games.push($(this)[0].id);
	});
	return games;
}

function gameLogo(selected) {
	let games = [
	{id:"CS", logo:"https://steamuserimages-a.akamaihd.net/ugc/84847733098386451/B6AE526179AD8E675DF6D274F8EC81BA2D06E56F/?imw=1022&imh=1024&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"},
	{id:"MC", logo:"https://i.pinimg.com/originals/37/72/1c/37721c5e8c762599a03e0260a1211f83.png"},
	{id:"OW", logo:"https://www.3ona51.com/images/products/models/overwatch-logo/600.jpg"},
	{id:"WF", logo:"https://upload.wikimedia.org/wikipedia/ru/b/be/Warface.png"},
	{id:"COD", logo:"https://i.pinimg.com/originals/e6/5c/b6/e65cb67a2afdd0a00190bf937116cdd7.png"},
	{id:"BF", logo:"https://ih0.redbubble.net/image.568270217.4809/ap,550x550,12x12,1,transparent,t.u1.png"},
	{id:"WOT", logo:"https://vinyl-market.ru/images/shop_items/305.jpg"},
	{id:"HL", logo:"https://res.cloudinary.com/teepublic/image/private/s--JSu91nFV--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1566611961/production/designs/5712965_0.jpg"},
	{id:"PL", logo:"https://s-media-cache-ak0.pinimg.com/originals/0e/79/c5/0e79c590cd66b6140e9505201045b7de.png"},
	{id:"GTA", logo:"https://lh3.googleusercontent.com/proxy/GYMuuQBcht56jq19btDIlRUACePcp69DVfDYy_55vtSeszzBc4q8CXNF7BBZNUnpz-Gbwo4vzuJeajYsW9kJGZsouf-gJAXEu_zfNkXfis8I9KJB1xSQXb2J8hJOQFuGAr2_b2hpxE2AlZOKYy6_qwcV"},
	];
	let images = '';
	for (var i = 0; i < selected.length; i++) {
		let imgLink = games.find(item => item.id == selected[i]).logo;
		images += '<img class="img" src="'+imgLink+'">'
	}
	return images;
}

function main() {
	// Возраст
	let date = $('#age').val();
	const age = calcAge(date)
	// Имя
	const name = $('#name').val();
	// Фамилия
	const f_name = $('#f_name').val();
	// Телефон
	const phone = $('#phone').val();
	// E-mail
	const email = $('#email').val();
	// Пол
	let gender = $('input[name="gender"]:checked')[0].id;
	if (gender == 'gender1') {
		gender = 'Мужской';
	}
	else if (gender == 'gender2') {
		gender = 'Женский';
	}
	else gender = 'Другой';
	// Город
	const city = $('#city>option:selected').text()
	// Расскажите о себе
	const about = $('#about').val()
	// Игры в которые играли
	let games = getGames()
	let images;
	if (games.length) {
		images = gameLogo(games)
	}
	// Фото
	console.log(images)
	// Удаляем форму
	$('form').remove();
	
	// Создаём анкету

	//Создаём основной контейнер
	$('body').append('<main>');
	let main = $('main');
	// Добавляем заголовок
	main.append('<h1 id="heading">WANTED</h1>');
	// Добавляем картинку

	// Добавляем текст фамилию и имя
	main.append('<h2 class="contact">'+name+'</h2>');
	main.append('<h2 class="contact">'+f_name+'</h2>');
	if (city != "Выберите ваш город") main.append('<h1>Город: '+city+'</h1>');
	if (about.length > 0) {
		main.append('<p class="about">'+m_name+'</p>');
	}
	if (games.length) {
		main.append(images);
	}
}