KISSY.add("gallery/kcharts/1.1/tools/touch/index",function(e){function c(a,c){if(!(1<a.touches.length)){var b=a.changedTouches[0],d=document.createEvent("MouseEvent");d.initMouseEvent(c,!0,!0,window,1,b.screenX,b.screenY,b.clientX,b.clientY,!1,!1,!1,!1,0,null);a.target.dispatchEvent(d)}}if(!e.UA.ie){var b,d=!1;document.addEventListener("touchstart",function(a){var d="INPUT"==a.target.tagName.toUpperCase()?!0:!1;!b&&!d&&(b=!0,c(a,"mouseover"),c(a,"mousemove"),c(a,"mousedown"))},!0);document.addEventListener("touchmove",
function(a){b&&(c(a,"mousemove"),d=!0)},!0);document.addEventListener("touchend",function(a){b&&(c(a,"mouseup"),d&&c(a,"mouseout"),b=d=!1)},!0)}});