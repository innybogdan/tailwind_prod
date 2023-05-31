//przechodzenie po menu z zaznaczeniem

const menuItems = document.querySelectorAll('.item_Menu');

let len = menuItems.length;

function delBgMobileColor() {
    menuItems.forEach(function (element) {
        element.classList.remove("active");
    });
};


for (let i = 0; i <= len - 1; i++) {
    menuItems[i].addEventListener("click", function () {
        delBgMobileColor();
        menuItems[i].classList.add("active");
    });    
};





