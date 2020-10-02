$(document).ready(function(){
    var slider = $(".slider2");
    var sum = 0;
    var current = 0;
    var lastIndex = $(".Slika2").last().index();
    var firstIndex = $(".Slika2").first().index();
    


    /*Desni Gumb - mice u lijevo */
    $(".right").click(function(){
    
        var fokus = $("#Start2");
        var prosla = fokus.prev();
        var sljedeca = fokus.next();
        sum = current - prosla.outerWidth();
        current = sum;
    
    if( $("#Start2").index() === firstIndex){
    /*Posljednja slika */    
    var last = $(".Slika2").last() ;
        lastIndex = last.index() ;
        totalWidths = 0;
        $('div.Slika2').each(function(){
            totalWidths += $(this).width();
        });
        totalWidths = totalWidths - last.width();
        console.log(totalWidths)
    
        sum = totalWidths ;
        current = sum ;
        last.attr("id", "Start2");
        fokus.attr("id", " ");
        $(slider).animate({right: sum})
    }
    else{
        /*Prosla slika */
        $(slider).animate({right: sum})
        prosla.attr("id", "Start2");
        fokus.attr("id", " ")
    
    };
});
/*Lijevi Gumb - mice u desno */
$(".left").click(function(){
    var fokus = $("#Start2");
    var prosla = fokus.prev();
    var sljedeca = fokus.next();
    sum = current + fokus.outerWidth();
    current = sum;


if( $("#Start").index() === lastIndex ){
/*Povratak na Prvu sliku */
var first = $(".slider2 .Slika2").eq(0);
sum = 0;
current = sum ;
$(slider).animate({right: sum})
fokus.attr("id", " ");
first.attr("id", "Start2");
}
else{
/*Sljedeca slika */
$(slider).animate({right: sum})
sljedeca.attr("id", "Start2");
fokus.attr("id", " ")
};
});

});