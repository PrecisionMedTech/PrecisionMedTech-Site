const SERVICE_EMAIL = "CSenzamici@PrecisionMedTechServices.com";
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
if(menu && nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('is-open',!open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false')}));}
document.querySelectorAll('#year').forEach(e=>e.textContent=new Date().getFullYear());
const form=document.querySelector('#service-form');
/* Web3Forms access key (free, from web3forms.com). When empty, the form falls back to opening the visitor's email app. */
const WEB3FORMS_KEY = "c985c578-da26-405e-a6a0-3f43c1aa35c3";
function openEmailApp(data,status){const lines=[...data.entries()].filter(([k])=>k!=='botcheck').map(([k,v])=>`${k.toUpperCase()}: ${String(v).trim()}`);const subject='Service Request — '+data.get('equipment')+' — '+data.get('location');window.location.href='mailto:'+SERVICE_EMAIL+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(lines.join('\n\n'));status.textContent='Opening your email application. Please send the prepared message to complete your request.';}
if(form)form.addEventListener('submit',async event=>{
  event.preventDefault();
  const status=document.querySelector('#form-status');
  const data=new FormData(form);
  if(!WEB3FORMS_KEY){openEmailApp(data,status);return;}
  if(data.get('botcheck'))return;
  const button=form.querySelector('button[type="submit"]');
  const payload=Object.fromEntries([...data.entries()].filter(([k])=>k!=='botcheck').map(([k,v])=>[k,String(v).trim()]));
  payload.access_key=WEB3FORMS_KEY;
  payload.subject='Service Request — '+payload.equipment+' — '+payload.location;
  payload.from_name='PMTS Website';
  payload.replyto=payload.email;
  button.disabled=true;status.textContent='Sending your request…';
  try{
    const res=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(payload)});
    const json=await res.json().catch(()=>({}));
    if(!res.ok||json.success===false)throw new Error(json.message||'Request failed');
    form.reset();
    status.textContent='Thank you. Your request was sent. Chris will reply to the email address you provided.';
  }catch(err){
    status.innerHTML='Sorry, the request could not be sent. Please call <a href="tel:+14076250538">(407) 625-0538</a> or email <a href="mailto:'+SERVICE_EMAIL+'">'+SERVICE_EMAIL+'</a>.';
  }finally{button.disabled=false;}
});

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
