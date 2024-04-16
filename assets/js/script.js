

  $(document).ready(function(){
  $("h5").click(function(){
  $(this).css({
    "color": "red",
  
  

  });

  });
  });
  

  $(document).ready(function(){
    $("p").dblclick(function(){
    $(this).hide("slow");
    }); 
    $("p").click(function(){
        $(this).css({
        "color": "red",
        "font-size": "2em"
        });
    });
});