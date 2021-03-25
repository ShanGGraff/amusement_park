$(document).ready(function () {
  const height = parseInt(promt("How tall are you?"));

  if (height >= 5.2) {
    $('adult_rides').show();
  
    else if (height < 5.2) {
      $('kids_ride').show();
    }
  }
})