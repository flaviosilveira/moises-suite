
// Checked box characthers
var checked_silvio = document.getElementById('silvio');
var checked_moises = document.getElementById('moises');
var checked_names = document.getElementById('names');

// Paragraph Dialog
var p_silvio = document.getElementsByClassName('silvio');
var p_moises = document.getElementsByClassName('moises');
var span = document.getElementsByTagName('span');

checked_silvio.onchange = function(){
    toogleElements(p_silvio, checked_silvio.checked, 'block');
};

checked_moises.onchange = function(){
    toogleElements(p_moises, checked_moises.checked, 'block');
};

checked_names.onchange = function(){
    toogleElements(span, checked_names.checked, 'inline');
};

function toogleElements(elements, checked, display){

    if(!checked)
        display = 'none';

    for(var i = 0; i < elements.length; i++){
        elements[i].style["display"] = display;
    }
}