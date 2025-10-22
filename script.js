document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  let index = 0;

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
    });
  }

  function showSlide(i) {
    if (i >= images.length) index = 0;
    else if (i < 0) index = images.length - 1;
    slides.style.transform = `translateX(${-index * (100 / images.length)}%)`;
  }

  if (next && prev) {
    next.addEventListener('click', () => {
      index++;
      showSlide(index);
    });
    prev.addEventListener('click', () => {
      index--;
      showSlide(index);
    });
    setInterval(() => {
      index++;
      showSlide(index);
    }, 4000);
  }
});
