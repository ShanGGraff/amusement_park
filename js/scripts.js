$(document).ready(function () {
  const height = parseInt(prompt("How tall are you?"));

  if (height >= 5) {
    $('#adult_rides').show();

  }

  else if (height <= 4) {
    $('#kids_rides').show();

  } else {
    $('#not_valid').show();

  }
});

