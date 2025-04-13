function abrirCarta(el) {
    el.classList.toggle('open');
  
    const musica = document.getElementById('musica');
  
    if (el.classList.contains('open')) {
      musica.play();
    } else {
      musica.pause();
      musica.currentTime = 0;
    }
  }
  
    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (2 + Math.random() * 3) + 's';
      document.querySelector('.hearts-container').appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
  
    setInterval(createHeart, 300);