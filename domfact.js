var input1 = document.createElement("input");
input1.setAttribute("className","addition");
input1.setAttribute("type","text");
input1.setAttribute("id","input1");
input1.setAttribute("placeholder","enter the number");
input1.style.backgroundColor="limegreen";
input1.style.border="2px solid black";

document.body.appendChild(input1);

var btn = document.createElement("button")
document.body.appendChild(btn);
btn.type="button";
btn.innerHTML="click";

btn.onclick=function(){

var n = parseInt(document.getElementById("input1").value);
var factorial = 1;

let i = 1;
do {
	factorial*=i
	document.write(factorial+"<br>");
	i++
}
	
while(i<=n)
}