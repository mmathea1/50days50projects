document.addEventListener("click", function (e) {
    var prevCard = document.getElementsByClassName('active')[0];
    prevCard.classList.remove('active');
    e.target.classList.add('active');;
});