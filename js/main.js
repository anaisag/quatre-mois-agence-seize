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

// fonctionnement des carousels
const carousels = document.querySelectorAll('.carousel-realisations');

carousels.forEach(function(carousel) {
	let slide = 2;
	const container = carousel.querySelector('.realisations-liste');
	const liste = container.querySelectorAll('.realisation');
	const secondSlide = container.querySelector('.realisation[data-real="2"]');
	secondSlide.classList.add('active');
	const defaultCenter =
		(container.getBoundingClientRect().width - secondSlide.getBoundingClientRect().width) / 2 - 25;
	container.style.transform = 'translateX(-' + defaultCenter + 'px)';
	const previous = carousel.querySelector('.carousel-realisations-controls .control-left');
	previous.addEventListener('click', function() {
		next.style.opacity = '1';
		if (slide <= 1) {
			slide = 1;
			previous.style.opacity = '0';
		} else {
			slide--;
			previous.style.opacity = '1';
		}
		carousel.querySelector('.realisation.active').classList.remove('active');
		carousel.querySelector('.realisation[data-real="' + slide + '"]').classList.add('active');
	});
	const next = carousel.querySelector('.carousel-realisations-controls .control-right');
	next.addEventListener('click', function() {
		previous.style.opacity = '1';
		if (slide >= liste.length) {
			slide = liste.length;
			next.style.opacity = '0';
		} else {
			slide++;
			next.style.opacity = '1';
		}
		carousel.querySelector('.realisation.active').classList.remove('active');
		carousel.querySelector('.realisation[data-real="' + slide + '"]').classList.add('active');
	});
});
