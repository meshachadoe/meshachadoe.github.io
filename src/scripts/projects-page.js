{
    let navHidden = true;
    let DOMelements = {
        menuOpen: '.menu-open',
        menuToggletext: '.menu-open h4',
        siteTitle: '.site-title',
        navigation: '.full-nav'
    };

    let toggleNav = function() {
        document.querySelector(DOMelements.navigation).classList.toggle('nav-hidden');
        if (navHidden) {
            document.querySelector(DOMelements.menuToggletext).textContent = "close\nmenu";
            navHidden = false;
        } else {
            document.querySelector(DOMelements.menuToggletext).textContent = "open\nmenu";
            navHidden = true;
        }
    }
    
    document.querySelector(DOMelements.menuOpen).addEventListener("click", function() {
        console.log("clicked");
        toggleNav();
    });

}
