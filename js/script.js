// ---MENU---
$(document).ready(function () {



    $('.controls .buttons').click(function () {

        $(this).addClass('button-active').siblings().removeClass('button-active');

        let filter = $(this).attr('data-filter');
        if (filter == 'All') {
            $('.dish .image').show(400);
        } else {
            $('.dish .image').not('.' + filter).hide(200);
            $('.dish .image').filter('.' + filter).show(400);
        }

    });

});


// ---timer---
setInterval(setClock, 1000)

function setClock() {

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let date = now.getDate() + 1;

    let closingtime = new Date(year, month, date, 22, 0);

    document.getElementById("dayst").innerHTML = "0" + 3;
    if (Math.floor(((closingtime.getTime() - now.getTime()) / 3600000) % 24) < 10) {
        document.getElementById("hourst").innerHTML = "0" + Math.floor(((closingtime.getTime() - now.getTime()) / 3600000) % 24);
    }
    else {
        document.getElementById("hourst").innerHTML = Math.floor(((closingtime.getTime() - now.getTime()) / 3600000) % 24);
    }
    if (Math.floor(((closingtime.getTime() - now.getTime()) / 60000) % 60) < 10) {
        document.getElementById("minutest").innerHTML = "0" + Math.floor(((closingtime.getTime() - now.getTime()) / 60000) % 60);
    }
    else {
        document.getElementById("minutest").innerHTML = Math.floor(((closingtime.getTime() - now.getTime()) / 60000) % 60);

    }
    if (Math.floor(((closingtime.getTime() - now.getTime()) / 1000) % 60) < 10) {
        document.getElementById("secondst").innerHTML = "0" + Math.floor(((closingtime.getTime() - now.getTime()) / 1000) % 60);
    }
    else {
        document.getElementById("secondst").innerHTML = Math.floor(((closingtime.getTime() - now.getTime()) / 1000) % 60);

    }
    // document.getElementById("minutest").innerHTML = Math.floor(((closingtime.getTime() - now.getTime()) / 60000) % 60);
    // document.getElementById("secondst").innerHTML = Math.floor(((closingtime.getTime() - now.getTime()) / 1000) % 60);
}


setClock();

// Hamburger start
const Hamburger = document.querySelector(".navhamburger");
const NavMenu = document.querySelector(".nav_menu");
Hamburger.addEventListener("click", () => {
    Hamburger.classList.toggle("active");
    NavMenu.classList.toggle("active");
})
document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
    Hamburger.classList.remove("active");
    NavMenu.classList.remove("active");
}))
// Hamburger end




let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});


function Submitted() {
    alert("Your order awaits you on table 17");
}