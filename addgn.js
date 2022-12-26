var n = parseInt(prompt("enter a number"));
var reverse = 0;
while(n!=0){
	let digit=n%10;
	reverse= (reverse*10)+digit;
	n = parseInt(n/10);
}
temp=0;
while(reverseNumber!=0)
{
	rem=reverseNumber%10;
	temp+=rem;
	reverseNumber=parseInt(reverseNumber/10)
	if(reverseNumber!=0)
	{
		document.write(rem+"+");
	}
	else
	{
		document.write(rem);
	}
}
document.write("="+temp);