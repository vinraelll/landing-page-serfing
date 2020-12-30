$(function(){

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

  const mixer = mixitup('.gallery__inner');

  $('.slider').slick({
    arrows: false,
    dots: true,
  });

});