// Fondo animado con degradado + formas flotantes
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Ajustar al redimensionar
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

let shapes = [];
let bgImage = null;

function init() {
  const w = canvas.width;
  const h = canvas.height;

  // Permitir imagen externa (ej: ?bgImg=https://i.imgur.com/xxxx.png)
  const urlFromParam = new URL(location.href).searchParams.get("bgImg");
  if (urlFromParam) {
    bgImage = new Image();
    bgImage.crossOrigin = "anonymous";
    bgImage.src = urlFromParam;
  }

  const num = Math.floor((w * h) / 45000) + 40;
  shapes = new Array(num).fill().map(() => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 20 + Math.random() * 40,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    type: Math.random() > 0.5 ? "circle" : "square",
    hue: Math.floor(Math.random() * 360),
  }));
}

function frame() {
  const w = canvas.width;
  const h = canvas.height;

  // Fondo: degradado o imagen externa
  if (bgImage && bgImage.complete) {
    ctx.drawImage(bgImage, 0, 0, w, h);
  } else {
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, "#1DE9B6");
    gradient.addColorStop(1, "#1565C0");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);
  }

  // Formas animadas
  for (const s of shapes) {
    s.x += s.vx;
    s.y += s.vy;

    // Rebote en bordes
    if (s.x < -50) s.x = w + 50;
    if (s.y < -50) s.y = h + 50;
    if (s.x > w + 50) s.x = -50;
    if (s.y > h + 50) s.y = -50;

    ctx.save();
    ctx.translate(s.x, s.y);
    ctx.rotate((Date.now() / 1000 + s.hue) % (Math.PI * 2));
    ctx.fillStyle = `hsla(${s.hue},70%,60%,0.15)`;

    if (s.type === "circle") {
      ctx.beginPath();
      ctx.arc(0, 0, s.r, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(-s.r, -s.r, s.r * 2, s.r * 2);
    }
    ctx.restore();
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  frame();
}

// Iniciar animación
init();
animate();
