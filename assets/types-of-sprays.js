  $(document).ready(function() {
    $("#owl-slider-types").owlCarousel({
      loop: true,
      responsiveClass: true,
      margin: 10,
      nav: true,
      center: true,
      navText: [
        "<img src='https://cdn.shopify.com/s/files/1/0551/8157/4300/files/prev-img.png' style='width:40px;height:40px;'>", "<img style='width:40px;height:40px;' src='https://cdn.shopify.com/s/files/1/0551/8157/4300/files/next-img.png'>"
      ],
      center: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        },
        1240: {
          items: 3
                }
      }
    });
  });
