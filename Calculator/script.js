document.getElementById('tar').onclick=function fn(e){
e = e || event
var target = e.target || e.srcElement
document.getElementById('myInput').value += target.id ;
    }   
function result(){
 var ravno = document.getElementById('myInput').value;
     document.getElementById("myInput").value = eval(ravno).toFixed(3);
}
    function cor(){
 var ravno = document.getElementById('myInput').value;
     document.getElementById("myInput").value = Math.sqrt(eval(ravno)).toFixed(3);
}
    function c(){
   document.getElementById('myInput').value = '';
}
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrolled);        
    }