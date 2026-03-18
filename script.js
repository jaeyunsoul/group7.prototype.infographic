$(document).ready(function(){

  // Sliding gallery
  $("#startSlide").click(function(){
    $(".imgBox").each(function(index){
      $(this).delay(400 * index).fadeIn(600);
    });
  });

  // Feedback panel
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });

  // ✅ CHANGE IMAGE (TOGGLE FIX HERE)
  let isChanged = false;

  $("#changeBtn").click(function(){
    if(!isChanged){
      $("#myImage").fadeOut(200, function(){
        $(this)
          .attr("src", "https://uploads.onecompiler.io/44cyrhw8k/44gqkypvd/1000016989.png")
          .fadeIn(200);
      });
      isChanged = true;
      $("#changeBtn").text("Show Original");
    } else {
      $("#myImage").fadeOut(200, function(){
        $(this)
          .attr("src", "https://uploads.onecompiler.io/44cyrhw8k/44f8xzgwg/1000016211.png")
          .fadeIn(200);
      });
      isChanged = false;
      $("#changeBtn").text("Show New Image");
    }
  });

});
