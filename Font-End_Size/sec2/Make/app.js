$(document).ready(function () {
    const btn_home = $(".menu #Home");
    const btn_product = $(".menu #Product");
    const btn_service = $(".menu #Service");
    const btn_aboutme = $(".menu #Aboutme");

    const menu_home = $(".descript .inhome");
    const menu_product = $(".descript .inproduct");
    const menu_service = $(".descript .inservice");  // fixed typo here
    const menu_aboutme = $(".descript .inaboutme");

    // Function to hide all sections
    function hideAllMenus() {
        menu_home.slideUp();
        menu_product.slideUp();
        menu_service.slideUp();
        menu_aboutme.slideUp();
    }

    btn_home.mouseenter(function () { 
        hideAllMenus();  // Hide others before showing the home section
        menu_home.stop(true, false).slideDown().css({
            'display': 'flex',
            'justify-content': "center"
        });
    });

    btn_product.mouseenter(function () { 
        hideAllMenus();  // Hide others before showing the product section
        menu_product.stop(true, false).slideDown().css({
            'display': 'flex',
            'justify-content': "center"
        });
    });

    btn_service.mouseenter(function () { 
        hideAllMenus();  // Hide others before showing the service section
        menu_service.stop(true, false).slideDown().css({
            'display': 'flex',
            'justify-content': "center"
        });
    });

    btn_aboutme.mouseenter(function () { 
        hideAllMenus();  // Hide others before showing the about me section
        menu_aboutme.stop(true, false).slideDown().css({
            'display': 'flex',
            'justify-content': "center"
        });
    });

    // Add mouseleave handlers for each section to slide up when the mouse leaves
    menu_home.mouseleave(function () { 
        menu_home.stop(true, false).slideUp();
    });

    menu_product.mouseleave(function () { 
        menu_product.stop(true, false).slideUp();
    });

    menu_service.mouseleave(function () { 
        menu_service.stop(true, false).slideUp();
    });

    menu_aboutme.mouseleave(function () { 
        menu_aboutme.stop(true, false).slideUp();
    });
});
