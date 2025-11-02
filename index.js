(function() {
  const phrases = ["Bot Developerem", "Grafikiem Komputerowym"];
  const el = document.getElementById('typed');
  const typingSpeed = 80;
  const pauseBetween = 1200;

  async function loop() {
    let idx = 0;
    while (true) {
      const text = phrases[idx % phrases.length];
      await typeText(text);
      await deleteText();
      idx++;
    }
  }

  function typeText(text) {
    return new Promise(res => {
      el.textContent = '';
      let i = 0;
      const s = setInterval(() => {
        el.textContent += text.charAt(i++);
        if (i >= text.length) {
          clearInterval(s);
          setTimeout(res, pauseBetween);
        }
      }, typingSpeed);
    });
  }

  function deleteText() {
    return new Promise(res => {
      let c = el.textContent;
      let i = c.length;
      const s = setInterval(() => {
        i--;
        el.textContent = c.slice(0, i);
        if (i <= 0) {
          clearInterval(s);
          setTimeout(res, 300);
        }
      }, 40);
    });
  }

  setTimeout(loop, 500);
})();

const shapes = document.querySelectorAll('.shape');
const velocities = [];

shapes.forEach(shape => {
  velocities.push({
    x: (Math.random() - 0.5) * 1.5,
    y: (Math.random() - 0.5) * 1.5,
  });
});

function animateShapes() {
  shapes.forEach((shape, i) => {
    const rect = shape.getBoundingClientRect();
    let x = parseFloat(shape.dataset.x || Math.random() * window.innerWidth);
    let y = parseFloat(shape.dataset.y || Math.random() * window.innerHeight);
    let vx = velocities[i].x;
    let vy = velocities[i].y;

    x += vx;
    y += vy;

    if (x <= 0 || x + rect.width >= window.innerWidth) velocities[i].x *= -1;
    if (y <= 0 || y + rect.height >= window.innerHeight) velocities[i].y *= -1;

    shape.style.left = x + 'px';
    shape.style.top = y + 'px';
    shape.dataset.x = x;
    shape.dataset.y = y;
  });
  requestAnimationFrame(animateShapes);
}
animateShapes();

/* Sterowanie muzyką */
const bgMusic = document.getElementById("bg-music");
let isMuted = true;

document.getElementById("music-toggle").addEventListener("click", () => {
  isMuted = !isMuted;
  if (isMuted) {
    bgMusic.pause();
    document.getElementById("audio-icon").className = "fa-solid fa-volume-xmark";
  } else {
    bgMusic.play();
    bgMusic.volume = 0.5;
    document.getElementById("audio-icon").className = "fa-solid fa-volume-high";
  }
});
