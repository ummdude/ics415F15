
$(document).ready(function(){
  $("#a1").hide();
  $("#a2").hide();
  $("#a3").hide();
  $("#a4").hide();
  $("#a5").hide();

  $("#q1").click(function(){
    $("#q1").css('color', 'red');
    $("#q1").text("Q: Number after 1? (-)");
    $("#a1").toggle();
  });

  $("#q2").click(function(){
    $("#q2").css('color', 'red');
    $("#q2").text("Q: Letter after A? (-)");
    $("#a2").toggle();
  });

  $("#q3").click(function(){
    $("#q3").css('color', 'red');
    $("#q3").text("Q: The number of fingers on a hand? (-)");
    $("#a3").toggle();
  });

  $("#q4").click(function(){
    $("#q4").css('color', 'red');
    $("#q4").text("Q: Tick Tack ____ (-)");
    $("#a4").toggle();
  });

  $("#q5").click(function(){
    $("#q5").css('color', 'red');
    $("#q5").text("Q: Opposite of flat: (-)");
    $("#a5").toggle();
  });


  $("#element1").mouseenter(function(){
    $("#element2").css('color', 'red');
  });

  $("#element1").mouseleave(function(){
    $("#element2").css('color', '');
  });

});