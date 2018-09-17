/**
 * ScrollFix v0.1
 * http://www.joelambert.co.uk
 *
 * Copyright 2011, Joe Lambert.
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
function getBrowser() {
	var ua = window.navigator.userAgent;
	var isIE = window.ActiveXObject != undefined && ua.indexOf("MSIE") != -1;
	var isFirefox = ua.indexOf("Firefox") != -1;
	var isOpera = window.opr != undefined;
	var isChrome = ua.indexOf("Chrome") && window.chrome;
	var isSafari = ua.indexOf("Safari") != -1 && ua.indexOf("Version") != -1;
	if (isIE) {
		return "IE";
	} else if (isFirefox) {
		return "Firefox";
	} else if (isOpera) {
		return "Opera";
	} else if (isChrome) {
		return "Chrome";
	} else if (isSafari) {
		return "Safari";
	} else {
		return "Unkown";
	}
}

var ScrollFix = function(elem) {
	// Variables to track inputs
	var startY, startTopScroll,LastY,can;
	
	elem = elem || document.querySelector(elem);
	
	// If there is no element, then do nothing	
	if(!elem)
		return;

	// Handle the start of interactions
	// elem.addEventListener('touchstart', function(event){
	// 	startY = event.touches[0].pageY;
	// 	startTopScroll = elem.scrollTop;
	// 	console.log(startTopScroll,elem.offsetHeight,elem.scrollHeight)
	// 	if(startTopScroll <= 0) 
	// 		elem.scrollTop = 1;

	// 	if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
	// 		elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
    // }, false);
    // elem.addEventListener('touchmove', function(event){
	// 	startY = event.touches[0].pageY;
	// 	startTopScroll = elem.scrollTop;
		
	// 	if(startTopScroll <= 0)
	// 		elem.scrollTop = 1;

	// 	if(startTopScroll + elem.offsetHeight >= elem.scrollHeight-50)
	// 		elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
    // }, false);
    elem.addEventListener('touchstart', function(event){
		LastY = event.touches[0].pageY;
        if(can){
            event.preventDefault();
            !can
        }else{
               
        }
        // if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
        // {elem.scrollTop = elem.scrollHeight - elem.offsetHeight ;
        // event.preventDefault();
        // }
    }, false);
    elem.addEventListener('touchmove', function(event){
		startY = event.touches[0].pageY;
        startTopScroll = elem.scrollTop;
        console.log(startTopScroll,startTopScroll,elem.offsetHeight,elem.scrollHeight);
        if(startTopScroll<=0){startTopScroll=0;}
        if(startTopScroll>=elem.offsetHeight){
            startTopScroll=elem.offsetHeight;
        }
        if(startTopScroll<=0&&LastY<startY){
            
            startTopScroll=0;
            event.preventDefault();
        }
        if(startTopScroll+elem.offsetHeight>=elem.scrollHeight+10&&LastY>startY){
            
           can=false;
        }
	}, false);
};