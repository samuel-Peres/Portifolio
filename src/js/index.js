const inner = document.querySelector('.inner');
const quantity = 20;
let angle = 0;
let isDragging = false;
let startX = 0;
let velocity = 0;
let animationFrame;

// Função de rotação
function updateCarousel(newAngle) {
  inner.style.transform = `perspective(1000px) rotateY(${newAngle}deg)`;
}

// Inércia
function animateInertia() {
  velocity *= 0.95;
  angle += velocity;
  updateCarousel(angle);
  if (Math.abs(velocity) > 0.5) {
    animationFrame = requestAnimationFrame(animateInertia);
  }
}

// ----------- Mouse Events (PC) -----------
inner.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  cancelAnimationFrame(animationFrame);
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - startX;
  velocity = deltaX * 0.3;
  angle += velocity;
  startX = e.clientX;
  updateCarousel(angle);
});

window.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  animateInertia();
});

// ----------- Touch Events (Celular) -----------
inner.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  cancelAnimationFrame(animationFrame);
});

inner.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const touchX = e.touches[0].clientX;
  const deltaX = touchX - startX;
  velocity = deltaX * 0.3;
  angle += velocity;
  startX = touchX;
  updateCarousel(angle);
});

inner.addEventListener('touchend', () => {
  isDragging = false;
  animateInertia();
});

// ----------- Scroll (opcional) -----------
inner.addEventListener('wheel', (e) => {
  e.preventDefault();
  angle += e.deltaY * 0.3;
  updateCarousel(angle);
});

  function rotateCarousel(direction) {
    angle += direction * (360 / quantity);
    document.querySelector(".inner").style.transform = 
      `perspective(1000px) rotateY(${angle}deg)`;
  }
