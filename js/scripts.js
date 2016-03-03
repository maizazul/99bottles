var bottleCount = function(n) {
  var text = "";
  for (i = n ; i > 1; i--) {
    text = text + i + "b"
  }
  return text;
}


$(document).ready(function() {
  $("form#bottles").submit(function(event) {
    var n = $("input#beers").val();

    var result = bottleCount(n)



    $(".n").text(result);
    // $(".nMinusOne").text(m);

    $("#result").show();
    event.preventDefault();
  });
});

// var song = "";
// text += n + "bottles of beer on the wall" + n + "bottles of beer..." + "<br>" + "take one down, pass it around," + n[i] + "bottles of beer on the wall."
