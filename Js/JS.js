$(document).ready(function () {
  $(".img").each(function (i) {
    $(this).append("<img class='image' src='img/slider-image-" + ++i + ".jpg'/>");
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

  /*right button logic 
  names of the targeted classes will need changing
  after the import of bootstrap
  */
  $(".right").click(function () {
    var lastFR = $(".my-img-row1 .img").first(); 
    var lastSR = $(".my-img-row2 .img").first();
    $(".my-img-row2").append(lastFR);
    $(".my-img-row1").append(lastSR);

  });
  /*left button logic 
    names of the targeted classes will need changing
  after the import of bootstrap
  */
  $(".left").click(function () {
    var firstFR = $(".my-img-row1 .img").last();
    var firstSR = $(".my-img-row2 .img").last();
    $(".my-img-row1").prepend(firstSR);
    $(".my-img-row2").prepend(firstFR);
  });
});
