$(document).ready(function(){

  // Sliding gallery
  $("#startSlide").click(function(){
    $(".imgBox").each(function(index){
      $(this).delay(500 * index).slideDown(800);
    });
  });

  // Feedback panel
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });

  // Change image
  $("#changeBtn").click(function(){
    $("#myImage").attr("src", "https://uploads.onecompiler.io/44cyrhw8k/44gqkypvd/1000016989.png");
  });

});
