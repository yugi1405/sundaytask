var cont = document.createElement("div");
document.body.append(cont);
cont.style.display="flex";
cont.style.justifyContent="flex-start";

const input1 = document.createElement("input");
input1.setAttribute("class","addition");
input1.setAttribute("type","text");
input1.setAttribute("id","input1");
input1.setAttribute("placeholder","enter the number");
input1.style.backgroundColor="lightblue"


input1.style.padding="10px"
cont.appendChild(input1);
document.write("<br><br>");


const btn = document.createElement("button")
cont.appendChild(btn);
btn.type="button";
btn.innerHTML="click";
btn.style.backgroundColor="white";
btn.style.border="2px solid black";
btn.style.padding="10px";


btn.onclick=function()
{
var n = parseInt(document.getElementById("input1").value);
var i = n;
var sum = 0;
while (i>0){
	var digit= i%10;
	sum=sum+digit**3;
	i=parseInt(i/10);
}
if (sum===n){
	document.write("it is a armstrong number");
}
else{
	document.write("it is not a armstrong number");

}
}
