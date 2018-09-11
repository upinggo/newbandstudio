$(document).ready(function(){
    $(".container a").click(function(){
        
       if($(this).prev(".showdetail").hasClass("show")){
        $(this).next(".showdetail").addClass("bordertop")
       }
       console.log($(this).next())
       if($(this).next().next().next(".showdetail").hasClass("show")){
        $(this).next().next().next(".showdetail").addClass("bordertop")
       }
        $(this).hide();
        $(this).next(".showdetail").show().addClass("show");
    })
    $(".showdetail span").click(function(){
        if($(this).parent().next().next().hasClass("show")){
            $(this).parent().next().next().removeClass("bordertop").removeClass("show")
           }
        $(this).parent().removeClass("bordertop").removeClass("show").hide();
        $(this).parent().prev("a").show();
    })
})