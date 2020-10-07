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

  /*right button logic */
  $(".right").click(function () {
    var lastFR = $(".first .img").first();
    var lastSR = $(".second .img").first();
    $(".second").append(lastFR);
    $(".first").append(lastSR);

  });
  /*left button logic */
  $(".left").click(function () {
    var firstFR = $(".first .img").last();
    var firstSR = $(".second .img").last();
    $(".first").prepend(firstSR);
    $(".second").prepend(firstFR);
  });
});
