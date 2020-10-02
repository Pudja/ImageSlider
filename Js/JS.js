$(document).ready(function(){

        /*Desni Gumb*/
    $(".right").hover(function(){
    $(".right").attr("src" , "pd.png");
    });/* Promjena u plavo */

    $(".right").mouseleave(function(){
    $(".right").attr("src" , "sd.png");
    });/*Vracanje u sivo */


    /*Lijevi Gumb*/
    $(".left").hover(function(){
    $(".left").attr("src" , "pl.png");    
    });/* Promjena u plavo */

    $(".left").mouseleave(function(){
    $(".left").attr("src" , "sl.png");
    });/*Vracanje u sivo */

    /* POMICANJE SLIKA */



var slider = $(".slider");
var sum = 0;
var current = 0;
var lastIndex = $(".Slika").last().index();
var firstIndex = $(".Slika").first().index();


/* Lijevo */
$(".left").click(function(){
    
    var fokus = $("#Start");
    var prosla = fokus.prev();
    var sljedeca = fokus.next();
    sum = current - prosla.outerWidth();
    current = sum;

if( $("#Start").index() === firstIndex){
/*Posljednja slika */    
var last = $(".Slika").last() ;
    lastIndex = last.index() ;

    var totalWidths = 0;
    $('div.Slika').each(function(){
        totalWidths += $(this).width();
    });
    totalWidths = totalWidths - last.width();
    console.log(totalWidths)

    sum = totalWidths ;
    current = sum ;
    last.attr("id", "Start");
    fokus.attr("id", " ");
    $(slider).animate({right: sum}, "fast" )
}
else{
    /*Prosla slika */
    $(slider).animate({right: sum}, "fast" )
    prosla.attr("id", "Start");
    fokus.attr("id", " ")

};

});
    /* Desno */
        $(".right").click(function(){
            var fokus = $("#Start");
            var prosla = fokus.prev();
            var sljedeca = fokus.next();
            sum = current + fokus.outerWidth();
            current = sum;


if( $("#Start").index() === lastIndex ){
/*Povratak na Prvu sliku */
    var first = $(".slider .Slika").eq(0);

sum = 0;
current = sum ;
$(slider).animate({right: sum}, "fast" )
fokus.attr("id", " ");
first.attr("id", "Start");
}
else{
    /*Sljedeca slika */
    $(slider).animate({right: sum})
    sljedeca.attr("id", "Start");
    fokus.attr("id", " ")
    };
});
});