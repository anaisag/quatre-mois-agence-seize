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
// barre de navigation
const navigation = document.querySelector('.navigation');
if (navigation) {
	scrollNavigation();
}
function scrollNavigation() {
	window.addEventListener('scroll', function() {
		if (window.scrollY > 1) {
			navigation.parentNode.classList.add('scrolled');
			navigation.parentNode.querySelector('.suivi').style.width =
				(window.scrollY + window.innerHeight) / document.body.getBoundingClientRect().height * 100 +
				'%';
		} else {
			navigation.parentNode.classList.remove('scrolled');
			navigation.parentNode.querySelector('.suivi').style.width = '0';
		}
	});
}
// fonctionnement des carousels
const carousels = document.querySelectorAll('.carousel-realisations');

carousels.forEach(function(carousel) {
	let slide = 2;
	const container = carousel.querySelector('.realisations-liste');
	const liste = container.querySelectorAll('.realisation');
	////// Zoom au clic sur une image
	const imgs = container.querySelectorAll('img');
	const popIn = document.querySelector('.pop-in');
	const popInImg = popIn.querySelector('.pop-in-img');
	const close = popIn.querySelector('.pop-in-close');
	imgs.forEach(function(img) {
		img.addEventListener('click', function() {
			popInImg.src = img.src;
			popIn.style.display = 'flex';
			popIn.classList.add('active');
		});
	});
	close.addEventListener('click', function() {
		popIn.classList.remove('active');
		popIn.style.display = 'none';
	});
	// centrer la deuxième slide
	const secondSlide = container.querySelector('.realisation[data-real="2"]');
	secondSlide.classList.add('active');
	const defaultCenter =
		(container.getBoundingClientRect().width - secondSlide.getBoundingClientRect().width) / 2 - 25;
	container.style.transform = 'translateX(-' + defaultCenter + 'px)';
	// au clic sur la flèche précédente
	const previous = carousel.querySelector('.carousel-realisations-controls .control-left');
	previous.addEventListener('click', function() {
		next.style.opacity = '1';
		if (slide <= 1) {
			slide = liste.length;
		} else {
			slide--;
		}
		carousel.querySelector('.realisation.active').classList.remove('active');
		carousel.querySelector('.realisation[data-real="' + slide + '"]').classList.add('active');
	});
	// au clic sur la flèche suivante
	const next = carousel.querySelector('.carousel-realisations-controls .control-right');
	next.addEventListener('click', function() {
		previous.style.opacity = '1';
		if (slide >= liste.length) {
			slide = 1;
		} else {
			slide++;
		}
		carousel.querySelector('.realisation.active').classList.remove('active');
		carousel.querySelector('.realisation[data-real="' + slide + '"]').classList.add('active');
	});
});
