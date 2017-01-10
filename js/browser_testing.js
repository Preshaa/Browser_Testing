$(document).ready( function() {
  $("#click").click( function() {
    var model= $(".options").val();
    var url= $("#url").val();
    $("iframe").attr("src",url);
    if(model=="iPhone 5") {
    	$("iframe").attr("class","iphone5");
    }
    else if (model=="iPhone 6") {
    	$("iframe").attr("class","iphone6");
    }
    else if (model=="Nexus 5") {
    	$("iframe").attr("class","nexus5");
    }
    else if (model=="Moto G") {
    	$("iframe").attr("class","motog");

    }
  });
});
    