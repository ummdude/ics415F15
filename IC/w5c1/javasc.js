
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });

    $("#element1").click(function(){
        $("#element2").hide();
    });

    $("#element3").click(function(){
        $("#element2").show();
    });

    $("#element4").mouseenter(function(){
        $("#element5").hide();
    });

    $("#element1").mouseenter(function(){
        $("#element2").css('color', 'red');
    });

    $("#element1").mouseleave(function(){
      $("#element2").css('color', '');
    });

    $("#element4").mouseleave(function(){
        $("#element5").show();

    });
});