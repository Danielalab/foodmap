$(document).ready(begin);

function begin() {
  // seleccionando elementos del DOM
  var $select = $('select');
  var sectionRestaurants = $('#section-restaurants>.container-fluid>.row');
  var divRestaurant;
  $select.on('input', createSectionFood);

  function createSectionFood() {
    getDataFood(searchDataFood());
  }

  function searchDataFood() {
    return dataRestaurants[$select.val()];
  }

  function getDataFood(typeFood) {
    var nameRestaurant;
    var mapRestaurant;
    var phoneRestaurant;
    var placeRestaurant;
    var backgroundgImg;
    sectionRestaurants.html('');
    for (let index = 0; index < typeFood.length; index++) {
      nameRestaurant = typeFood[index].name;
      placeRestaurant = typeFood[index].place;
      phoneRestaurant = typeFood[index].phone;
      backgroundgImg = typeFood[index].bg;
      mapRestaurant = typeFood[index].map;
      createElementHtml(nameRestaurant, placeRestaurant, phoneRestaurant, backgroundgImg, mapRestaurant);
    }
  }

  function createElementHtml(nameRestaurant, placeRestaurant, phoneRestaurant, backgroundgImg, mapRestaurant) {
    divRestaurant = $('<div><p class="row align-items-center justify-content-center text-center">' + nameRestaurant + '</p></div>');
    divRestaurant.addClass('col-5 bg-img m-1 row justify-content-center');
    divRestaurant.attr('data-toggle', 'modal');
    divRestaurant.attr('data-target', '#exampleModal');
    divRestaurant.attr('data-name', nameRestaurant);
    divRestaurant.attr('data-phone', phoneRestaurant);
    divRestaurant.attr('data-place', placeRestaurant);
    divRestaurant.attr('data-map', mapRestaurant);    
    divRestaurant.css('background-image', 'url(' + backgroundgImg + ')');
    addElementsHtml(divRestaurant);
  }

  function addElementsHtml(divRestaurant) {
    (divRestaurant).appendTo(sectionRestaurants);
    divRestaurant.on('click', dataModal);
    divRestaurant.on('mouseover', effectMouseOver);
    divRestaurant.on('mouseleave', effectMouseLeave);
  }

  function dataModal() {
    var titleModal = $(this).attr('data-name');
    var placeModal = $(this).attr('data-place');
    var phoneModal = $(this).attr('data-phone');
    var mapModal = $(this).attr('data-map') ;
    createElementsHtmlModal(titleModal, placeModal, phoneModal, mapModal);
  }

  function createElementsHtmlModal(titleModal, placeModal, phoneModal, mapModal) {
    $('.modal-title').text(titleModal);
    $('#place>span').text(placeModal);
    $('#phone>span').text(phoneModal);
    $('#map').attr('src', mapModal);
  }

  function effectMouseOver() {
    $(this).css('color', 'white');
  }

  function effectMouseLeave() { 
    $(this).css('color', 'transparent');   
  }
}