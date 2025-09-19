
function generateGrids(){
  document.querySelectorAll('[data-gen="grid"]').forEach(container=>{
    const count = parseInt(container.getAttribute('data-count')||'0',10);
    const type = container.getAttribute('data-type')||'80';
    container.innerHTML='';
    for(let i=1;i<=count;i++){
      if(type==='80'){
        const el=document.createElement('div'); el.className='cell';
        el.innerHTML = `<img src="/assets/placeholders/80.png" alt="NUMERO ${i}"><div class="num">NUMERO ${i}</div>`;
        el.onclick = ()=> openModal('/assets/placeholders/80.png');
        container.appendChild(el);
      } else if(type==='box'){
        const el=document.createElement('div'); el.className='box';
        el.innerHTML = `<img src="/assets/placeholders/280x350.png" alt="NUMERO ${i}"><div class="num">NUMERO ${i}</div>`;
        el.onclick = ()=> openModal('/assets/placeholders/280x350.png');
        container.appendChild(el);
      } else if(type==='pc'){
        const slide=document.createElement('div'); slide.className='swiper-slide';
        slide.innerHTML = `<img src="/assets/placeholders/728x486.png" alt="NUMERO ${i}"><div class="slide-num">NUMERO ${i}</div>`;
        slide.onclick = ()=> openDual('/assets/placeholders/728x486.png','/assets/placeholders/728x486.png');
        container.appendChild(slide);
      } else if(type==='ps'){
        const slide=document.createElement('div'); slide.className='swiper-slide';
        slide.innerHTML = `<img src="/assets/placeholders/380x100.png" alt="NUMERO ${i}"><div class="slide-num">NUMERO ${i}</div>`;
        slide.onclick = ()=> openModal('/assets/placeholders/380x100.png');
        container.appendChild(slide);
      } else if(type==='banner'){
        const slide=document.createElement('div'); slide.className='swiper-slide';
        slide.innerHTML = `<img src="/assets/placeholders/728x90.png" alt="NUMERO ${i}"><div class="slide-num">NUMERO ${i}</div>`;
        slide.onclick = ()=> openModal('/assets/placeholders/728x90.png');
        container.appendChild(slide);
      } else if(type==='box220'){
        const el=document.createElement('div'); el.className='box';
        el.innerHTML = `<img src="/assets/placeholders/280x350.png" alt="NUMERO ${i}"><div class="num">NUMERO ${i}</div>`;
        el.onclick = ()=> openModal('/assets/placeholders/280x350.png');
        container.appendChild(el);
      }
    }
  });
}
function openModal(src){
  let m = document.getElementById('modal-global');
  if(!m){
    m = document.createElement('div'); m.id='modal-global'; m.style.cssText='position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.9);z-index:9999;padding:20px';
    m.innerHTML = '<div style="max-width:96%;max-height:96%;overflow:auto;background:#0b0b0b;padding:12px;border-radius:10px;position:relative"><button onclick="closeModal()" style="position:absolute;right:8px;top:8px;background:#fff;border-radius:6px;padding:6px;cursor:pointer">✕</button><img src="" style="max-width:100%"></div>';
    document.body.appendChild(m);
  }
  m.querySelector('img').src = src; m.style.display='flex';
}
function closeModal(){ const m=document.getElementById('modal-global'); if(m) m.style.display='none'; }
function openDual(ext,int){
  let m = document.getElementById('modal-global');
  if(!m){
    m = document.createElement('div'); m.id='modal-global'; m.style.cssText='position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.9);z-index:9999;padding:20px';
    m.innerHTML = '<div style="max-width:96%;max-height:96%;overflow:auto;background:#0b0b0b;padding:12px;border-radius:10px;position:relative"><button onclick="closeModal()" style="position:absolute;right:8px;top:8px;background:#fff;border-radius:6px;padding:6px;cursor:pointer">✕</button><h3 style="color:#ff8c4d">Exterior</h3><img class="ext" src="" style="max-width:100%"><h3 style="color:#ff8c4d">Interior</h3><img class="int" src="" style="max-width:100%"></div>';
    document.body.appendChild(m);
  }
  m.querySelector('.ext').src = ext; m.querySelector('.int').src = int; m.style.display='flex';
}
function initSimpleSliders(){
  document.querySelectorAll('.simple-slider').forEach(slider=>{
    const wrapper = slider.querySelector('.slides');
    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');
    let pos = 0;
    function update(){ wrapper.style.transform = `translateX(${pos}px)`; }
    next && next.addEventListener('click', ()=>{ pos -= 300; if(pos < -((wrapper.scrollWidth - slider.clientWidth))) pos = 0; update(); });
    prev && prev.addEventListener('click', ()=>{ pos += 300; if(pos>0) pos = 0; update(); });
  });
}
document.addEventListener('DOMContentLoaded', ()=>{ generateGrids(); initSimpleSliders(); });
