// import {fetch} from 'whatwg-fetch'; ajax fetch方法！
var common=new common();
var url=common.staticurl+common.api.banner;
var imgurl=[];
var mySwiper;

window.onresize=function(){
    // var home=this.document.getElementById('home');
    // var homeheight=this.document.getElementById('home').offsetHeight;
    // var bodyheight=document.body.clientHeight;
    // home.style.top=(bodyheight-homeheight)/2+'px';
    // var container=document.getElementById('container');
    
    
    var home=document.getElementById('home');
        
    var homeheight=document.getElementsByTagName('img')[2].offsetHeight;
        var bodyheight=document.body.clientHeight;
        home.style.top=(bodyheight-homeheight)/2+'px';  
        var slide=document.getElementsByClassName('swiper-container')[0];
        
        slide.style.height=document.getElementsByTagName('img')[2].offsetHeight+'px';
}
window.onload=function(){
    
    fetch(url,{
        method: 'GET',
        
    }).then(e=>e.json()).then(function(e){
        
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
       return new Promise(function(resolve,reject){
           var img=document.getElementsByTagName('img')[2];
           img.onload=function(){
            resolve(img);
        };
        img.onerror = function(){
            reject(new Error('error'))
        };
       })
        
    }).then(function(e){
       
        var bodywidth=document.body.clientWidth;
        var left=(bodywidth-e.offsetWidth)/2;
        var home=document.getElementById('home');
        
        var homeheight=home.offsetHeight;
            var bodyheight=document.body.clientHeight;
            home.style.top=(bodyheight-homeheight)/2+'px';  
            var slide=document.getElementsByClassName('swiper-container')[0];
        slide.style.left=left+'px';
            slide.style.height=e.offsetHeight+'px';
            
        
    // swiper
     mySwiper = new Swiper ('.swiper-container', {
        autoplay:true,
        loop: true,
        direction: 'vertical',
        effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
    //   slidesPerView: 1,
      coverflowEffect: {
        rotate: -50,
        stretch: 10,
        depth: 1000,
        modifier: 1,
        slideShadows : true,
      },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
       
      });
        document.getElementsByClassName("swiper-pagination")[0].style.left=35-left+'px';
        
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
$(document).ready(function(){
    if(document.documentElement.offsetWidth>1010){
        
    }else{
        document.getElementById("container").style.height="100vh";
        document.getElementById("container").style.overflowY="scroll";
    }
    
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


