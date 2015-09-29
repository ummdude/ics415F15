
function loadXMLDoc() {
  var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
      document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
      }
    }
  xmlhttp.open("GET","ajax_info.txt",true);
  xmlhttp.send();
}

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