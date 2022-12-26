var a=parseInt(prompt("enter the"));
i=a;
temp =0;
while(a>0)
{
	r=a%10;
	temp= temp+r**3;
	a=parseInt(a/10);
}

if(temp ==i)
{
document.write("the given num is amstrong no");

}
else
{
document.write("the given num is not a amstrong no");

}
    

