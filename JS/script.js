$(function(){
    $('#menu').slicknav({
        label:"",
        brand:"Shama Parveen",
    });
});

$(document).ready(function() {
    $(".skitter-large").skitter({
        dots:false,
        navigation:true,
        theme:'clean'
    });
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    loop:true,
    margin:100,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:true
        }
    }
    });
  });
  
  $(document).ready(function(){
    $(".progress_bar_html").animate({"width":"80%"},1000,function(){
        $(".progress_bar_CSS2").animate({"width":"70%"},1000,function(){
            $(".progress_bar_CSS3").animate({"width":"90%"},1000,function(){
                $(".progress_bar_JavaScript").animate({"width":"60%"},1000,function(){
                    $(".progress_bar_jQuery").animate({"width":"85%"},1000);
                })
            })
        })
    })
  })