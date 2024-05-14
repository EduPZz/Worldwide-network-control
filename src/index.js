const canvas = document.getElementById('canvas');
const map = document.getElementById('map');

let scale = 1;
let isDragging = false;
let lastX = 0;
let lastY = 0;
let panStartX = 0;
let panStartY = 0;
let panDeltaX = 0;
let panDeltaY = 0;

canvas.addEventListener('wheel', (event) => {
  event.preventDefault();
  const deltaY = event.deltaY;
  scale += deltaY * -0.01;
  scale = Math.min(Math.max(1, scale), 4);

  map.style.transform = `translate(${panDeltaX}px, ${panDeltaY}px) scale(${scale})`;
});

canvas.addEventListener('mousedown', (event) => {
  lastX = event.clientX;
  lastY = event.clientY;
  panStartX = panDeltaX;
  panStartY = panDeltaY;
  isDragging = true;
});

canvas.addEventListener('mousemove', (event) => {
  if (isDragging) {
    panDeltaX = panStartX + event.clientX - lastX;
    panDeltaY = panStartY + event.clientY - lastY;

    map.style.transform = `translate(${panDeltaX}px, ${panDeltaY}px) scale(${scale})`;
  }
});

canvas.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
  }
});
