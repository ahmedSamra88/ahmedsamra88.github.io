import  'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js';
import  'https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.6.0/glide.min.js';
// diploma_glide
new Glide('.diploma_glide',{
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3000, // Autoplay interval in milliseconds
    breakpoints: {
      1000: {
        perView: 2
      },
      600: {
        perView: 1
      }
    }
  }).mount();
// courses_glide
new Glide('.courses_glide',{
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3000, // Autoplay interval in milliseconds
    breakpoints: {
      1000: {
        perView: 2
      },
      600: {
        perView: 1
      }
    }
  }).mount();
  // jobs_glide
new Glide('.jobs_glide',{
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3000, // Autoplay interval in milliseconds
    breakpoints: {
      1000: {
        perView: 2
      },
      600: {
        perView: 1
      }
    }
  }).mount();
//   parteners_glide
new Glide('.parteners_glide',{
    type: 'carousel',
    startAt: 0,
    perView: 4,
    autoplay: 3000, // Autoplay interval in milliseconds
    breakpoints: {
      1000: {
        perView: 2
      },
      600: {
        perView: 1
      }
    }
  }).mount();
