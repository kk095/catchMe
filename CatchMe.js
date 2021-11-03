var box=document.querySelector(".box");
var totalHeight=window.innerHeight;
var totalWidth=window.innerWidth;
window.addEventListener("resize",function(){
    totalHeight=window.innerHeight;
    totalWidth=window.innerWidth;
    
})
box.addEventListener("mouseover",function(){

    var idealHeight=totalHeight-80;
    var idealWidth=totalWidth-80;

    var randomHeight=Math.floor(Math.random() * idealHeight);
    var randomWidth=Math.floor(Math.random() * idealWidth);

    box.style.left=randomWidth+ "px";
    box.style.top=randomHeight+"px" ;

})