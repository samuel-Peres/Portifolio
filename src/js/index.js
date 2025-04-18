
  const inner = document.querySelector('.inner');
  const quantity = 20;
  let angle = 0;
  let isDragging = false;
  let startX = 0;
  let currentX = 0;
  let velocity = 0;
  let animationFrame;


  // Função que rotaciona o carrossel
  function updateCarousel(newAngle) {
    inner.style.transform = `perspective(1000px) rotateY(${newAngle}deg)`;
  }

  // Início do clique/arrasto
  inner.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    cancelAnimationFrame(animationFrame); // para animação anterior
  });

  // Enquanto arrasta
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    velocity = deltaX * 0.3; // controla a força da rotação
    angle += velocity;
    startX = e.clientX;
    updateCarousel(angle);
  });

  // Solta o clique: aplica inércia
  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    animateInertia();
  });

  // Função com inércia
  function animateInertia() {
    velocity *= 0.95; // desaceleração
    angle += velocity;
    updateCarousel(angle);
    if (Math.abs(velocity) > 0.5) {
      animationFrame = requestAnimationFrame(animateInertia);
    }
  }

  // 🎯 Scroll também rotaciona o carrossel
  inner.addEventListener('wheel', (e) => {
    e.preventDefault();
    angle += e.deltaY * 0.3; // sensibilidade do scroll
    updateCarousel(angle);
  });


  function rotateCarousel(direction) {
    angle += direction * (360 / quantity);
    document.querySelector(".inner").style.transform = 
      `perspective(1000px) rotateY(${angle}deg)`;
  }
