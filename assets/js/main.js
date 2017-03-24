// Checked box characthers
var checked_silvio = document.getElementById('silvio');
var checked_moises = document.getElementById('moises');
var checked_photos = document.getElementById('photos');

// Paragraph Dialog
var _silvio = document.getElementsByClassName('js-silvio');
var _moises = document.getElementsByClassName('js-moises');
var _photo = document.getElementsByClassName('js-photo');

checked_silvio.onchange = function () {
  toogleElements(_silvio, checked_silvio.checked, 'block');
};

checked_moises.onchange = function () {
  toogleElements(_moises, checked_moises.checked, 'block');
};

checked_photos.onchange = function () {
  toogleElements(_photo, checked_photos.checked, 'inline');
};

function toogleElements(elements, checked, display) {

  if (!checked)
    display = 'none';

  for (var i = 0; i < elements.length; i++) {
    elements[i].style["display"] = display;
  }
}
