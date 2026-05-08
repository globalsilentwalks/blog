// Scroll to top button
var st=document.getElementById('scroll-top');
window.addEventListener('scroll',function(){
  st.style.display=window.scrollY>400?'flex':'none';
});

// Mobile nav
function toggleMobileNav(){
  var mn=document.getElementById('mobile-nav');
  mn.classList.toggle('open');
  document.body.style.overflow=mn.classList.contains('open')?'hidden':'';
}

// Search overlay
function openSearch(){
  document.getElementById('search-overlay').classList.add('active');
  document.getElementById('search-big-input').focus();
  document.body.style.overflow='hidden';
}
function closeSearch(){
  document.getElementById('search-overlay').classList.remove('active');
  document.body.style.overflow='';
}
function doSearch(){
  var q=document.getElementById('search-big-input').value.trim();
  if(q) window.location.href='blog.html?search='+encodeURIComponent(q);
}
document.getElementById('search-big-input').addEventListener('keydown',function(e){
  if(e.key==='Enter') doSearch();
});
document.getElementById('search-input').addEventListener('keydown',function(e){
  if(e.key==='Enter'){
    var q=this.value.trim();
    if(q) window.location.href='blog.html?search='+encodeURIComponent(q);
  }
});
document.addEventListener('keydown',function(e){if(e.key==='Escape') closeSearch();});

// Newsletter
function handleNewsletter(e){
  e.preventDefault();
  var btn=e.target.querySelector('button');
  btn.textContent='✓ Subscribed!';
  btn.style.background='#16a34a';
  setTimeout(function(){btn.textContent='Subscribe Free';btn.style.background='';},3000);
}

// Lazy load images
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        var img=en.target;
        if(img.dataset.src){img.src=img.dataset.src;delete img.dataset.src;}
        io.unobserve(img);
      }
    });
  },{rootMargin:'200px'});
  document.querySelectorAll('img[data-src]').forEach(function(img){io.observe(img);});
}
// Image fallback for broken images
document.addEventListener('DOMContentLoaded', function(){
  var FALLBACK = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80';
  document.querySelectorAll('img').forEach(function(img){
    img.addEventListener('error', function(){
      if (img.src !== FALLBACK) img.src = FALLBACK;
    });
    if (!img.hasAttribute('loading')) img.setAttribute('loading','lazy');
    if (!img.hasAttribute('decoding')) img.setAttribute('decoding','async');
  });
});
