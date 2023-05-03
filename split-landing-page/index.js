var ps = document.getElementById('ps');
var xbox = document.getElementById('xbox');

xbox.addEventListener('mouseover', function (e) {
    ps.style.flex = 1;
    xbox.style.flex = 3;
});

ps.addEventListener('mouseover', function (e) {
    xbox.style.flex = 1;
    ps.style.flex = 3;
});