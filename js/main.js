// Basic UI helpers: hamburger, footer year, simple form validation, reveal-on-scroll
(function(){
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
if(navToggle){
navToggle.addEventListener('click', ()=>{
const open = siteNav.classList.toggle('open');
navToggle.setAttribute('aria-expanded', open);
});
}


// footer year
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();


// reveal on scroll (simple)
const reveal = ()=>{
const els = document.querySelectorAll('.card, .project, .service-card');
const h = window.innerHeight;
els.forEach(el=>{
const r = el.getBoundingClientRect();
if(r.top < h - 60) el.classList.add('visible');
});
};
window.addEventListener('scroll', reveal);
document.addEventListener('DOMContentLoaded', reveal);


// form validation
const form = document.getElementById('contactForm');
if(form){
const msg = document.getElementById('formMessage');
form.addEventListener('submit', e=>{
e.preventDefault();
if(!form.checkValidity()){
msg.textContent = 'Please fill the form correctly.';
form.reportValidity();
return;
}
// Simulate submit (in production you'd POST to an endpoint or use Netlify Forms)
msg.textContent = 'Thanks! Your message was sent (simulated).';
form.reset();
});
}
})();