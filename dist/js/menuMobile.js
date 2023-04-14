const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector("nav div");


burger.addEventListener("click", function () {
    burger.classList.toggle("activeRot");
    mobileMenu.classList.toggle("menuMobileActive");  
})
