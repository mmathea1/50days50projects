var intro = document.getElementById('intro');
var eventBoxes = document.querySelectorAll('.event');
var key = document.getElementById('key');
var keyCode = document.getElementById('key-code');
var code = document.getElementById('code');
eventBoxes.forEach((box) => { box.style.display = "none"; });
window.addEventListener("keydown", (e) => {
    intro.style.display = "none";
    eventBoxes.forEach((eventBox) => {
        eventBox.style.display = "inline-flex";
    });
    key.innerText = e.key == ' ' ? 'Space' : e.key;
    keyCode.innerText = e.keyCode;
    code.innerText = e.code;
});