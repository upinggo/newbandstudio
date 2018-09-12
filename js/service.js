$(document).ready(function(){
    var isrun1,isrun2,isrun3,isrun4=false;
    $(".container a").hide();
    document.onscroll=function(){
        var scrollTop=document.body.scrollTop+document.documentElement.scrollTop;
        console.log($(".container")[0].scrollTop,document.body.scrollTop,document.documentElement.scrollTop);
        
        if(scrollTop > 60&&scrollTop<260&&!isrun1) {
            isrun1=true;
           $(".first").show().addClass("animated fadeInUp1");
           
        }else if(scrollTop >= 240&&scrollTop<430&&!isrun2) {
            isrun2=true;
            $(".second").show().addClass("animated fadeInUp1");
        }else if(scrollTop >= 420&&scrollTop<530&&!isrun3) {
            isrun3=true;
            $(".third").show().addClass("animated fadeInUp1");
        }else if(scrollTop>=500&&!isrun4) {
            isrun4=true;
            $(".container a").show().addClass("animated fadeInUp1");
            
        }
    }
    $(".container a").click(function(){
        $(this).next(".showdetail").addClass("animated fadeIn");
        $(this).prev().prev("a").css("border-bottom","0");
        $(this).next().next("a").css("border-top","0");
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
        // $(this).parent().prev().prev().prev("a").css("border-bottom","2.5px");
        // $(this).parent().prev().next().next("a").css("border-top","2.5px");
        if($(this).parent().next().next().hasClass("show")){
            $(this).parent().next().next().removeClass("bordertop").removeClass("show")
           }
        $(this).parent().removeClass("bordertop").removeClass("show").hide();
        $(this).parent().prev("a").show();
    })
})