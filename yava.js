$(function() {

    /* Fixed header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
    let introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

        if( scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    console.log(scrollPos);
});

    /*Smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

    $("html, body").animate({
        scrollTop: elementOffset -50
    }, 700);

   });

});
