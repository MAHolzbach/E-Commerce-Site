//Scroll reveal
window.sr = ScrollReveal();
sr.reveal('.splashWatch', {duration: 2200, origin: 'left', distance: '200px'});


//Link scroll on click
$("a[href^='#']").on("click", function(event){
  event.preventDefault();
  $("html, body").animate({
      scrollTop: $( $.attr(this, "href") ).offset().top
  }, 500);
});
//
