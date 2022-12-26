function start()
{
var result=document.getElementById("answer");
var table=document.getElementById("table").value;
var mul=document.getElementById("mul").value;
answer.innerHTML='';
for (i=1;i<=mul;i++)
{
answer.innerHTML=answer.innerHTML+ table + "x" +i+ "=" +table*i+ "<br>"
console.log(i);
}
}