
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
    if(document.documentElement.offsetWidth>1010){
        
    }else{
        $(".text").css("min-height",document.documentElement.offsetHeight-48-105+'px')
    }
    var deg=0;
    $("#mobile_icon").click(function(){
        $("#mobile_nav .title a").css('line-height',(document.documentElement.offsetHeight-110)/5+'px');
        if(deg/90%2==0){
            $('#mobile_nav').show();
            
            
        }else{
            $('#mobile_nav').hide();
            
        }
        deg+=90;
        this.style.transform="rotate("+deg+"deg)";
        
    })
    
})


