var el = document.querySelector(".outside");
el.addEventListener("click", function(evt){
 console.log(evt.target);
 console.log(evt.target.nodeName);
 debugger
}, false);