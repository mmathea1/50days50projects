window.addEventListener("keydown", (e) => {
    document.getElementById('intro').style.display = "none";
    document.querySelectorAll('.key').forEach((box) => {
        box.style.display = "inline-flex";
    });
    document.getElementById('key').innerText = e.key == ' ' ? 'Space' : e.key;
    document.getElementById('key-code').innerText = e.keyCode;
    document.getElementById('code').innerText = e.code;
});