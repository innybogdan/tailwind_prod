
// function section1() {
    //   const element = document.getElementById("section1");
    //   element.scrollIntoView({behavior: 'smooth' });
    // }
    
    // 
   
    function section2() {
    const mobileMenu = document.querySelector("nav div");
    mobileMenu.classList.remove("menuMobileActive");

    const element = document.getElementById("section2");
    element.scrollIntoView({behavior: 'smooth' });

    const burger = document.querySelector(".burger");
    burger.classList.remove("activeRot");
    };

    function section3() {
    const element = document.getElementById("section3");
    element.scrollIntoView({behavior: 'smooth' });
    }

    function section4() {
    const element = document.getElementById("section4");
    element.scrollIntoView({behavior: 'smooth' });
    }

    function section5() {
    const element = document.getElementById("section5");
    element.scrollIntoView({behavior: 'smooth' });
    }