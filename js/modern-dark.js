// small script to reveal elements with .animated-in
document.addEventListener('DOMContentLoaded', function(){
  var targets = document.querySelectorAll('section, .card, .galeria-item, .box, header');
  targets.forEach(function(t, i){
    t.classList.add('animated-in');
    setTimeout(function(){ t.classList.add('visible'); }, 120 + i*80);
  });
});
