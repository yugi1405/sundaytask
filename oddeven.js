var num=prompt("enter number :");
var a=0,b=0;
while(num>0)
{
	re=num%10
	if(re%2==0)
	{
		a+=re
	}
	else
	{
		b+=re
	}
	num=(num-(num%10))/10;	
}
document.write(a+" is sum of even <br>");
document.write(b+" is sum of odd");