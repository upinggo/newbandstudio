var common=new common();
var url=common.staticurl+common.api.gallery;

$(document).ready(function(){
   fetch(url,{method:"GET",}).then(data=>data.json())
   .then(data=>{console.log(data)
    var num=data.photo.length;
    for(var i=0;i<num;i++){
        var img=document.createElement("img");
        img.setAttribute("class","minphoto")
        img.setAttribute("src",common.staticurl+data.photo[i].src_min)
        document.getElementById("gallery").appendChild(img);
        document.getElementById("gallery").appendChild(img);
        document.getElementById("gallery").appendChild(img);
        document.getElementById("gallery").appendChild(img)
    }
    
   }
);
})