
// fondo-loader.js
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

function resize() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resize);
resize();

async function init() {
  const mod = await import("./modules/fondo-abstracto.js");
  if (mod && typeof mod.init === "function") {
    await mod.init(canvas, { ctx });
  }
  let last = performance.now();
  function loop(now) {
    const dt = now - last; last = now;
    if (mod.frame) mod.frame(dt, { canvas, ctx });
    requestAnimationFrame(loop);
  }
  loop(last);
}
init();
