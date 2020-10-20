$(document).ready(function () {
  $(".img").each(function (i) {
    $(this).append(
      "<img class='image' src='img/slider-image-" + ++i + ".jpg'/>"
    );
  });
  /*Right Button*/
  $(".right").hover(function () {
    $(".right").attr("src", "img/arrows/pd.png");
  }); /* To Blue */

  $(".right").mouseleave(function () {
    $(".right").attr("src", "img/arrows/sd.png");
  }); /* Revert to gray */

  /*Left Button*/
  $(".left").hover(function () {
    $(".left").attr("src", "img/arrows/pl.png");
  }); /* To Blue */

  $(".left").mouseleave(function () {
    $(".left").attr("src", "img/arrows/sl.png");
  }); /* Revert to gray */

  /*right button logic */
  $(".right").click(function () {
    var lastFR = $(".my-img-row1 .img").first();
    var lastSR = $(".my-img-row2 .img").first();
    var lastFRW =  lastFR.outerWidth();
    var lastSRW = lastSR.outerWidth();
    //FIRST ROW
    $(".my-img-row1").animate({"right": "-="+lastFRW},
    ()=>$(".my-img-row1").append(lastFR));
    $(".my-img-row1").animate({"right": "+="+lastFRW},-2);

    //SECOND ROW
    $(".my-img-row2").animate({"right": "-="+lastSRW},
    ()=>$(".my-img-row2").append(lastSR));
    $(".my-img-row2").animate({"right": "+="+lastSRW},-2);
  });

  /*left button logic */
  $(".left").click(function () {
    var firstFR = $(".my-img-row1 .img").last();
    var firstSR = $(".my-img-row2 .img").last();
    var firstFRW = firstFR.outerWidth();
    var firstSRW = firstSR.outerWidth();

    //FIRST ROW
    $(".my-img-row1").animate({"right": "+="+firstFRW},
    ()=>$(".my-img-row1").prepend(firstFR));
    $(".my-img-row1").animate({"right": "-="+firstFRW},-2);

    //SECOND ROW
    $(".my-img-row2").animate({"right": "+="+firstSRW},
    ()=>$(".my-img-row2").prepend(firstSR));
    $(".my-img-row2").animate({"right": "-="+firstSRW},-2);
  });
});