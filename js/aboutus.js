

window.onload=function(){
    $(document).scroll(function(){
        var scrollTop=document.documentElement.scrollTop;
        console.log($(".container")[0].scrollHeight,document.documentElement.scrollTop);
        
        if(scrollTop > 300) {
            $(".whitecontent").addClass("animated fadeInUpBig")
           $(".mixer").addClass("animated fadeInUp1");
           $(".whitecontent>img").addClass("animated slideInLeft")
        }
    })
    
    var title=this.document.getElementsByClassName('title');
    var self=this;
    
    for(let i=0;i<title.length;i++){
        title[i].onclick=function() {
            if(this.classList.length==3&&this.parentNode.hasChildNodes('active')){
                console.log(this)
            }
            else if(this.classList.length!=3&&this.parentNode.hasChildNodes('active'))
            {
                this.parentNode.childNodes.forEach((item,index)=>{
                    
                    if(item.hasChildNodes('active')){
                        
                        if(item.classList.length==3){
                            item.classList.remove('active');
                        }
                        
                    }
                   
                });
                this.classList.add('active');
                
            }
        
        
        }
        
        
    }
    
}
$(document).ready(function(){
    
    var deg=0;
    $("#mobile_icon").click(function(){
        $("#mobile_nav .title a").css('line-height',($('.container').height()-200)/5+'px');
        if(deg/90%2==0){
            $('#mobile_nav').show();
            console.log(1)
            mySwiper.autoplay.stop();
        }else{
            $('#mobile_nav').hide();
            mySwiper.autoplay.start();
        }
        deg+=90;
        this.style.transform="rotate("+deg+"deg)";
        
    })
    
})



