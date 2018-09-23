// Animate Smooth Scroll
$('#view-welcome').on('click', function() {
    const intro = $('#intro').position().top;

    $('html, body').animate({
        scrollTop: intro
    }, 900);
});
