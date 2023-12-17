$(document).ready(function() {
    $("#reviews-slider").owlCarousel({
        loop:true,
        responsiveClass: true,
        margin:10,
        nav: true,
      autoplay:true,
        navText : ["<img src='https://cdn.shopify.com/s/files/1/0551/8157/4300/files/prev-img.png' style='width:40px;height:40px;'>","<img style='width:40px;height:40px;' src='https://cdn.shopify.com/s/files/1/0551/8157/4300/files/next-img.png'>"],
        center: false,
        responsive:{
            0: {
                items: 1
            },
            540: {
                items: 2

            },
          840: {
                items: 3
            },
          
          
            1240: {
                items: 4
            }
        }
    });
  });