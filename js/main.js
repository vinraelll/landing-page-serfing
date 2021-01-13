$(function(){

  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')

  const toggleClasses = () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    document.body.classList.toggle('lockScroll')
  }

  menu.addEventListener('click', e => {
    if (e.target.classList.contains('menu__link')) {
      toggleClasses()
    }
  })

  burger.addEventListener('click', toggleClasses)

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

    responsive: [
      {
        breakpoint: 401,
        settings: {
          dots: false,
        }
      }]
  });
  
  const mixer = mixitup('.gallery__inner');
});