window.addEventListener('load', function(){

    $( ".nav__menu" ).toggle();

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

$(document).ready(function(){
    $(".bodymovinanim").click(function(){
        $( ".nav__menu" ).toggle();
    });
});