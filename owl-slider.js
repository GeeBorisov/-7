// Carusel Delivery
const owl = $('.slide-one');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    mouseDrag: false,
    startPosition: 1,
    items: 1,

    responsive : {
        540 : {
            items: 3,
            startPosition:1,
        },
        1200 : {
            items: 3,
            margin: 30,
        }
    }
});

$('.slider__btn--prev').click(function() {

    owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})



const owl2 = $('.slide-two');
owl2.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    mouseDrag: false,
    startPosition: 1,
    items: 1,

    responsive : {
        540 : {
            items: 3,
            startPosition:1,
        },
        1200 : {
            items: 3,
            margin: 30,
        }
    }
});


$('.slider__btn2--prev').click(function() {

    owl.trigger('prev.owl.carousel');
})

$('.slider__btn2--next').click(function() {
    owl2.trigger('next.owl.carousel');
})
