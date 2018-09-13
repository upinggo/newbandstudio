

window.onload=function(){
    
    
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
    var isrun1,isrun2,isrun3,isrun4=false;
    $("#p_shb,#p_lsy").css("visibility","hidden")
            $("#sign_shb,#sign_lsy,.mixer").hide()
            $(".whitecontent>img").hide();
            console.log(document.documentElement.offsetWidth);
            if(document.documentElement.offsetWidth>1010){
                document.onscroll=function(){
                    var scrollTop=document.body.scrollTop+document.documentElement.scrollTop;
                    console.log($(".container")[0].scrollTop,document.body.scrollTop,document.documentElement.scrollTop);
                    
                    if(scrollTop > 400) {
                        $("#p_shb,#p_lsy").css("visibility","visible")
                        $("#sign_shb,#sign_lsy").show();
                        $("#sign_shb,#sign_lsy,#p_shb,#p_lsy").addClass("animated fadeInUpBig")
                       
                    }
                    if(scrollTop>=520){
                        $(".mixer,.whitecontent>img").show();
                        $(".mixer").addClass("animated fadeInUp1");
                        $(".m_photo").addClass("animated fadeInUp2");
                        $(".mixer h1").addClass("animated fadeInUp3");
                        $(".detail").addClass("animated fadeInUp4");
                        $(".whitecontent>img").addClass("animated slideInLeft")
                    }
            
                }
            }else{
                $(".text").css("min-height",document.documentElement.offsetHeight-48-105+'px')
                document.onscroll=function(){
                    var scrollTop=document.body.scrollTop+document.documentElement.scrollTop;
                    console.log(scrollTop);
                    if(scrollTop<=200){
                        $("#m_img").attr("src","img/m_aboutus.png")
                    }
                    if(scrollTop > 200) {
                        $("#m_img").attr("src","img/m_meet.png")
                        $("#p_shb").css("visibility","visible")
                        $("#sign_shb").show();
                        $("#sign_shb,#p_shb").addClass("animated fadeInUpBig")
                       $("#shb.mixer").show();
                       $("#shb.mixer").addClass("animated fadeInUp1");
                        $("#shb .m_photo").addClass("animated fadeInUp2");
                        $("#shb.mixer h1").addClass("animated fadeInUp3");
                        $("#shb .detail").addClass("animated fadeInUp4");
                    }
                    if(scrollTop>=900){
                        $("#sign_lsy").attr("src","img/m_lsy.png")
                        console.log(1)
                        $("#w_lsy,#sign_lsy").show();
                        $("#w_lsy,#sign_lsy").addClass("animated fadeInUpBig");
                        $("#lsy.mixer").show();
                        $("#lsy.mixer").addClass("animated fadeInUp1");
                        $(".m_photo").addClass("animated fadeInUp2");
                        $(".mixer h1").addClass("animated fadeInUp3");
                        $(".detail").addClass("animated fadeInUp4");
                        
                    }
            
                }
            }
    
    
    var deg=0;
    $("#mobile_icon").click(function(){
        $("#mobile_nav .title a").css('line-height',(document.documentElement.offsetHeight-110)/5+'px');
        if(deg/90%2==0){
            $('#mobile_nav').show();
            console.log(1)
           
        }else{
            $('#mobile_nav').hide();
           
        }
        deg+=90;
        this.style.transform="rotate("+deg+"deg)";
        
    })
    
})



