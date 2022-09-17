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

        $('.about-cards-container.mobile-container-about').slick({
            infinite: false,
            slidesToShow: 1.2,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
        });
    }

    $(window).on('resize', function() {
        $('.nav').removeClass('active');

        if ($(window).width() < 768) {
            $('.nav-item').addClass('animate__animated');

            $('.about-cards-container.mobile-container-about').slick({
                infinite: false,
                slidesToShow: 1.2,
                slidesToScroll: 1,
                prevArrow: false,
                nextArrow: false,
            });
        } else {
            $('.about-cards-container.mobile-container-about').slick('unslick');
        }
    });

    // product rendering data
    // product datas
    // : { title: '', shortDesc: '', desc: "", price: '', img: '', url: ''}
    var getData = {
        oven: { title: 'Oven', shortDesc: 'Get this Hanabishi oven today to fulfill all your cooking needs!', desc: "Electric oven that features a dimension of 515 x 358 x 368mm, this electric oven is a convection oven that's primarily made of aluminum weighing in at 6.2kg. Also, this consumes only about 1500w of electricity, making you save electricity at the same time.", price: '2,899', img: 'oven.png', url: 'oven'},
        washingMachine: { title: 'Washing Machine', shortDesc: '6.5Kg Top Load, 8 Wash Cycles. Perfect for many laundry.', desc: "A 6.5 kg. fully automatic washer that has a variable water pressure technology. This is an advanced feature that allows your fully automatic washer to operate even with very low water pressure. Other notable features are an energy efficient motor, large led display, eco-saver water recycle function, 8 wash cycles. 10 water level selector. quiet wash. air dry, and child lock.", price: '10,998', img: 'washing-machine.png', url: 'washingMachine'},
        vacuum: { title: 'Vacuum', shortDesc: 'Not a single dirt can escape (High Efficiency Particulate Air).', desc: "This vacuum features a multi-cyclone vacuum cleaner, hepa filter (high efficiency particulate air), and auto cord rewind. It is also the perfect cleaning equipment because it is bagless, easy clean-up, and overload protection. It boasts 2000 watts max power. ≤ 71db. 2.0 liters capacity with a suction power of 240w / 22kpa.", price: '5,200', img: 'vacuum.png', url: 'vacuum'},
        blender: { title: 'Blender', shortDesc: 'Great for making shakes and smoothies.', desc: "This blender has a Circuit breaker for motor safety, a Sharp stainless steel blade, Safety lock switch, and With plastic stirrer for easy mixing. We also offer a one year service warranty in standard services.", price: '1,149', img: 'blender.png', url: 'blender'},
        humidifier: { title: 'Humidifier', shortDesc: 'Puts Moisture into the air, which is good for your skin.', desc: "Effectively humidifies small and medium rooms up to 50 sq.m whilst running whisper quiet up to 24 hours. It also has an auto-off function that activates when the water tank is empty, a 360 degree mist nozzle and variable control settings, and an ultrasonic cool mist increases air moisture for easier breathing and for goodnight sleep.", price: '1,199', img: 'humidifier.png', url: 'humidifier'},
        standMixer: { title: 'Stand mixer', shortDesc: 'Great for baking cakes, and breads.', desc: "This mixer has a 5.5-quart capacity, polished stainless steel bowl, 500-watt motor, 12 speeds for precision mixing. It comes with one power outlet for optional attachments, chef's whisk, dough hook, flat mixing paddle, and splash guard with pour spout, and instruction/recipe book.", price: '18,700', img: 'stand-mixer.png', url: 'standMixer'},
        juicer: { title: 'Juicer', shortDesc: 'Great for making fruit shakes and fruit smoothies.', desc: "Stainless steel blade, easy to clean, no peculiar smell, high-quality food-grade materials, efficient and fast mixing, durable, user-friendly design. Rechargeable with a battery capacity of 1200mah and a charging time of 2-3h (usb charging).", price: '299', img: 'juicer.png', url: 'juicer'},
        wafflIiron: { title: 'Waffle iron', shortDesc: 'Make more waffles with 6 waffle makers.', desc: "A 6 piece hotdog waffle maker with a safety thermal cut-out. 2 pilot light for power and heater and also non-stick for burger and pancake plates. Other features are a locking system, heat insulate handle, stands upright for space saving and convenient storage, and smooth cool touch housing and handle.", price: '893', img: 'waffle-iron.png', url: 'wafflIiron'},
        deepFryer: { title: 'Deep fryer', shortDesc: 'Make french fries fast or other fried foods with high quality content.', desc: "These counter top fryers are designed with safety, durability and simplicity in mind. They are ideal for use in restaurants, fast food shops, luncheonettes, canteens, etc.high grade stainless steel construction. beautiful and practical. It has an efficient heating element, warms rapidly, and its heating module can be lifted up for easy cleaning.", price: '2,099', img: 'deep-fryer.png', url: 'deepFryer'},
        iron: { title: 'Iron', shortDesc: 'Has 6 heat settings and lightweight.', desc: "Has 6 heat settings. weighs 0.55kg and consumes 1000 watts. It features a control switch with fabric guide, sure-glide non-stick coated sole plate, a thermal fuse, and a pilot lamp.", price: '584.50', img: 'iron.png', url: 'iron'},
        microwave: { title: 'Microwave', shortDesc: 'Timer, Easy Cleaning, Mechanical Control.', desc: "It has 20-liter capacity, a manual control to cook every bit of food according to your need, 6 power levels, glass turntable for an even heat, and a defrost function. We also offer a one year service warranty in standard services.", price: '2,989', img: 'microwave.png', url: 'microwave'},
        iceCreamMaker: { title: '', shortDesc: 'Make Ice Cream with fully Automatic System.', desc: "It is made of a great material, has an electric voltage of 220v, power that is 20w, and a rated frequency: 50hz. Has a compartment capacity of 1l with a dimension of 23.5x14.5x42.5cm. We also offer a one year service warranty in standard services.", price: '7,529', img: 'ice-cream-maker.png', url: 'iceCreamMaker'},
        airHumidifier : { title: 'Air Humidifier ', shortDesc: 'Puts Moisture into the air, while having LED Light.', desc: "This air humidifier has a tank capacity of 500ml and a power (input/output): c100-240v 50.60hz/ dc 24v 650ma. Its power consumption is approximately 13w. has 4 time modes which are 60m/120m/180m/0n. Also, it features led light bulbs and comes with accessories such as ac adapter and user manual and measuring cup. Has a good method of mist production: ultrasonic vibration at approx 2.4mhz.", price: '680', img: 'air-humidifier.png', url: 'airHumidifier '},
        speaker: { title: 'Speaker', shortDesc: 'Has Speakerphone mode with long lasting battery life.', desc: "A wireless bluetooth technology with a 40w rms system power, jbl bass radiator, and a rechargeable lithium-ion polymer battery. You don't have to worry about it getting wet because it features an ipx7 rating, can be used as a speakerphone, jbl connect+, up to 15 hours of playtime, and a jbl voice integration.", price: '15,590', img: 'speaker.png', url: 'speaker'},
        freezer: { title: 'Freezer', shortDesc: 'Dual Function Solid Top Chest Freezer/Chiller.', desc: "An 18 cu.ft. solid top chest freezer that has a dual function - freezer or chiller, fast freezing mode, frontal drain, and aluminum inner lining. Its overall appearance features 2 key locks, 2 grip handles, 2 wire baskets, roller feet, 305w input power and a dimension of ( h:w:d ) 91 : 166.5 : 73 cm.", price: '30,610', img: 'freezer.png', url: 'freezer'},
        ovenToaster: { title: 'Oven Toaster', shortDesc: 'Can be used both as an oven or toaster.', desc: "An oven that has 30 Liters Capacity, boasts a 4-Cooking Function that comes with Rotisserie. Has a Wattage: 1,500 W and Voltage: 220V a.c. 50H.", price: '3,229', img: 'oven-toaster.png', url: 'ovenToaster'},
        electricFan: { title: 'Electric Fan', shortDesc: 'Perfect for hot and humid days!', desc: "Get superior air circulation all day long. This electric fan features a 16” (405mm) fan blade that gives you maximum comfort with minimum energy consumption and cost due to a Motor of 65W. It has a 4 speed and a Fan speed of 1,300 RPM which is perfect for your summer needs.", price: '3,270', img: 'electric-fan.png', url: 'electricFan'},
        dishwasher: { title: 'Dishwasher', shortDesc: 'A dish cleaning machine.', desc: "This dishwasher boasts 6 wash programs which are intensive, normal, eco, glass, 90 min, rapid. Also it has a push button program selector, 6 place settings, delay start (2h/4h/8h), child lock,program indicator, rinse aid and salt warning indicator, and progress indicator. Other notable features are its noise level: 49 db, free standing, and program duration: 30 min minimum up to 180min maximum.", price: '31,029', img: 'dishwasher.png', url: 'dishwasher'},
        refrigerator: { title: 'Refrigerator', shortDesc: 'It keeps foods fresh and drinks cool.', desc: "It stores meats and fishes in the optimal condition (up to -1 ℃) to keep them fresh for a longer period of time. it allows you to adjust the shelf depending on the use of your environment. It is a top freezer direct cool inverter type with a capacity of freezer: 79 l and fresh food: 132 l. has a defrost system which can be started manually with the defrost button.", price: '13,495', img: 'refrigerator.png', url: 'refrigerator'},
        freezerInverter: { title: 'Freezer Inverter', shortDesc: 'Automatic inverter cooling system that consumes less electricity.', desc: "This inverter freezer has a low energy consumption which is 6.0 php/day! not only that but it also boasts 3 in 1 function: chilling, freezing,  fast freezing. Also r600a is an environmentally friendly refrigerant, has a manual defrost and a solid top door with sliding glass door.", price: '16,995', img: 'freezer-inverter.png', url: 'freezerInverter'},
        airConditioner: { title: 'Air Conditioner', shortDesc: 'Can create comfort conditions by controlling the temperature for you.', desc: "This air conditioner has a double clean system which reduces maintenance frequency by 50%, and a self cleaning function that prevents build up of mold and germs that cause odor by drying the coil for 30 mins upon turning the unit off. It is manual control, has 2 airway flow cooling, an anti-corrosive base pan, a 2 speed cooling control, and a multi-pore filter.", price: '11,850', img: 'air-conditioner.png', url: 'airConditioner'},
        breadToaster: { title: 'Bread Toaster', shortDesc: 'Can easily toast bread, waffles, bagels, and more in just a minute or two.', desc: "This bread toaster is a 2-slice stainless steel toaster with a slide out crumb tray, a variable temperature control, a cord storage, and a 4cm wide bread slot.", price: '1,490', img: 'bread-toaster.png', url: 'breadToaster'},
        riceCooker: { title: 'Rice Cooker', shortDesc: 'Appliances that are designed to boil or steam rice.', desc: "It has a 1.0 liter capacity with a soft touch switch for cook and warm functions. features a removable non-stick inner pot with rice and water level indicator, a durable stainless steel body and it includes a steamer tray, rice spoon, and measuring cup.", price: '975', img: 'rice-cooker.png', url: 'riceCooker'},
        pressureCooker: { title: ' Pressure Cooker', shortDesc: 'Pressure cookers cook food quickly, deeply and evenly.', desc: "It has a capacity of 9 liters, which is easy to clean. It features an automatic safety device for opening and closing, a safety window in cover that releases steam of excess pressure therefore making it cooks faster, while saving time and energy. also it is made of super aluminum alloy", price: '2,200', img: 'pressure-cooker.png', url: 'pressureCooker'},
        electricKettle: { title: 'Electric Kettle', shortDesc: 'Perfect for heating water for tea or other beverages.', desc: "This kettle has a capacity of 1.7 liters, also it features a dry-boiling protection system with a 360 degrees revolving cordless base. It can be noted that it is illuminated by a light indicator and has an automatic shut-off system, and a concealed stainless steel heating element.", price: '1,100', img: 'electric-kettle.png', url: 'electricKettle'},
        inductionStove: { title: 'Induction Stove', shortDesc: 'Great energy-savers due to its ability to heat food quickly with precise temperatures. ', desc: "This stove is perfect for any kitchen needs for it boasts 6 preset functions (barbeque, stir-fry, hot-pot, soup, boil, warm), a slim type design, a touch sensitive control panel, and a child-lock feature. Also it has high energy efficiency with an auto-sense on pot and auto-off feature which means that it won't consume as much electricity as needed.", price: '2,795', img: 'induction-stove.png', url: 'inductionStove'},
        foodProcessor: { title: 'Food Processor', shortDesc: 'Best kitchen appliance for doing repetitive tasks in the preparation of food.', desc: "Has an 1.0 Liter Capacity with a 1500cc Plastic Jug. It features a 2 Speed Settings With Pulse Function, a 6 Cups Bowl Capacity, and Suction Footing. Also, it has Overload Protection and 5 Blade Attachments which makes food processing very efficient.", price: '4,290', img: 'food-processor.png', url: 'foodProcessor'},
        handMixer: { title: 'Hand Mixer', shortDesc: 'Your go-to at whisking and combining ingredients!', desc: "This electric hand mixer has a copper motor that can knead 1.28kg dough. features an abs+sus decorated housing, which makes a lower noise at 10 speed, 654r/m to 1575r/m. It has an eject button and double chrome plating piece beater and dough hook making it functional while also having minimal design.", price: '1,495', img: 'hand-mixer.png', url: 'handMixer'},
        clothesDryer: { title: 'Clothes Dryer', shortDesc: 'Specializes in removing moisture from a load of clothing, bedding and other textiles.', desc: "This drying equipment has a control type that is manual. It boasts a dry capacity of 6.5 kg with a half load program. The spin wattage of 150 watts and power requirements of 230v~60hz makes it energy efficient and perfect for your daily drying needs.", price: '3,495', img: 'clothes-dryer.png', url: 'clothesDryer'},
        coffeeMaker: { title: 'Coffee Maker', shortDesc: 'Good at brewing hot coffee automatically', desc: "Has an aroma-tech control settings with an east access brewer. It also features a thermo-glass carafe and a keep warm heater plate. Perfect for your coffee needs as it has a 12 cups auto-drip that can be done by only using 950 watts power.", price: '1,800', img: 'coffee-maker.png', url: 'coffeeMaker'}
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

            $('.product-container').append('<a href="pdp.html?'+url+'" class="product-link-wrapper"><div class="product-tile"> <img src="product-images/'+img+'" alt="" class="prod-img"> <p class="prod-title">'+desc+'</p> <p class="price">P'+price+'</p> <p class="primary-btn">view <i class="fa fa-arrow-right"></i></p> </div></a>');
        }
    }

    if (urlLoc === 'plp.html') {
        renderAllProds();
    }

});

