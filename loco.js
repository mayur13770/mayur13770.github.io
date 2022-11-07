const first = document.getElementById("first")
const container = document.getElementById("containerskills")
const rect = container.getBoundingClientRect()

const animate = (element,position) => {
     element.style.transform = `translateX(${position}px)`
} 

       

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;
    
   window.requestAnimationFrame(function() {
     
      animate(first,lastKnownScrollPosition*.2)
      animate(second,lastKnownScrollPosition*-.2)
      animate(third,lastKnownScrollPosition*.2)
      
    });
});



var _window = window,Splitting = _window.Splitting,ScrollOut = _window.ScrollOut;
Splitting();
ScrollOut({
  targets: '.word',
  scrollingElement: '.page' });