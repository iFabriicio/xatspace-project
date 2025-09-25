// dark-ultimate-v2.js - ripple on .ripple elements and small polish
document.addEventListener('click', function(e){
  var t = e.target.closest('.ripple');
  if(!t) return;
  var rect = t.getBoundingClientRect();
  var circle = document.createElement('span');
  circle.style.position = 'absolute';
  circle.style.left = (e.clientX - rect.left) + 'px';
  circle.style.top = (e.clientY - rect.top) + 'px';
  circle.style.width = circle.style.height = '0px';
  circle.style.borderRadius = '50%';
  circle.style.transform = 'translate(-50%,-50%)';
  circle.style.background = 'rgba(255,255,255,0.12)';
  circle.style.pointerEvents = 'none';
  circle.style.opacity = '0.9';
  circle.style.transition = 'width .45s ease, height .45s ease, opacity .6s ease';
  t.appendChild(circle);
  setTimeout(function(){ circle.style.width = '300px'; circle.style.height = '300px'; circle.style.opacity = '0'; }, 10);
  setTimeout(function(){ circle.remove(); }, 700);
}, {passive:true});

// lazy add visible class for animated-in if not present (for pages loaded individually)
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.animated-in').forEach(function(el,i){
    setTimeout(function(){ el.classList.add('visible'); }, 120 + i*60);
  });
});
