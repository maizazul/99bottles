// var bottleCount = function(n) {
//
// }


$(document).ready(function() {
  $("form#bottles").submit(function(event) {
    var n = $("input#beers").val();
    var m = (n - 1)
    $(".n").text(n);
    $(".nMinusOne").text(m);

    $("#result").show();
    event.preventDefault();
  });
});
