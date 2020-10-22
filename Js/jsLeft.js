$(document).ready(function () {
  /*Left Button*/
  $(".left").hover(function () {
    $(".left").attr("src", "img/arrows/pl.png");
  }); /* To Blue */

  $(".left").mouseleave(function () {
    $(".left").attr("src", "img/arrows/sl.png");
  }); /* Revert to gray */

  /*left button logic */
  $(".left").click(function () {
    var firstFR = $(".my-img-row1 .img").last();
    var firstSR = $(".my-img-row2 .img").last();
    var firstFRW = firstFR.outerWidth();
    var firstSRW = firstSR.outerWidth();

    //FIRST ROW
    $(".my-img-row1").animate({ right: "+=" + firstFRW }, () =>
      $(".my-img-row1").prepend(firstFR).stop()
    );
    $(".my-img-row1")
      .animate({ right: "-=" + firstFRW }, -2)
      .stop();
    //SECOND ROW
    $(".my-img-row2").animate({ right: "+=" + firstSRW }, () =>
      $(".my-img-row2").prepend(firstSR).stop()
    );
    $(".my-img-row2")
      .animate({ right: "-=" + firstSRW }, -2)
      .stop();
  });
});
