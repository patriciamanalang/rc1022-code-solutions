
// query for the DOM element that opens the modal
// query for the DOM element that closes the modal
// add event listener on the element that opens the modal
// create a callback function that gets rid of the "hidden" class
// add event listener to on the element that closes the modal
// create callback function that contains the element "hidden"

var openModalButton = document.querySelector('.open-modal-btn');
var popUp = document.querySelector('.overlay');
var noButton = document.querySelector('.no-btn');

function openModal(event) {
  popUp.className = 'overlay fixed';
}
openModalButton.addEventListener('click', openModal);

function closeModal(event) {
  popUp.className = 'overlay fixed hidden';
}
noButton.addEventListener('click', closeModal);
