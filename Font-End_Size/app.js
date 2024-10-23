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
                "background-color": "#3C3D37"
            });
        } else {
            bg.css({
                "background-color": "white"
            });
        }
        switchs = !switchs;
    });


});

// JavaScript for dropdown functionality
document.getElementById("categorieBtn").addEventListener("click", function() {
    var categorieList = document.getElementById("categorieList");
    categorieList.classList.toggle("active");  // Toggle between showing and hiding the dropdown
});

