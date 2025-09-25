// dark-pro.js - lightweight particle background + reveal
(function(){
  // Reveal animations
  document.addEventListener('DOMContentLoaded', function(){
    var targets = document.querySelectorAll('header, .hero, section, .card-tile, .gallery-item, footer');
    targets.forEach(function(t, i){
      t.classList.add('animated-in');
      setTimeout(function(){ t.classList.add('visible'); }, 120 + i*60);
    });
  });

  // Simple particle layer on canvas #fondo-abstracto if present
  function startParticles(){
    var c = document.getElementById('fondo-abstracto');
    if(!c) return;
    var ctx = c.getContext('2d');
    var w = c.width = window.innerWidth;
    var h = c.height = window.innerHeight;
    var particles = [];
    var count = Math.floor((w*h)/90000); // scale with screen
    for(var i=0;i<count;i++){
      particles.push({
        x: Math.random()*w,
        y: Math.random()*h,
        r: Math.random()*1.6+0.6,
        vx: (Math.random()-0.5)*0.2,
        vy: (Math.random()-0.5)*0.2,
        hue: Math.random()*360
      });
    }
    function resize(){ w = c.width = window.innerWidth; h = c.height = window.innerHeight; }
    window.addEventListener('resize', resize);
    function draw(){
      ctx.clearRect(0,0,w,h);
      // subtle glow background
      for(var i=0;i<particles.length;i++){
        var p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if(p.x<0) p.x = w; if(p.x> w) p.x = 0;
        if(p.y<0) p.y = h; if(p.y> h) p.y = 0;
        var grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r*12);
        grd.addColorStop(0, 'rgba(124,77,255,0.08)');
        grd.addColorStop(0.6, 'rgba(0,229,255,0.02)');
        grd.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r*6,0,Math.PI*2);
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  // start after small delay to avoid blocking
  setTimeout(startParticles, 300);
})();
