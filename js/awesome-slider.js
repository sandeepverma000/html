// Branding Slider
$(document).ready(function()
{

if($('.bbb_viewed_slider').length)
{
var viewedSlider = $('.bbb_viewed_slider');

    viewedSlider.owlCarousel(
    {
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:6000,
    nav:false,
    dots:false,
    responsive:
    {
    0:{items:1},
    575:{items:2},
    768:{items:3},
    991:{items:3},
    1199:{items:3}
    }
});

if($('.bbb_viewed_prev').length)
{
var prev = $('.bbb_viewed_prev');
prev.on('click', function()
{
viewedSlider.trigger('prev.owl.carousel');
});
}

if($('.bbb_viewed_next').length)
{
var next = $('.bbb_viewed_next');
next.on('click', function()
{
viewedSlider.trigger('next.owl.carousel');
});
}
}

});





// Website Slider
$(document).ready(function()
{

if($('.bbb_viewed_slider2').length)
{
var viewedSlider = $('.bbb_viewed_slider2');

    viewedSlider.owlCarousel(
    {
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:6000,
    nav:false,
    dots:false,
    responsive:
    {
    0:{items:1},
    575:{items:2},
    768:{items:3},
    991:{items:3},
    1199:{items:3}
    }
});

if($('.bbb_viewed_prev2').length)
{
var prev = $('.bbb_viewed_prev2');
prev.on('click', function()
{
viewedSlider.trigger('prev.owl.carousel');
});
}

if($('.bbb_viewed_next2').length)
{
var next = $('.bbb_viewed_next2');
next.on('click', function()
{
viewedSlider.trigger('next.owl.carousel');
});
}
}

});





// Mobile App Slider
$(document).ready(function()
{

if($('.bbb_viewed_slider3').length)
{
var viewedSlider = $('.bbb_viewed_slider3');

    viewedSlider.owlCarousel(
    {
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:6000,
    nav:false,
    dots:false,
    responsive:
    {
    0:{items:1},
    575:{items:2},
    768:{items:3},
    991:{items:3},
    1199:{items:3}
    }
});

if($('.bbb_viewed_prev2').length)
{
var prev = $('.bbb_viewed_prev3');
prev.on('click', function()
{
viewedSlider.trigger('prev.owl.carousel');
});
}

if($('.bbb_viewed_next2').length)
{
var next = $('.bbb_viewed_next3');
next.on('click', function()
{
viewedSlider.trigger('next.owl.carousel');
});
}
}

});






// Infographic Slider
$(document).ready(function()
{

if($('.bbb_viewed_slider4').length)
{
var viewedSlider = $('.bbb_viewed_slider4');

    viewedSlider.owlCarousel(
    {
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:6000,
    nav:false,
    dots:false,
    responsive:
    {
    0:{items:1},
    575:{items:2},
    768:{items:3},
    991:{items:3},
    1199:{items:3}
    }
});

if($('.bbb_viewed_prev2').length)
{
var prev = $('.bbb_viewed_prev4');
prev.on('click', function()
{
viewedSlider.trigger('prev.owl.carousel');
});
}

if($('.bbb_viewed_next2').length)
{
var next = $('.bbb_viewed_next4');
next.on('click', function()
{
viewedSlider.trigger('next.owl.carousel');
});
}
}

});
