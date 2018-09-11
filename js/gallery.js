var common=new common();
var url=common.staticurl+common.api.gallery;

$(document).ready(function(){
   fetch(url,{method:"GET",}).then(data=>data.json())
   .then(data=>{console.log(data)
    var num=data.photo.length;
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
        
    }
    var photo=document.getElementById("showphoto");
    photo.onclick=function(){
        this.style.display='none';
    }
    // for(var i=0;i<num;i++){
    //     var img=document.createElement("img");
    //     img.setAttribute("class","minphoto");
    //     img.setAttribute("data-src",common.staticurl+data.photo[i].src)
    //     img.setAttribute("src",common.staticurl+data.photo[i].src_min)
    //     document.getElementById("gallery").appendChild(img);
        
        
    // }for(var i=0;i<num;i++){
    //     var img=document.createElement("img");
    //     img.setAttribute("class","minphoto");
    //     img.setAttribute("data-src",common.staticurl+data.photo[i].src)
    //     img.setAttribute("src",common.staticurl+data.photo[i].src_min)
    //     document.getElementById("gallery").appendChild(img);
        
        
    // }
    
   }
);
})