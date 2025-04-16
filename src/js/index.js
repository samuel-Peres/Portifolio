let angle = 0;
function rotateCarousel(direction) {
    angle += direction * (360 / 20); // 10 é o número de cartões
    document.querySelector(".inner").style.transform = 
        `perspective(1000px) rotateX(0deg) rotateY(${angle}deg)`;
}