$(function(){

  $('.burger').on('click', function(e) {
    e.preventDefault();
  
    $('.burger').toggleClass("active");
    $('.menu').toggleClass("active");
  
  });

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView ({
        behavior: "smooth",
        block: "start"
      })
    })
  }

  $('.slider').slick({
    arrows: false,
    dots: true,
  });
  
  $('.burger__btn').on('click', function(){
    $('.menu').toggleClass('menu--active')
  })

  const mixer = mixitup('.gallery__inner');
});