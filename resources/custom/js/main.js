$(document).ready(function () {

   //initialize swiper when document ready
   var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
         el: '.swiper-pagination'
      },

      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev'
      },
      // And if we need scrollbar
      scrollbar: {
         el: '.swiper-scrollbar'
      }
   });

   //toggling password
   $(".toggle-password,.toggle-password > .checkmark").on('click', function () {
      var x = document.getElementById("password");
      if (x.type === "password") {
         x.type = "text";
      } else {
         x.type = "password";
      }
   });

   var footer = $('.footer'),
         absFooter = $('.absolute-footer'),
         extra = 0;
// footer.css({ opacity: '0', display: 'block' });

   $(window).scroll(function () {

      var scrolledLength = ( $(window).height() + extra ) + $(window).scrollTop(),
            documentHeight = $(document).height();

      if (scrolledLength >= documentHeight) {
         footer.addClass('open');
         // absFooter.addClass('open');
      }
      else if (scrolledLength <= documentHeight && footer.hasClass('open')) {
         footer.removeClass('open');
         // absFooter.removeClass('open');
      }
   });
});
