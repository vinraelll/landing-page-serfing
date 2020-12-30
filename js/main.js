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

//   function myMap() {
//     const mapCanvas = document.getElementById("map");
//     const mapOptions = {
//         center: new google.maps.LatLng(51.5, -0.2),
//         zoom: 10
//     };
//     const map = new google.maps.Map(mapCanvas, mapOptions);
// }

});