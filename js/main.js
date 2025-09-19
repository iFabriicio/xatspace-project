
function addSelectedBehavior(){
  document.querySelectorAll('.card').forEach(c=>{
    c.addEventListener('click', (e)=>{
      document.querySelectorAll('.card').forEach(x=>x.classList.remove('selected'));
      e.currentTarget.classList.add('selected');
    });
  });
  document.querySelectorAll('.subbtn').forEach(b=>{
    b.addEventListener('click', (e)=>{
      document.querySelectorAll('.subbtn').forEach(x=>x.classList.remove('selected'));
      e.currentTarget.classList.add('selected');
    });
  });
}
function initSwipers(){
  if(typeof Swiper === 'undefined') return;
  document.querySelectorAll('.swiper-container').forEach((container)=>{
    new Swiper(container, {
      loop:false,
      slidesPerView:'auto',
      spaceBetween:16,
      navigation:{
        nextEl: container.querySelector('.swiper-button-next'),
        prevEl: container.querySelector('.swiper-button-prev'),
      },
      breakpoints:{0:{slidesPerView:1.1},600:{slidesPerView:2},1000:{slidesPerView:3}}
    });
  });
}
function openModal(src){ let m=document.getElementById('modal-global'); if(!m){ m=document.createElement('div'); m.id='modal-global'; m.style.cssText='position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.9);z-index:9999;padding:20px'; m.innerHTML = '<div style="max-width:96%;max-height:96%;overflow:auto;background:#0b0b0b;padding:12px;border-radius:10px;position:relative"><button onclick="closeModal()" style="position:absolute;right:8px;top:8px;background:#fff;border-radius:6px;padding:6px;cursor:pointer">✕</button><img src="" style="max-width:100%"></div>'; document.body.appendChild(m);} m.querySelector('img').src=src; m.style.display='flex';}
function closeModal(){ const m=document.getElementById('modal-global'); if(m) m.style.display='none'; }
function openDual(ext,int){ let m=document.getElementById('modal-global'); if(!m){ m=document.createElement('div'); m.id='modal-global'; m.style.cssText='position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.9);z-index:9999;padding:20px'; m.innerHTML = '<div style="max-width:96%;max-height:96%;overflow:auto;background:#0b0b0b;padding:12px;border-radius:10px;position:relative"><button onclick="closeModal()" style="position:absolute;right:8px;top:8px;background:#fff;border-radius:6px;padding:6px;cursor:pointer">✕</button><h3 style="color:#ff8c4d">Exterior (2560x1440)</h3><img class="ext" src="" style="max-width:100%"><h3 style="color:#ff8c4d">Interior (728x486)</h3><img class="int" src="" style="max-width:100%"></div>'; document.body.appendChild(m);} m.querySelector('.ext').src=ext; m.querySelector('.int').src=int; m.style.display='flex'; }
function generateGrids(){ document.querySelectorAll('[data-gen="grid"]').forEach(container=>{ const count=parseInt(container.getAttribute('data-count')||'0',10); const type=container.getAttribute('data-type')||'80'; container.innerHTML=''; for(let i=1;i<=count;i++){ if(type==='80'){ const el=document.createElement('div'); el.className='cell'; el.innerHTML=`<img src="/assets/placeholders/80.png" alt="NUMERO ${i}"><div class="num">NUMERO ${i}</div>`; el.onclick=()=>openModal('/assets/placeholders/80.png'); container.appendChild(el); } else if(type==='box'){ const el=document.createElement('div'); el.className='box'; el.innerHTML=`<img src="/assets/placeholders/280.png" style="width:100%;height:100%;object-fit:cover"><div class="num">NUMERO ${i}</div>`; el.onclick=()=>openModal('/assets/placeholders/280.png'); container.appendChild(el); } else if(type==='swiper'){ const slide=document.createElement('div'); slide.className='swiper-slide'; slide.innerHTML=`<img src="/assets/placeholders/pc.png" alt="NUMERO ${i}"><div class="slide-num">NUMERO ${i}</div>`; slide.onclick=()=>openModal('/assets/placeholders/pc.png'); container.appendChild(slide); } else if(type==='banner'){ const slide=document.createElement('div'); slide.className='swiper-slide'; slide.innerHTML=`<img src="/assets/placeholders/banner.png" alt="NUMERO ${i}"><div class="slide-num">NUMERO ${i}</div>`; slide.onclick=()=>openModal('/assets/placeholders/banner.png'); container.appendChild(slide); } } }); }
function createBubbles(){ const root=document.getElementById('bubbles'); if(!root) return; const sizes=[120,200,160,90,240,300]; for(let i=0;i<8;i++){ const b=document.createElement('div'); b.className='bubble'; const s=sizes[i%sizes.length]; b.style.width=s+'px'; b.style.height=s+'px'; b.style.left=(6+i*12)+'%'; b.style.top=(60 - i*6)+'%'; b.style.animationDuration=(12 + i*3)+'s'; root.appendChild(b); } }
document.addEventListener('DOMContentLoaded', ()=>{ generateGrids(); initSwipers(); addSelectedBehavior(); createBubbles(); });
