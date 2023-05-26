const openIcon = document.getElementById('open-icon');
const closedIcon = document.getElementById('closed-icon');
const openNav = document.getElementById('open-nav');
const closedNav = document.getElementById('closed-nav');

openIcon.addEventListener('click', () => {
    openNav.style.display = 'none';
    closedNav.style.display = 'block';
});

closedIcon.addEventListener('click', () => {
    openNav.style.display = 'block';
    closedNav.style.display = 'none';
});


