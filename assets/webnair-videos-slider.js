$(document).ready(function() {
    $("#webnair-video-slider").owlCarousel({
        responsiveClass: true,
        items:2,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        navText : ["<img src='https://cdn.shopify.com/s/files/1/0551/8157/4300/files/prev-img.png' style='width:40px;height:40px;'>","<img style='width:40px;height:40px;' src='https://cdn.shopify.com/s/files/1/0551/8157/4300/files/next-img.png'>"],
        center: false,
        responsive:{
            0: {
                items: 1
            },
            540: {
                items: 1

            },
          840: {
                items: 2
            },
          
          
            1240: {
                items: 2
            }
        }
    });
  });