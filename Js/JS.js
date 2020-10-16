$(document).ready(function () {
  $(".img").each(function (i) {
    $(this).append(
      "<img class='image' src='img/slider-image-" + ++i + ".jpg'/>"
    );
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
    var lastFR = $(".my-img-row1 .img").first();
    var lastSR = $(".my-img-row2 .img").first();
    $(".my-img-row1").animate({ right: lastFR.width() });
    $(".my-img-row2").animate({ left: lastFR.width() });
    $(".my-img-row2").append(lastFR);
    $(".my-img-row1").append(lastSR);
  });
  /*left button logic */
  $(".left").click(function () {
    sumFR = 0;
    sumSR = 0;
    resetFR = 0;
    resetSR = 0;
    var firstFR = $(".my-img-row1 .img").last();
    var firstSR = $(".my-img-row2 .img").last();
    var firstFRW = firstFR.outerWidth();
    var firstSRW = firstSR.outerWidth();

    sumFR = resetFR + firstFRW;
    resetFR = sumFR * 0;
    sumSR = resetSR - firstSRW;
    resetSR = sumSR * 0;

    $(".my-img-row1").animate({ right: sumFR },200, 
      () => $(".my-img-row1").prepend(firstSR));
      //() => $(".my-img-row1").animate({ right: resetFR },200) );
    $(".my-img-row2").animate({ right: sumSR }, 200,
      () => $(".my-img-row2").prepend(firstFR));
      //() => $(".my-img-row2").animate({ right: resetSR },200));
  });
});

