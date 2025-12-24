// Smooth scroll for navigation and scroll indicator
document.addEventListener('DOMContentLoaded', function() {

	// Smooth scrolling for all anchor links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});

	// Intersection Observer for fade-in animations
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -100px 0px'
	};

	const observer = new IntersectionObserver(function(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			}
		});
	}, observerOptions);

	// Observe all fade-in elements
	document.querySelectorAll('.fade-in').forEach(element => {
		observer.observe(element);
	});

	// Animate skill bars when they come into view
	const skillObserver = new IntersectionObserver(function(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const progressBar = entry.target.querySelector('.skill-progress');
				if (progressBar) {
					const progress = progressBar.getAttribute('data-progress');
					progressBar.style.width = progress + '%';
				}
			}
		});
	}, observerOptions);

	document.querySelectorAll('.skill-card').forEach(card => {
		skillObserver.observe(card);
	});

	// Animate language bars
	const languageObserver = new IntersectionObserver(function(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const fills = entry.target.querySelectorAll('.language-fill');
				fills.forEach(fill => {
					const lang = fill.getAttribute('data-lang');
					fill.style.width = lang + '%';
				});
			}
		});
	}, observerOptions);

	const languagesSection = document.querySelector('.languages-section');
	if (languagesSection) {
		languageObserver.observe(languagesSection);
	}

	// Active navigation highlighting based on scroll position
	const sections = document.querySelectorAll('section[id]');
	const navItems = document.querySelectorAll('.nav-item');

	function highlightNavigation() {
		const scrollPosition = window.scrollY + 200;

		sections.forEach(section => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;
			const sectionId = section.getAttribute('id');

			if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
				navItems.forEach(item => {
					item.style.background = 'rgba(255, 255, 255, 0.1)';
					if (item.getAttribute('href') === `#${sectionId}`) {
						item.style.background = 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
					}
				});
			}
		});
	}

	window.addEventListener('scroll', highlightNavigation);

	// Parallax effect for hero section
	window.addEventListener('scroll', function() {
		const scrolled = window.pageYOffset;
		const hero = document.querySelector('.hero-content');
		if (hero && scrolled < window.innerHeight) {
			hero.style.transform = `translateY(${scrolled * 0.5}px)`;
			hero.style.opacity = 1 - (scrolled / window.innerHeight);
		}
	});

	// Interactive skill cards - color cycling
	const skillCards = document.querySelectorAll('.skill-card');
	const gradients = [
		'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
		'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
		'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
		'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
		'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
	];

	skillCards.forEach((card, index) => {
		card.addEventListener('mouseenter', function() {
			const before = this.querySelector('.skill-progress');
			if (before) {
				before.style.background = gradients[index % gradients.length];
			}
		});

		card.addEventListener('mouseleave', function() {
			const before = this.querySelector('.skill-progress');
			if (before) {
				before.style.background = 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
			}
		});
	});

	// Add floating particles effect
	createParticles();

	// Cursor trail effect
	let cursorTrail = [];
	const maxTrailLength = 20;

	document.addEventListener('mousemove', function(e) {
		if (window.innerWidth > 768) { // Only on desktop
			createCursorDot(e.pageX, e.pageY);
		}
	});

	function createCursorDot(x, y) {
		const dot = document.createElement('div');
		dot.className = 'cursor-dot';
		dot.style.cssText = `
			position: absolute;
			left: ${x}px;
			top: ${y}px;
			width: 8px;
			height: 8px;
			background: rgba(0, 245, 255, 0.6);
			border-radius: 50%;
			pointer-events: none;
			z-index: 9999;
			transition: all 0.5s ease;
		`;

		document.body.appendChild(dot);
		cursorTrail.push(dot);

		if (cursorTrail.length > maxTrailLength) {
			const oldDot = cursorTrail.shift();
			oldDot.remove();
		}

		setTimeout(() => {
			dot.style.opacity = '0';
			dot.style.transform = 'scale(0)';
			setTimeout(() => dot.remove(), 500);
		}, 100);
	}

	// Typing animation restart on scroll to hero
	let typingAnimationPlayed = false;

	window.addEventListener('scroll', function() {
		if (window.scrollY < 100 && !typingAnimationPlayed) {
			const subtitle = document.querySelector('.hero-subtitle');
			if (subtitle) {
				subtitle.style.animation = 'none';
				setTimeout(() => {
					subtitle.style.animation = 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite';
				}, 10);
			}
			typingAnimationPlayed = true;
		} else if (window.scrollY > 100) {
			typingAnimationPlayed = false;
		}
	});

	// Easter egg: Konami code
	let konamiCode = [];
	const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

	document.addEventListener('keydown', function(e) {
		konamiCode.push(e.key);
		konamiCode = konamiCode.slice(-10);

		if (konamiCode.join('') === konamiSequence.join('')) {
			activateEasterEgg();
		}
	});

	function activateEasterEgg() {
		document.body.style.animation = 'rainbow 2s infinite';

		const style = document.createElement('style');
		style.textContent = `
			@keyframes rainbow {
				0% { filter: hue-rotate(0deg); }
				100% { filter: hue-rotate(360deg); }
			}
		`;
		document.head.appendChild(style);

		setTimeout(() => {
			document.body.style.animation = '';
			style.remove();
		}, 10000);
	}

	// Card tilt effect on mouse move
	const cards = document.querySelectorAll('.card');

	cards.forEach(card => {
		card.addEventListener('mousemove', function(e) {
			const rect = this.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const centerX = rect.width / 2;
			const centerY = rect.height / 2;

			const rotateX = (y - centerY) / 20;
			const rotateY = (centerX - x) / 20;

			this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
		});

		card.addEventListener('mouseleave', function() {
			this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
		});
	});

	// Timeline item animation on scroll
	const timelineItems = document.querySelectorAll('.timeline-item');
	const timelineObserver = new IntersectionObserver(function(entries) {
		entries.forEach((entry, index) => {
			if (entry.isIntersecting) {
				setTimeout(() => {
					entry.target.style.opacity = '1';
					entry.target.style.transform = 'translateX(0)';
				}, index * 100);
			}
		});
	}, { threshold: 0.2 });

	timelineItems.forEach(item => {
		item.style.opacity = '0';
		item.style.transform = 'translateX(-50px)';
		item.style.transition = 'all 0.5s ease';
		timelineObserver.observe(item);
	});

	// Random color change for section icons on hover
	const icons = document.querySelectorAll('.icon-3d');
	const iconGradients = [
		'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
		'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
		'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
		'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
		'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
	];

	icons.forEach(icon => {
		icon.addEventListener('mouseenter', function() {
			const randomGradient = iconGradients[Math.floor(Math.random() * iconGradients.length)];
			this.style.background = randomGradient;
			this.style.webkitBackgroundClip = 'text';
			this.style.webkitTextFillColor = 'transparent';
			this.style.backgroundClip = 'text';
		});
	});

	// Performance: Reduce animations on low-end devices
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		document.querySelectorAll('*').forEach(element => {
			element.style.animation = 'none';
			element.style.transition = 'none';
		});
	}

	console.log('%c👋 Hey there! Thanks for checking out the code!', 'color: #00f5ff; font-size: 20px; font-weight: bold;');
	console.log('%c🚀 Built with creativity and code by Jordan Alexis', 'color: #ff006e; font-size: 14px;');
});

