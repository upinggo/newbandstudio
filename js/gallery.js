var common=new common();
var url=common.staticurl+common.api.gallery;

$(document).ready(function(){
    var imgnum=4;
    var shownum=1;
    var num;
   fetch(url,{method:"GET",}).then(data=>data.json())
   .then(data=>{console.log(data)
    num=data.photo.length;
    
    for(var i=0;i<num;i++){
        var img=document.createElement("img");
        img.setAttribute("class","minphoto");
        img.setAttribute("data-src",common.staticurl+data.photo[i].src)
        img.setAttribute("src",common.staticurl+data.photo[i].src_min)
        document.getElementById("gallery").appendChild(img);
        img.onclick=function(){
            var show=document.getElementById("showphoto");
            var showimg=document.getElementById("showimg");
            showimg.src=this.dataset.src;
            show.style.display='block';
        }
       
        if(i>4){
            
            img.style.display="none";
            img.className="minphoto animated fadeInUpBig";
        }
        
        
    }

       
    
    
    var photo=document.getElementById("showphoto");
    photo.onclick=function(){
        this.style.display='none';
    }
    
   }
);


document.onscroll=function(){
    var scrollTop=document.body.scrollTop+document.documentElement.scrollTop;
    var imgheight=$(".minphoto")[0].offsetHeight/2
    
   
    // img.style.display="block";
        if(scrollTop>imgheight*shownum&&shownum<=(num-4)/2){
            $(".minphoto")[imgnum].style.display="inline-block";
            $(".minphoto")[imgnum].className="minphoto animated fadeInUpBig";
                $(".minphoto")[imgnum+1].style.display="inline-block";
                $(".minphoto")[imgnum+1].className="minphoto animated fadeInUpBig";
            
            
            imgnum+=2;
            shownum++;
            
        }
        console.log(scrollTop,num,imgheight,"imgnum:"+imgnum,shownum)
    }
})