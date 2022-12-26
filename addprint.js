var number=parseInt(prompt("enter number :"));
var temp=0;
var reverse= 0;
while(number!=0){
	let digit=number%10;
	reverse= (reverse*10)+digit;
	number= parseInt(number/10);
}
//reverse()
while(reverse>0)
{
	rem=reverse%10;
	temp+=rem;
	reverse=(reverse-rem)/10;
	if(reverse==0)
	{
		document.write(rem);
	}
	else
	{
		document.write(rem+"+");
	}
}		

document.write("="+temp);
console.log("="+temp);