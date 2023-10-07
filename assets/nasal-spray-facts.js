$(document).ready(function() {
    $("#nasal-spray-facts-slider").owlCarousel({
        loop:true,
        responsiveClass: true,
        margin:10,
        nav: true,
        navText : ["<img src='https://cdn.shopify.com/s/files/1/0551/8157/4300/files/prev-img.png' style='width:40px;height:40px;'>","<img style='width:40px;height:40px;' src='https://cdn.shopify.com/s/files/1/0551/8157/4300/files/next-img.png'>"],
        responsive:{
            0: {
                items: 1
            },
            768: {
                items: 2    

            },
            1240: {
                items: 2
            }
        }
    });
  });