$(document).ready(function () {
    const btn_home = $(".menu #Home");
    const btn_product = $(".menu #Product");
    const btn_service = $(".menu #Service");
    const btn_aboutme = $(".menu #Aboutme");

    const menu_home = $(".descript .inhome");
    const menu_product = $(".descript .inproduct");
    const menu_service = $(".descript .inservice");  // fixed typo here
    const menu_aboutme = $(".descript .inaboutme");

    const bottomNav = $(".bottomNav")

    // Function to hide all sections
    function hideAllMenus() {
        menu_home.slideUp();
        menu_product.slideUp();
        menu_service.slideUp();
        menu_aboutme.slideUp();
    }

    // Function to hide bottomNav
    function hideBottomNav() {
        bottomNav.stop(true, false).slideUp(10);
    }

    // Function to show bottomNav
    function showBottomNav() {
        bottomNav.stop(true, false).slideDown(10);
    }

    btn_home.mouseenter(function () { 
        hideAllMenus();  // Hide others before showing the home section
        hideBottomNav();
        menu_home.stop(true, false).slideDown().css({
            'display': 'flex',
            'justify-content': "center"
        });
    });

    btn_product.mouseenter(function () { 
        hideAllMenus();  // Hide others before showing the product section
        hideBottomNav();
        menu_product.stop(true, false).slideDown().css({
            'display': 'flex',
            'justify-content': "center"
        });
    });

    btn_service.mouseenter(function () { 
        hideAllMenus();  // Hide others before showing the service section
        hideBottomNav();
        menu_service.stop(true, false).slideDown().css({
            'display': 'flex',
            'justify-content': "center"
        });
    });

    btn_aboutme.mouseenter(function () { 
        hideAllMenus();  // Hide others before showing the about me section
        hideBottomNav();
        menu_aboutme.stop(true, false).slideDown().css({
            'display': 'flex',
            'justify-content': "center"
        });
    });

    // Add mouseleave handlers for each section to slide up when the mouse leaves
    menu_home.mouseleave(function () { 
        menu_home.stop(true, false).slideUp();
        showBottomNav();
    });

    menu_product.mouseleave(function () { 
        menu_product.stop(true, false).slideUp();
        showBottomNav();
    });

    menu_service.mouseleave(function () { 
        menu_service.stop(true, false).slideUp();
        showBottomNav();
    });

    menu_aboutme.mouseleave(function () { 
        menu_aboutme.stop(true, false).slideUp();
        showBottomNav();
    });


    // Change backgground color
    const bg = $("#background");
    const btn = $("#buttonchange");
    let switchs = true;

    $(btn).click(function () { 
        if (switchs) {
            bg.css({
                "background": 'url("../Font-End_Size/image/background\(test2\).avif")'
            });
        } else {
            bg.css({
                "background": 'url("../Font-End_Size/image/background\(test1\).avif")'
            });
        }
        switchs = !switchs;
    });

    // Hide and show item in categorie
    const categorieList = document.querySelector("#categorieList");
    const btn_categorie = document.querySelector("#categorieBtn");
    let switchOfCategorie = true;
    
    $(btn_categorie).click(function () { 
        if (switchOfCategorie){
            $(categorieList).slideDown();        
        } else {
            $(categorieList).slideUp();
        }
        switchOfCategorie = !switchOfCategorie;
    });

    // Slide display promote
    // arrow
    const btn_arrow_left = document.querySelector("#arrowleft");
    const btn_arrow_right = document.querySelector("#arrowright");

    // image
    const images = [$("#sec1"), $("#sec2"), $("#sec3")];

    // description
    const descriptions = [$("#descript1"), $("#descript2"), $("#descript3")];

    // Initial slide index
    let currentSlide = 0;

    const showSlide = (index) => {
        images.forEach((img, i) => img.hide());
        descriptions.forEach((desc, i) => desc.hide());

        images[index].fadeIn(200);
        descriptions[index].fadeIn(200);
    };

    $(btn_arrow_right).click(() => { 
        // Move to the next slide
        currentSlide = (currentSlide + 1) % images.length;
        showSlide(currentSlide);
    });

    $(btn_arrow_left).click(() => { 
        // Move to the next slide
        currentSlide = (currentSlide - 1 + images.length) % images.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);


});

