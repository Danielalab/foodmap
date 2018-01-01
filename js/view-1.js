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
    var map;
    var phoneRestaurant;
    var placeRestaurant;
    var backgroundgImg;
    sectionRestaurants.html('');
    for (let index = 0; index < typeFood.length; index++) {
      nameRestaurant = typeFood[index].name;
      placeRestaurant = typeFood[index].place;
      phoneRestaurant = typeFood[index].phone;
      backgroundgImg = typeFood[index].bg;
      createElementHtml(nameRestaurant, placeRestaurant, phoneRestaurant, backgroundgImg);
    }
  }

  function createElementHtml(nameRestaurant, placeRestaurant, phoneRestaurant, backgroundgImg) {
    divRestaurant = $('<div><p class="row align-items-center justify-content-center">' + nameRestaurant + '</p></div>');
    divRestaurant.addClass('col-5 bg-img m-1 row justify-content-center');
    divRestaurant.attr('data-toggle', 'modal');
    divRestaurant.attr('data-target', '#exampleModal');
    divRestaurant.attr('data-name', nameRestaurant);
    divRestaurant.attr('data-phone', phoneRestaurant);
    divRestaurant.attr('data-place', placeRestaurant);
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
    createElementsHtmlModal(titleModal, placeModal, phoneModal);
  }

  function createElementsHtmlModal(titleModal, placeModal, phoneModal) {
    $('.modal-title').text(titleModal);
    $('#place>span').text(placeModal);
    $('#phone>span').text(phoneModal);
  }

  function effectMouseOver() {
    $(this).css('color', 'white');
  }

  function effectMouseLeave() { 
    $(this).css('color', 'transparent');   
  }
}