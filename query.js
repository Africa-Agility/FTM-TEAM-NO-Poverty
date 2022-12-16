document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Or with jQuery

  $(d".dropdown-trigger").ready(function(){
    $('.sidenav').sidenav();
  });

  const carousel = new bootstrap.Carousel('#myCarousel')