/* ------------------------- toggel icon navbar ---------------------------------------------------*/

let menuIcon = document.querySelector("#menu_icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('active');

}
/* ------------------------- Scroll section active link ---------------------------------------------------*/
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLink.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* ------------------------ sticky navbar ---------------------------------------------------*/

    let headers = document.querySelectorAll('header');
    headers.classList.toggle('sticky', window.scrollY > 100);

    /* -------------------------remove toggel icon and nav bar---------------------------------------------------*/


    menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');
};
/* ---------------------------- revel.js---------------------------------------------------*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home_content , heading', { origin: 'top' });
ScrollReveal().reveal('.home_img ,.services_container,.portfolio_box,.contact, from', { origin: 'button' });
ScrollReveal().reveal('.home_content h1,.about_img', { origin: 'left' });
ScrollReveal().reveal('.home_content p,.about_content h2,.about_content h3,.about_content p,.about_content  .btn,.wrap', { origin: 'right' });

/* ----------------------------typed.js---------------------------------------------------*/
const  typed =new Typed('.multiple-text',{
        strings:["Frontend Developer","FullStack Developer", "Web Developer","MERN Stack Developer"],
        typeSpeed:70,
        backSpeed:70,
        backDelay:1000,
        loop:TextTrackCue
});
