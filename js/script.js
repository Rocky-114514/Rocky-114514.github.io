// scripts.js

document.getElementById('convertButton').addEventListener('click', function() {
	document.getElementById('postForm').submit();
});

document.addEventListener('DOMContentLoaded', function() {
	const navLinks = document.querySelectorAll('nav ul li a');

	navLinks.forEach(link => {
		link.addEventListener('click', function(event) {
			event.preventDefault();
			const targetId = this.getAttribute('href').substring(1);
			const targetSection = document.getElementById(targetId);

			if (targetSection) {
				window.scrollTo({
					top: targetSection.offsetTop,
					behavior: 'smooth'
				});
			}
		});
	});
});