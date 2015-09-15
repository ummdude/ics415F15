
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});

$(document).ready(function(){
    $("#element1").click(function(){
        $("#element2").hide();
    });
});

$(document).ready(function(){
    $("#element3").click(function(){
        $("#element2").show();
    });
});

$(document).ready(function(){
    $("#element4").mouseenter(function(){
        $("#element5").hide();
    });
});

$(document).ready(function(){
    $("#element1").mouseenter(function(){
        $("#element2").style.color = '#00FF00';
    });
});

$(document).ready(function(){
    $("#element4").mouseleave(function(){
        $("#element5").show();
        $("#element5").style.color = '#00FF00';
    });
});