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

    // slick slider settings
    $('.about-cards-container.mobile-container-about').slick({
        infinite: false,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
    });

    // product rendering data

    // product datas
    // : { title: '', shortDesc: '', price: '', img: '', url: ''}
    var getData = {
        oven: { title: 'Oven', shortDesc: 'Get this Hanabishi oven today to fulfill all your cooking needs!', price: '2,899', img: 'oven.png', url: 'oven'},
        washingMachine: { title: 'Washing Machine', shortDesc: '6.5Kg Top Load, 8 Wash Cycles. Perfect for many laundry.', price: '10,998', img: 'washing-machine.png', url: 'washingMachine'},
        vacuum: { title: 'Vacuum', shortDesc: 'Not a single dirt can escape (High Efficiency Particulate Air).', price: '10,998', img: 'vacuum.png', url: 'vacuum'}
    };

    var windowLoc = $(location).attr('href');
    var loc = windowLoc.split('/');
    var urlLoc = loc[loc.length-1];
    var stingUrl = urlLoc.split('?');
    var finalUrl = stingUrl[stingUrl.length-2];

    renderData = function() {
        var url = $(location).attr('href'),
            parts = url.split('?'),
            lastPart = parts[parts.length-1];

        $('.pdp .title').text(getData[lastPart].title);
        $('.pdp .desc').text(getData[lastPart].shortDesc);
        $('.pdp .price').text(getData[lastPart].price);
    }

    if (finalUrl === 'pdp.html') {
        renderData();
    }

    renderAllProds = function() {
        var keys = Object.keys(getData);
        for(i = 0; i < keys.length; i++){
            var title = getData[keys[i]].title;
            var price = getData[keys[i]].price;
            var desc = getData[keys[i]].shortDesc;
            var url = getData[keys[i]].url;
            var img = getData[keys[i]].img;

            $('.product-container').append('<div class="product-tile"> <img src="product-images/'+img+'" alt="" class="prod-img"> <p class="prod-title">'+desc+'</p> <p class="price">'+price+'</p> <a href="pdp.html?'+url+'" class="primary-btn">view <i class="fa fa-arrow-right"></i></a> </div>');
        }
    }

    if (urlLoc === 'plp.html') {
        renderAllProds();
    }
});

