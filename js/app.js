$(document).ready(function() {
    function reveal() {
        var reveals = document.querySelectorAll(".animate");
    
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 200;
    
            if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("animate__fadeInLeft");
            reveals[i].classList.remove("animate__fadeOutLeftBig");
            } else {
            reveals[i].classList.remove("animate__fadeInLeft");
            reveals[i].classList.add("animate__fadeOutLeftBig");
            }
        }
    }
    
    window.addEventListener("scroll", reveal);

    $('.close-nav').on('click', (e)=> {
        var $this = $(e.currentTarget);

        $('.nav').toggleClass('active');
        $('.hamburger-menu i').toggleClass('fa-xmark');
        $('.nav-item').toggleClass('animate__bounce');
    });

    $('.nav-item').on('click', (e)=> {
        $('.nav').removeClass('active');
        $('.nav-item').removeClass('animate__bounce');
        $('.hamburger-menu i').removeClass('fa-xmark');
    })

    if ($(window).width() < 768) {
        $('.nav-item').addClass('animate__animated');
    }

    $(window).on('resize', function() {
        $('.nav').removeClass('active');
    });

    $('.about-cards-container.mobile-container-about').slick({
        infinite: false,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
    });
});