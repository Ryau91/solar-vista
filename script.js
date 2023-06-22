var scrollButton1 = document.querySelector('.scroll-button-1');
var section1 = document.querySelector('.why-solar-container-1');
  
scrollButton1.addEventListener('click', function() {
    section1.scrollIntoView({ behavior: 'smooth' });
});

var scrollButton2 = document.querySelector('.scroll-button-2');
var section2 = document.querySelector('.why-solar-container-2');

scrollButton2.addEventListener('click', function() {
    section2.scrollIntoView({ behavior: 'smooth' });
});