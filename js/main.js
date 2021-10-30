$(document).ready(function() {
    $('.schedule').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button class="arrows-slider slider-prev"><img src="img/prev.png" alt=""></buton>',
        nextArrow: '<button class="arrows-slider slider-next"><img src="img/next.png" alt=""></button>'
    });
    $('.review').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button class="rev-prev"><img src="img/prev-rev.png" alt=""></buton>',
        nextArrow: '<button class="rev-next"><img src="img/next-rev.png" alt=""></button>'
    });
    $('#mod').click(function() {
        $('#head-modal').arcticmodal();
    });
    $('#book-mod').click(function() {
        $('#head-modal').arcticmodal();
    });
    $('#contact-mod').click(function() {
        $('#head-modal').arcticmodal();
    });
    $('#rev').click(function() {
        $('#head-modal-view').arcticmodal();
    });
    $("a.scroll-arrow-dir").click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate({ scrollTop: destination }, 1000);
        return false;
    });
});

// слайдер пати

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
