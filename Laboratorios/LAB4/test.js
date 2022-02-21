document.getElementById("h1").style.fontSize = "25px";

function dispMsg() {
    window.alert("This message isnt actually sent")
}

function clearContent() {
    var textarea = document.getElementById('textBox');
    var empty = "";
    textarea.value = empty;
}

function tableGen()
{
rows = window.prompt("Input number of primes", 1);
const columns = 2;
  
 for(var r=0;r<parseInt(rows,10);r++)
  {
   var x=document.getElementById('primeTable').insertRow(r);
     var y = x.insertCell(0);
     var z = x.insertCell(1);
     y.innerHTML=r+1;
     z.innerHTML=(r+1)*(r+1);
   }
}
