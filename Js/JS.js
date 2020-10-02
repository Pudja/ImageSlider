$(document).ready( function() {

    $(".img").each(function(i){
    $(this).append("<img src='img/slider-image-"+(++i)+".jpg'/>");   
    });

});