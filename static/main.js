window.addEventListener('load', function(){
    setTimeout(function(){ 
        console.log("this works");

        $( ".loading-page" ).animate({
            opacity: 0,
          }, 1000);
        

        setTimeout(function(){ 
            $( "lottie-player" ).animate({
                padding: 0,
              }, 500);
         }, 500);
         
        setTimeout(function(){ $(".loading-page").remove(); }, 1000);
        setTimeout(function(){ $("body").css("overflow-y", "auto");}, 500);
    }, 2000);
    
})



 /*$( ".loading-page" ).animate({
    opacity: 0,
    transform: scale(2,2)
  }, 1000);
  setTimeout(function(){ $(".loading-page").css("display", "none"); }, 1000);
  $("body").css("overflow-y", "auto");*/


//setTimeout(function(){ $(".loading-page").css("display", "none"); }, 5000);
//setTimeout(function(){ $("body").css("overflow-y", "auto"); }, 3500);