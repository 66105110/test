var i = 0;
var count = document.getElementById("word").innerText;
function f(){
    document.getElementById("w").innerText = count.substring(0,i);
    document.getElementById("word").style.display="inline";
    i++;
}
setInterval(f,200);