

<script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>



ScrollReveal().reveal('h2', {delay:100, usedelay:"onload"});
ScrollReveal().reveal('h3', {delay:100, usedelay:"onload"});

ScrollReveal().reveal('h1', {delay:100, usedelay:"onload"});
ScrollReveal().reveal('.button', {delay:100, usedelay:"onload"});
ScrollReveal().reveal('p', {delay:100, usedelay:"onload"});
ScrollReveal().reveal('img', {delay:100, usedelay:"onload"});
ScrollReveal().reveal('form', {delay:100, usedelay:"onload"});
ScrollReveal().reveal('header img', {delay:0, usedelay:"onload"});



$('.owl-carousel').owlCarousel({
loop:true,
margin:10,
nav:true,
responsive:{
  0:{
      items:1
  },
  600:{
      items:3
  },
  1000:{
      items:5
  }
}
})
