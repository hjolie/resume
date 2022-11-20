// Hamburger Menu
const sideMenu = document.getElementById('side-menu');
const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');
const links = document.querySelectorAll('.link');

openIcon.addEventListener('click', () => {
    // sideMenu.classList.add('show-menu');
    sideMenu.style.left = "0";

    openIcon.classList.remove('fixed-open-icon');

    links.forEach(link => {
        link.classList.add('side-menu-link');
    })

    const sideMenuLinks = document.querySelectorAll('.side-menu-link');
    sideMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            sideMenu.style.left = "-250px";
        })
    })
})

closeIcon.addEventListener('click', () => {
    // sideMenu.classList.remove('show-menu');
    sideMenu.style.left = "-250px";
    openIcon.classList.add('fixed-open-icon');
})


// Go Top Button
const goTop = document.querySelector('.go-top');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;

    
    if (scrollHeight > 500 && sideMenu.style.left !== "0") {
        openIcon.classList.add('fixed-open-icon');
    }
    else {
        openIcon.classList.remove('fixed-open-icon');
    }
    

    // if (window.matchMedia('(max-width: 1310px)').matches) {
    //     if (sideMenu.style.left === "0") {
    //         openIcon.classList.remove('fixed-open-icon');
    //     } else if (scrollHeight > 500) {
    //         openIcon.classList.add('fixed-open-icon');
    //     }
    //     else {
    //         openIcon.classList.remove('fixed-open-icon');
    //     }
    // }

    if (scrollHeight > 500) {
        goTop.classList.add('show-go-top');
    } else {
        goTop.classList.remove('show-go-top');
    }
})


// window.addEventListener('click', (e) => {
//     if (e.target.classList.contains('fa-bars')) {
//         sideMenu.classList.add('show-menu');
//     }

//     if (e.target.classList.contains('fa-times')) {
//         sideMenu.classList.remove('show-menu');
//     }
// })