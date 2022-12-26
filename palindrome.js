var number=prompt("enter a number");
var gv=number;
var reverse= 0;
while(number!=0){
	let digit=number%10;
	reverse= (reverse*10)+digit;
	number= parseInt(number/10);

}
if(gv == reverse)
{
	alert("palindrome");
}

	else
	{
	
		alert("not palindrome")
	}
	

	