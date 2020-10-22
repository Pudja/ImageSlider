$(document).ready(function () {
  /*Right Button*/
  $(".right").hover(function () {
    $(".right").attr("src", "img/arrows/pd.png");
  }); /* To Blue */

  $(".right").mouseleave(function () {
    $(".right").attr("src", "img/arrows/sd.png");
  }); /* Revert to gray */

  /*right button logic */
  $(".right").click(function () {
    var lastFR = $(".my-img-row1 .img").first();
    var lastSR = $(".my-img-row2 .img").first();
    var lastFRW = lastFR.outerWidth();
    var lastSRW = lastSR.outerWidth();

    //FIRST ROW
    $(".my-img-row1").animate({ right: "-=" + lastFRW }, () =>
      $(".my-img-row1").append(lastFR).stop()
    );
    $(".my-img-row1")
      .animate({ right: "+=" + lastFRW }, -2)
      .stop();
    //SECOND ROW
    $(".my-img-row2").animate({ right: "-=" + lastSRW }, () =>
      $(".my-img-row2").append(lastSR).stop()
    );
    $(".my-img-row2")
      .animate({ right: "+=" + lastSRW }, -2)
      .stop();
  });
});
