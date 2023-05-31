
const toTopBtn = document.querySelector('.to-top');

// gdy scrollowanie nizej 360px pokaz button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 360 || document.documentElement.scrollTop > 360) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
}

toTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    //aktywny start
    const menuItems = document.querySelectorAll('.item_Menu');

    menuItems.forEach(function (element) {
        element.classList.remove("active");
    });
    
    menuItems[0].classList.add("active");
    
    
});




