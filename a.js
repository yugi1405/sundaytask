var num=parseInt(prompt("enter a value"));
var a=0;
while(num>0)
{
	rem=num%10
	a+=rem
	num=(num-(num%10))/10;
}
document.write(a);