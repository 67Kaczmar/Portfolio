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
