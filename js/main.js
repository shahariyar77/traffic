/*case study slider js*/
$(document).ready(function(){
    $(".case-study-carousel").owlCarousel({
        items:3,
        loop:true,
        nav:false,
        autoplay:true,
        margin:30,
        dots:true,
        autoplayTimeout: 4000,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 2
                  },
                  1000: {
                    items: 3
                  }
                }
    });
    /*Testmonial slider js*/
    $(".testmonial-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:false,
        autoplay:true,
        dots:true,
        autoplayTimeout: 4000,
    });
    /*Logocarousel slider js*/
    $(".logo-carousel").owlCarousel({
        items:6,
        loop:true,
        nav:false,
        autoplay:true,
        dots:false,
        margin:40,
        autoplayTimeout: 4000,
                responsive: {
                  0: {
                    items: 2
                  },
                  600: {
                    items: 4
                  },
                  1000: {
                    items: 6
                  }
                }
    });
    
    $(".homepage-slides").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        autoplay:false,
        dots:true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"] 
        
    });
    
    $(".manu-trigger").on('click',function(){
        $(".offcanvas-manu").addClass(".show-offcanvas-manu");
        $(".offcanvas-manu-shade").addClass(".active");
        
    });
    
    $(".manu-close, .offcanvas-manu-shade").on('click',function(){
        $(".offcanvas-manu").removeClass(".show-offcanvas-manu");
        $(".offcanvas-manu-shade").removeClass(".active");
        
    });
    
    
    
    $(".search-trigger").on('click',function(){
        $(".search-bar-wrap").addClass(".active");
        
    });
    
    $(".search-close").on('click',function(){
        $(".search-bar-wrap").removeClass(".active");
        
    });
    
    
    
    
    
    
    
    
    
    
    
    $(".singel-testimonial-box").hover(function(){
     $(".singel-testimonial-box").removeClass("active");
     $(this).addClass("active");   
    });
    
    
    
    
     $('#traffic-manu').slicknav({
         prependTo: '#mobile-manu-wrap',
         allowParentLinks:true
     });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});