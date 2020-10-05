$(document).ready(function () {
  $(".img").each(function (i) {
    $(this).append("<img src='img/slider-image-" + ++i + ".jpg'/>");
  });
  /*Desni Gumb*/
  $(".right").hover(function () {
    $(".right").attr("src", "img/arrows/pd.png");
  }); /* Promjena u plavo */

  $(".right").mouseleave(function () {
    $(".right").attr("src", "img/arrows/sd.png");
  }); /*Vracanje u sivo */

  /*Lijevi Gumb*/
  $(".left").hover(function () {
    $(".left").attr("src", "img/arrows/pl.png");
  }); /* Promjena u plavo */

  $(".left").mouseleave(function () {
    $(".left").attr("src", "img/arrows/sl.png");
  }); /*Vracanje u sivo */
});

$(document).ready( function(){
console.log("ready")
});