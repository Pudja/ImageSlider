$(document).ready(function () {
  $(".img").each(function (i) {
    $(this).append(
      "<img class='image' src='img/slider-image-" + ++i + ".jpg'/>"
    );
  });
});
