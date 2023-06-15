$(document).ready(function() {
    var slides = $('.slideShow');
    var currentSlide = 0;
  
    slides.eq(currentSlide).css('display', 'block');
  
    function nextSlide() {
      slides.eq(currentSlide).fadeOut();
      currentSlide = (currentSlide + 1) % slides.length;
      slides.eq(currentSlide).fadeIn();
    }
  
    setInterval(nextSlide, 5000);
  });
  