// import {fetch} from 'whatwg-fetch'; ajax fetch方法！
var common=new common();
var url=common.staticurl+common.api.banner;
var imgurl=[];


window.onresize=function(){
    var home=this.document.getElementById('home');
    var homeheight=this.document.getElementById('home').offsetHeight;
    var bodyheight=document.body.clientHeight;
    home.style.top=(bodyheight-homeheight)/2+'px';
    var container=document.getElementById('container');
    
    // container.style.background=
}
window.onload=function(){
    fetch(url,{
        method: 'GET',
        
    }).then(e=>e.json()).then(function(e){
        console.log(e.slide_show)
        for(var i=0;i<e.slide_show.length;i++){
            imgurl.push(common.staticurl+e.slide_show[i].original_src)
        }
    }
    ).then(
        function(e){
            var bannerimg=this.document.getElementById('bannerimg');
            var html='';
            for(var i=0;i<imgurl.length;i++){
                html+='<div class="swiper-slide"><img src="'+imgurl[i]+'" alt=""></div>';
                bannerimg.innerHTML=html;
            }
        }
    ).then(function(e){
        var home=this.document.getElementById('home');
        var homeheight=this.document.getElementById('home').offsetHeight;
        var bodyheight=document.body.clientHeight;
        home.style.top=(bodyheight-homeheight)/2+'px';  
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
    });
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


