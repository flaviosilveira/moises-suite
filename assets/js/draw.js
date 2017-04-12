// Input file or link
var input_link = document.getElementById('link');
var input_file = document.getElementById('file');

input_file.onchange = function () {
  moises_talk();
};

input_link.onchange = function () {
  moises_talk();
};

function moises_talk(){
	new Audio("assets/mp3/arcoiro.mp3").play()
}