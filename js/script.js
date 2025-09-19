document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".menu-track");
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");

  leftBtn.addEventListener("click", () => {
    track.scrollBy({ left: -200, behavior: "smooth" });
  });
  rightBtn.addEventListener("click", () => {
    track.scrollBy({ left: 200, behavior: "smooth" });
  });
});
