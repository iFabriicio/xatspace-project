// Fondo abstracto con degradado azul-verde + formas flotantes
// Soporta imagen externa si se define ?bgImg=<url>

let shapes = [];
let bgImage = null;

export async function init(canvas, { ctx }) {
  const w = canvas.width;
  const h = canvas.height;

  // Cargar imagen externa si existe
  const urlFromParam = new URL(location.href).searchParams.get("bgImg");
  const imgUrl = urlFromParam || null;
  if (imgUrl) {
    bgImage = new Image();
    bgImage.crossOrigin = "anonymous";
    bgImage.src = imgUrl;
    await bgImage.decode().catch(() => {});
  }

  const num = Math.floor((w * h) / 45000) + 40;
  shapes = new Array(num).fill().map(() => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 20 + Math.random() * 40,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    type: Math.random() > 0.5 ? "circle" : "square",
    hue: Math.floor(Math.random() * 360),
  }));
}

export function frame(dt, { canvas, ctx }) {
  const w = canvas.width;
  const h = canvas.height;

  // Fondo: degradado o imagen
  if (bgImage && bgImage.complete) {
    ctx.drawImage(bgImage, 0, 0, w, h);
  } else {
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, "#1DE9B6");
    gradient.addColorStop(1, "#1565C0");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);
  }

  // Dibujar formas
  for (const s of shapes) {
    s.x += s.vx;
    s.y += s.vy;
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

export async function destroy() {
  shapes = [];
  bgImage = null;
}
