const home = document.querySelector('.home');
const header = document.querySelector('header');

//fonctionnement du menu
const menuIcon = document.querySelector('.burger-icon');
const menu = document.querySelector('.menu');
menuIcon.addEventListener('click', function() {
	menuIcon.classList.toggle('active');
	if (menuIcon.classList.contains('active')) {
		menu.style.display = 'block';
		if (home && window.scrollY < header.offsetTop) {
			menu.style.top = window.scrollY + 'px';
			menuIcon.style.position = 'absolute';
		}
		setTimeout(function() {
			menu.classList.add('active');
			if (home && window.scrollY < header.offsetTop) {
				menuIcon.style.top = window.scrollY + 'px';
			}
		}, 100);
	} else {
		menu.classList.remove('active');
		menuIcon.style.position = 'relative';
		if (home && window.scrollY < header.offsetTop) {
			menuIcon.style.top = '0';
		}
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
	if (!home) {
		window.addEventListener('scroll', function() {
			if (window.scrollY > 1) {
				navigation.parentNode.classList.add('scrolled');
				navigation.parentNode.querySelector('.suivi').style.width =
					(window.scrollY + window.innerHeight) /
						document.body.getBoundingClientRect().height *
						100 +
					'%';
			} else {
				navigation.parentNode.classList.remove('scrolled');
				navigation.parentNode.querySelector('.suivi').style.width = '0';
			}
		});
	}
}
// menu sur la home & scroll down
if (home) {
	homeMenu();
	scrollDown();
}
function homeMenu() {
	const offsetHeader = header.offsetTop - 30;
	const content = document.querySelector('.main-content');
	window.addEventListener('scroll', function() {
		if (window.scrollY > offsetHeader) {
			header.classList.add('scrolling');
			content.style.marginTop = header.getBoundingClientRect().height + '30px';
		} else {
			header.classList.remove('scrolling');
			content.style.marginTop = '0';
		}
	});
}
function scrollDown() {
	const scroll = document.querySelector('.landing-screen-scroll');
	scroll.addEventListener('click', function() {
		header.scrollIntoView({ behavior: 'smooth' });
	});
}
// fonctionnement des carousels
const carousels = document.querySelectorAll('.carousel-realisations');

carousels.forEach(function(carousel) {
	let slide = 1;
	const container = carousel.querySelector('.realisations-liste');
	const liste = container.querySelectorAll('.realisation');
	////// Zoom au clic sur une image
	const imgs = container.querySelectorAll('img');
	zoomImg(imgs);
	// centrer la deuxième slide
	const secondSlide = container.querySelector('.realisation[data-real="1"]');
	secondSlide.classList.add('active');
	const defaultCenter =
		(container.getBoundingClientRect().width - secondSlide.getBoundingClientRect().width) / 2 - 25;
	if (window.innerWidth < 768) {
		container.style.transform = 'translateX(calc(-70% + ' + defaultCenter + 'px))';
	} else {
		container.style.transform = 'translateX(calc(-45% + ' + defaultCenter + 'px))';
	}
	// au clic sur la flèche précédente
	const previous = carousel.querySelector('.carousel-realisations-controls .control-left');
	previous.addEventListener('click', function() {
		next.style.opacity = '1';
		if (slide <= 0) {
			slide = liste.length - 1;
		} else {
			slide--;
		}
		carousel.querySelector('.realisation.active').classList.remove('active');
		let activeSlide = carousel.querySelector('.realisation[data-real="' + slide + '"]');
		activeSlide.classList.add('active');
		// translation
		let centered =
			(container.getBoundingClientRect().width - activeSlide.getBoundingClientRect().width) / 2 -
			25;
		let translateSlide;
		if (window.innerWidth < 768) {
			translateSlide = 70 * slide;
		} else {
			translateSlide = 45 * slide;
		}
		container.style.transform = 'translateX(calc(-' + translateSlide + '% + ' + centered + '25px))';
	});
	// au clic sur la flèche suivante
	const next = carousel.querySelector('.carousel-realisations-controls .control-right');
	next.addEventListener('click', function() {
		previous.style.opacity = '1';
		if (slide >= liste.length - 1) {
			slide = 0;
		} else {
			slide++;
		}
		carousel.querySelector('.realisation.active').classList.remove('active');
		let activeSlide = carousel.querySelector('.realisation[data-real="' + slide + '"]');
		activeSlide.classList.add('active');
		// translation
		let centered =
			(container.getBoundingClientRect().width - activeSlide.getBoundingClientRect().width) / 2 -
			25;
		let translateSlide;
		if (window.innerWidth < 768) {
			translateSlide = 70 * slide;
		} else {
			translateSlide = 45 * slide;
		}
		container.style.transform = 'translateX(calc(-' + translateSlide + '% + ' + centered + '25px))';
	});
});
// zoom au clic sur une image
function zoomImg(images) {
	const popIn = document.querySelector('.pop-in');
	const popInImg = popIn.querySelector('.pop-in-img');
	const close = popIn.querySelector('.pop-in-close');
	images.forEach(function(img) {
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
}
const dev = document.querySelector('.developpement');
if (dev) {
	zoomDev();
}
function zoomDev() {
	const imgs = document.querySelectorAll('.long img');
	zoomImg(imgs);
}
// sous menu interne
const sousTitres = document.querySelectorAll('.sous-titres span');
const titres = document.querySelectorAll('h2');
let index = 0;
sousTitres.forEach(function(sousTitre) {
	sousTitre.dataset.index = index;
	sousTitre.addEventListener('click', function() {
		titres[sousTitre.dataset.index].scrollIntoView({ behavior: 'smooth', block: 'start' });
	});
	index++;
});
