// dark-ultimate.js - reveal animations + subtle neon particles on background canvas
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    var sel = ['header','.hero','.cards-grid','.section-title','.gallery-row','footer'];
    var els = [];
    sel.forEach(s=> document.querySelectorAll(s).forEach(e=>els.push(e)));
    els.forEach((el,i)=>{ el.classList.add('animated-in'); setTimeout(()=>el.classList.add('visible'), 120 + i*90); });
  });

  // particles effect: draw soft glows on the canvas if available
  function runParticles(){
    var c = document.getElementById('fondo-abstracto');
    if(!c) return;
    var ctx = c.getContext('2d');
    var w = c.width = window.innerWidth;
    var h = c.height = window.innerHeight;
    var parts = [];
    var N = Math.max(8, Math.floor((w*h)/160000)); // adjust count
    for(var i=0;i<N;i++){
      parts.push({x:Math.random()*w, y:Math.random()*h, r:Math.random()*2+0.5, hue: Math.random()*360, vx:(Math.random()-0.5)*0.3, vy:(Math.random()-0.5)*0.3});
    }
    function resize(){ w=c.width=window.innerWidth; h=c.height=window.innerHeight; }
    window.addEventListener('resize', resize);
    function draw(){
      ctx.clearRect(0,0,w,h);
      for(var i=0;i<parts.length;i++){
        var p=parts[i];
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0) p.x=w; if(p.x>w) p.x=0; if(p.y<0) p.y=h; if(p.y>h) p.y=0;
        var g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*20);
        g.addColorStop(0,'rgba(124,77,255,0.10)');
        g.addColorStop(0.5,'rgba(0,229,255,0.03)');
        g.addColorStop(1,'rgba(0,0,0,0)');
        ctx.fillStyle=g; ctx.beginPath(); ctx.arc(p.x,p.y,p.r*10,0,Math.PI*2); ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    draw();
  }
  setTimeout(runParticles, 200);
})();
