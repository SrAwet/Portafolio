/* Smooth scroll */
const links = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();

  const targetId = this.getAttribute('href');
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 500;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}

/*Observador para activar la animación de Habilidades*/
const observer = new IntersectionObserver(onIntersection, { threshold: 0.5, once: false });
const section = document.querySelector('#habilidades');
observer.observe(section);

function onIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const animElements = entry.target.querySelectorAll('.progress-bar');
      animElements.forEach((animElement) => {
        animElement.classList.add('animacion');
      });
    }
  });
}


//Función para el form de contact
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});