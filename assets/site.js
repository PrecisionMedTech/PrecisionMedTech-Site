const SERVICE_EMAIL = "CSenzamici@PrecisionMedTechServices.com";
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
if(menu && nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('is-open',!open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false')}));}
document.querySelectorAll('#year').forEach(e=>e.textContent=new Date().getFullYear());
const form=document.querySelector('#service-form');
if(form)form.addEventListener('submit',event=>{event.preventDefault();const status=document.querySelector('#form-status');if(SERVICE_EMAIL.startsWith('REPLACE_')){status.textContent='Site owner: configure SERVICE_EMAIL in assets/site.js before this form can be used.';return;}const data=new FormData(form);const lines=[...data.entries()].map(([k,v])=>`${k.toUpperCase()}: ${String(v).trim()}`);const subject='Service Request — '+data.get('equipment')+' — '+data.get('location');const url='mailto:'+SERVICE_EMAIL+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(lines.join('\n\n'));status.textContent='Opening your email application. Please send the prepared message to complete your request.';window.location.href=url;});

/* header scroll shadow */
const header=document.querySelector('.site-header');
if(header){
  const onScroll=()=>header.classList.toggle('is-scrolled',window.scrollY>8);
  onScroll();
  window.addEventListener('scroll',onScroll,{passive:true});
}

/* scroll-reveal */
const revealEls=document.querySelectorAll('.reveal');
if(revealEls.length){
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    revealEls.forEach(el=>io.observe(el));
  } else {
    revealEls.forEach(el=>el.classList.add('is-visible'));
  }
}