// Create floating particles in the background
function createParticles() {
	const particleContainer = document.createElement('div');
	particleContainer.className = 'particles';
	particleContainer.style.cssText = `
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: -1;
	`;

	document.body.appendChild(particleContainer);

	for (let i = 0; i < 50; i++) {
		createParticle(particleContainer);
	}
}

function createParticle(container) {
	const particle = document.createElement('div');
	const size = Math.random() * 5 + 2;
	const startX = Math.random() * window.innerWidth;
	const duration = Math.random() * 20 + 10;
	const delay = Math.random() * 5;

	particle.style.cssText = `
		position: absolute;
		width: ${size}px;
		height: ${size}px;
		background: rgba(0, 245, 255, 0.3);
		border-radius: 50%;
		left: ${startX}px;
		bottom: -10px;
		animation: float-up ${duration}s ${delay}s infinite ease-in-out;
		box-shadow: 0 0 10px rgba(0, 245, 255, 0.5);
	`;

	container.appendChild(particle);

	// Add keyframes if not already added
	if (!document.getElementById('particle-animation')) {
		const style = document.createElement('style');
		style.id = 'particle-animation';
		style.textContent = `
			@keyframes float-up {
				0% {
					transform: translateY(0) translateX(0);
					opacity: 0;
				}
				10% {
					opacity: 1;
				}
				90% {
					opacity: 1;
				}
				100% {
					transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px);
					opacity: 0;
				}
			}
		`;
		document.head.appendChild(style);
	}
}

// Add click effect to social buttons
document.addEventListener('click', function(e) {
	if (e.target.closest('.social-btn')) {
		const button = e.target.closest('.social-btn');
		const ripple = document.createElement('span');
		const rect = button.getBoundingClientRect();
		const size = Math.max(rect.width, rect.height);
		const x = e.clientX - rect.left - size / 2;
		const y = e.clientY - rect.top - size / 2;

		ripple.style.cssText = `
			position: absolute;
			width: ${size}px;
			height: ${size}px;
			border-radius: 50%;
			background: rgba(255, 255, 255, 0.5);
			left: ${x}px;
			top: ${y}px;
			transform: scale(0);
			animation: ripple-effect 0.6s ease-out;
			pointer-events: none;
		`;

		button.style.position = 'relative';
		button.appendChild(ripple);

		if (!document.getElementById('ripple-animation')) {
			const style = document.createElement('style');
			style.id = 'ripple-animation';
			style.textContent = `
				@keyframes ripple-effect {
					to {
						transform: scale(2);
						opacity: 0;
					}
				}
			`;
			document.head.appendChild(style);
		}

		setTimeout(() => ripple.remove(), 600);
	}
});
