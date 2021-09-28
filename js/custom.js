$(function () {
  // ==================banner section goes to here======================
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });


  // ==================product section goes to here======================
  // var swiper = new Swiper(".mySwiper1", {
  //   loop: true,
  //   autoplay: {
  //     delay: 2500,
  //     speed: 1000,
  //     disableOnInteraction: false,
  //   },
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 0,
  //     },
  //     767: {
  //       slidesPerView: 2,
  //       spaceBetween: 0,
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     }
  //   }


  // });

  var swiper = new Swiper(".mySwiper1", {
    loop: true,
    autoplay: {
      delay: 2500,
      speed: 1000,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });


  // ==================product section Slick Slider goes to here======================
  $('.product_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed:1000,
    arrows:false,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
  });
  // ==================typed js section goes to here======================
  $(".typed").typed({
		strings: ["&#189; Humans", "Mohammed Rakib", "Nobody"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: Infinity,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});


  // ==================Nav section goes to here======================

// Menu spy nav bar----
var elm = document.querySelector('#main-header');
var ms = new MenuSpy(elm);
 // ===========slide menu==========
 $('.side_oparetor').click(function(){
  $('.sidebar').toggleClass('menu-open');
  $('.side_oparetor i').toggleClass('fa-bars');

});
// slider bar spy nav bar----
var elm = document.querySelector('#sider_nav');
var ms = new MenuSpy(elm);
// scroll nav bar----
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 150){
            $('.navbar').addClass('nav-bg');
        }
        else {
            $('.navbar').removeClass('nav-bg');
        }
    });
     //  animation scroll js-------------------------

     var html_body = $('html, body');
     $('.navbar a').on('click', function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 html_body.animate({
                     scrollTop: target.offset().top - 0
                 }, 500);
                 return false;
             }
         }
     });
     // scroll up--------------------------------------------
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling > 250){
          $(".abmshawon").fadeIn();
      }
      else {
          $(".abmshawon").fadeOut();
      }
  });
  // ==================product section goes to here======================
  // ==================product section goes to here======================
  // ==================product section goes to here======================
});