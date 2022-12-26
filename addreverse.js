var num=parseInt(prompt("enter number"));
var n=0;

while(num>0)
{
	num=num;
	rem=n%10;
	n=(n-(n%10))/10;
	document.write(num+"+"+rem+"="+(num+rem)+"<br>");
	num=num+rem;
}
var num=0;
var n=z;
document.write("explaination :<br>");
while(n>0)
{
	rem=n%10;
	num+=rem;
	n=(n-rem)/10;
	if(n!=0)
	{
		document.write(rem+"+");
	}
	else
	{
		document.write(rem);
	}
}
document.write("="+num);