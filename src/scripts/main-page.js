{
    let DOMelements = {
        siteTitle: '.site-title'
    }

    anime({
        targets: DOMelements.siteTitle,
        translateY: function() {
            return anime.random(-50, 50);
        },        // delay: function(el, i) { return i * 100; },
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
    });

}