// portfolio-minimal.js - scroll reveal and simple interactions
document.addEventListener('DOMContentLoaded', function(){
  // reveal elements
  var targets = document.querySelectorAll('.fade-in, .section, .portfolio-card, header');
  targets.forEach(function(t, i){
    setTimeout(function(){ t.classList.add('visible'); }, 120 + i*80);
  });

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        var el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
