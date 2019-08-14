//fonctionnement du menu
const menuIcon = document.querySelector('.burger-icon');
const menu = document.querySelector('.menu');
menuIcon.addEventListener('click', function() {
	menuIcon.classList.toggle('active');
	if (menuIcon.classList.contains('active')) {
		menu.style.display = 'block';
		setTimeout(function() {
			menu.classList.add('active');
		}, 100);
	} else {
		menu.classList.remove('active');
		setTimeout(function() {
			menu.style.display = 'none';
		}, 500);
	}
});
