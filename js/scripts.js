$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
        stagePadding: 250,
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        
    })
});

        // Page Scroll
        $(document).ready(function () {
            $('a[data-scroll-to]').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
                    || location.hostname == this.hostname) {

                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 72
                        }, 1000);
                        return false;
                    }
                }
            });
        });
        $('#hamburger').on('click', function(){
            $(this).toggleClass('is-active')
            $('.nav-wrapper').slideToggle()
        })

        

        // Fixed Nav
        $(document).ready(function() {

            var scrollTop = $('#anchor').offset().top;

            $(window).scroll(function(){
                if($(window).scrollTop() >= scrollTop){

                    $('.nav-wrapper').addClass('fixed')
                }else{
                    $('.nav-wrapper').removeClass('fixed')
                }
            })
          
          // Active Nav Link
          // $('nav ul li a').click(function(){
          //        $('nav ul li a').removeClass('active');
          //        $(this).addClass('active');
          //   });
        })


