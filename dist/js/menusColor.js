//przechodzenie po menu z zaznaczeniem

const menuMobileItems = document.querySelectorAll('.item_menuMobile');

let len = menuMobileItems.length;

function delBgMobileColor() {
    menuMobileItems.forEach(function (element) {
        element.classList.remove("active");
    });
};


for (let i = 0; i <= len - 1; i++) {
    menuMobileItems[i].addEventListener("click", function () {
        delBgMobileColor();
        menuMobileItems[i].classList.add("active");
    });    
};



