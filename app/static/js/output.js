$(document).ready(function () {

  $(".artist, .artist-img, .artist-count").hide();

  $("#artist-select").click(function () {
    $(".song-title, .song-artist, .track-img, .track-count").hide();
    $(".artist, .artist-img, .artist-count").show();
    $("#popular-header").html("Your Favorite Artists");
    $("#artist-select").addClass("active-button");
    $("#song-select").removeClass("active-button");
  });

  $("#song-select").click(function () {
    $(".artist, .artist-img, .artist-count").hide();
    $(".song-title, .song-artist, .track-img, .track-count").show();
    $("#popular-header").html("Your Favorite Songs");
    $("#song-select").addClass("active-button");
    $("#artist-select").removeClass("active-button");
  });
});
