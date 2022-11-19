// Go Top Button
const goTop = document.querySelector('.go-top');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 500) {
        goTop.classList.add('show-go-top');
    } else {
        goTop.classList.remove('show-go-top');
    }
})


// Hamburger Menu
const sideMenu = document.getElementById('side-menu');
const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');

openIcon.addEventListener('click', () => {
    // sideMenu.classList.add('show-menu');
    sideMenu.style.left = "0";
})

closeIcon.addEventListener('click', () => {
    // sideMenu.classList.remove('show-menu');
    sideMenu.style.left = "-250px";
})

// window.addEventListener('click', (e) => {
//     if (e.target.classList.contains('fa-bars')) {
//         sideMenu.classList.add('show-menu');
//     }

//     if (e.target.classList.contains('fa-times')) {
//         sideMenu.classList.remove('show-menu');
//     }
// })