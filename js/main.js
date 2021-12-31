

let git = '#131418';
let facebook = '#1877F2';
let linkedin = '#0A66C2';
let whatsapp = '#25D366';
let telegram = '#0088cc';
let instagram = '#E4405F';

document.getElementById("git").onmouseover = function() {mouseOver(git)};
document.getElementById("git").onmouseout = function() {mouseOut()};

document.getElementById("facebook").onmouseover = function() {mouseOver(facebook)};
document.getElementById("facebook").onmouseout = function() {mouseOut()};

document.getElementById("linkedin").onmouseover = function() {mouseOver(linkedin)};
document.getElementById("linkedin").onmouseout = function() {mouseOut()};

document.getElementById("whatsapp").onmouseover = function() {mouseOver(whatsapp)};
document.getElementById("whatsapp").onmouseout = function() {mouseOut()};

document.getElementById("telegram").onmouseover = function() {mouseOver(telegram)};
document.getElementById("telegram").onmouseout = function() {mouseOut()};

document.getElementById("instagram").onmouseover = function() {mouseOver(instagram)};
document.getElementById("instagram").onmouseout = function() {mouseOut()};



function mouseOver(color) {
    document.body.style.backgroundColor = color;
}

function mouseOut() {
    document.body.style.backgroundColor = "#f54785";
}