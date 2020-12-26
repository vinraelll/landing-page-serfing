$(function(){
  var mixer = mixitup('.gallery__inner');

  $('#filter-tourists').click(function(){
    $('#serfer').removeClass('gallery__item--no-margin-right');
  });

  $('#filter-all').click(function(){
    $('#serfer').addClass('gallery__item--no-margin-right');
  });

});