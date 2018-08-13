// window.onload = function(){
//     var w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//     var h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//     document.getElementById("containerbox").style.width = w+"px";
//     document.getElementById("containerbox").style.height = h+"px";
//     }
//     window.onresize = function(){
//         var w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//         var h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//         document.getElementById("containerbox").style.width = w+"px";
//         document.getElementById("containerbox").style.height = h+"px";
//         }
window.onload=function(){
// swiper
var mySwiper = new Swiper ('.swiper-container', {
    autoplay:true,
    loop: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
   
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


