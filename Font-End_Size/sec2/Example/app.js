const btn_home = document.querySelector("#t-navbar #Home");
const btn_service = document.querySelector("#t-navbar #Service");
const btn_contact = document.querySelector("#t-navbar #Contact");
const btn_remote = document.querySelector("#t-navbar #Remote");

$(document).ready(function () {
    const menu_home = $(".menu_home");
    const menu_service = $(".menu_service");
    const menu_contact = $(".menu_contact");
    const menu_remote = $(".menu_remote");

    $(btn_home).mouseenter(function () { 
        menu_home.stop(true, false).slideDown();
        menu_home.css({
            'display': 'flex',
            'justify-content': "center"
        })
    });
    menu_home.mouseleave(function () { 
        menu_home.stop(true, false).slideUp();
    });
    
    //
    $(btn_service).mouseenter(function () { 
        menu_service.stop(true, false).slideDown();
        menu_service.css({
            'display': 'flex',
            'justify-content': "center"
        })
    });
    menu_service.mouseleave(function () { 
        menu_service.stop(true, false).slideUp();
    });

    //
    $(btn_contact).mouseenter(function () { 
        menu_contact.stop(true, false).slideDown();
        menu_contact.css({
            'display': 'flex',
            'justify-content': "center"
        })
    });
    menu_contact.mouseleave(function () { 
        menu_contact.stop(true, false).slideUp();
    });

    // 
    $(btn_remote).mouseenter(function () { 
        menu_remote.stop(true, false).slideDown();
        menu_remote.css({
            'display': 'flex',
            'justify-content': "center"
        })
    });
    menu_remote.mouseleave(function () { 
        menu_remote.stop(true, false).slideUp();
    });

});