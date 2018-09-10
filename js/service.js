$(document).ready(function(){
    $(".container a").click(function(){
        $(this).hide();
        $(this).next(".showdetail").show();
    })
    $(".showdetail span").click(function(){
        $(this).parent().hide();
        $(this).parent().prev("a").show();
    })
})