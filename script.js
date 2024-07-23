const anchorTags = document.querySelectorAll("a")
const pageLoader = document.querySelector(".page-loader");
const homePage = document.querySelector(".main-home")
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuBtn = document.querySelector(".hamburger-menu button");
const menuDash = document.querySelector(".menu-dash")
const topDash = document.querySelectorAll(".top-dash");
const middleDash = document.querySelectorAll(".middle-dash");
const bottomDash = document.querySelectorAll(".bottom-dash");
const navBarEl = document.querySelector(".nav");
const navbarLinks = document.querySelectorAll(".nav__ul li a");
const landingH1El = document.getElementById("landing-h1");
const landingPEl = document.getElementById("landing-p");
const landingImgEl = document.querySelector("#landing-img");
const landingLinkEl = document.getElementById("landing-a")
const nextBtnEl = document.getElementById("btn-right");
const prevBtnEl = document.getElementById("btn-left");
const socialLinks = document.querySelector(".social__links");
const currentYearEl = document.getElementById("year");
const footerSmallEl = document.querySelector("#copyright")
const dateToday = new Date();



// Hamburger Menu
hamburgerMenuBtn.addEventListener("click",(evnt) => {
    hamburgerMenuBtn.firstElementChild.classList.toggle("top-dash");
    menuDash.nextElementSibling.classList.toggle("middle-dash");
    hamburgerMenuBtn.lastElementChild.classList.toggle("bottom-dash");
    navBarEl.classList.toggle("nav-hidden")
})

// Calendar
const month = dateToday.toLocaleString("sw-KE",{month: "long"});
const date = dateToday.toLocaleString("sw-KE", {day: "numeric"});
const year = dateToday.toLocaleString("sw-KE", { year:"numeric"})

const calendar = document.createElement("small");
const calendarText = document.createTextNode(`-${month} ${date} ${year}-`);
calendar.appendChild(calendarText);
calendar.style.backgroundColor = "transparent"

// socialLinks.insertAdjacentElement("beforebegin", calendar)


currentYearEl.innerText = dateToday.getFullYear();

// page loader
window.addEventListener("load", (evnt) => {
    pageLoader.classList.add("hidden");
    homePage.classList.add("visible");
})

// navbar links
navbarLinks.forEach((link)=> {
    link.addEventListener("click", (evnt) => {
        link.style.color = "var(--BGHEADER)";
        link.style.backgroundColor = "var(--HEADERCOLOR)";
    })
})

// Landing image
landingImgEl.addEventListener("click", (evnt) => {
    landingPEl.classList.add("displaynone");
    landingImgEl.style.filter = "brightness(87%)";
    landingImgEl.style.transform = "scale(1.03)";
})

// Image scroll
const imageUrlArray = ["./img-assets/sf90.jpg","./img-assets/2020r8.jpeg","./img-assets/amg.jpg", "./img-assets/lamborghini.jpeg", ];
// , "./img-assets/tesla.jpeg", "./img-assets/gt3.jpg", "./img-assets/mclarrenresized.jpg"
let n = 0;

prevBtnEl.addEventListener("click",(evnt) => {
    n === 0 && (n = imageUrlArray.length);
    n--;
    landingPEl.classList.add("displaynone");
    landingImgEl.style.animation = "slideShow .8s ease-in-out;"
    landingImgEl.style.filter = "brightness(100%)";
    slideShow()
})

nextBtnEl.addEventListener("click",(evnt) => {
    n === (imageUrlArray.length - 1) && (n = -1);
    n++;
    landingPEl.classList.add("displaynone");
    landingImgEl.style.animation = "slideShow .8s ease-in-out;"
    landingImgEl.style.filter = "brightness(100%)";

    slideShow();
})
function slideShow(){
    n !== 0 && (landingLinkEl.style.backgroundColor = "transparent");
    n !== 0 && (landingLinkEl.style.color = "white");
    n !== 0 && (landingLinkEl.style.boxShadow= "none");
    landingImgEl.setAttribute("src", `${imageUrlArray[n]}`);
}
slideShow()

// Products