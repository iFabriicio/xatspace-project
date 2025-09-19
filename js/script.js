const cards = document.querySelector('.cards');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
leftArrow.addEventListener('click', () => {
  cards.scrollBy({ left: -300, behavior: 'smooth' });
});
rightArrow.addEventListener('click', () => {
  cards.scrollBy({ left: 300, behavior: 'smooth' });
});
