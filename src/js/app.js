import 'popper.js';
import 'bootstrap';
import '@fancyapps/fancybox';
import $ from 'jquery';
import 'slick-carousel';


$('.site-header .navbar-toggler').click(() => {
  document.body.classList.toggle('menu-open');
});

$('.certified-carousel').slick({
  dots: false,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.service-carousel').slick({
  dots: false,
  arrows: true,
  centerPadding: true
});