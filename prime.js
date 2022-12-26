var flex=document.createElement("div");
flex.style.display="flex";
flex.style.flexDirection="column";

document.body.appendChild(flex);
var input=document.createElement("input");
input.setAttribute("id","input");
input.placeholder="enter range";
input.style.margin="20px";

flex.appendChild(input);
var but=document.createElement("button");
but.setAttribute("id","but");
but.innerHTML="click me";
but.style.margin="20px";

flex.appendChild(but);
but.onclick=function()
{
	var range=parseInt(document.getElementById("input").value);
	var prime=true;
	for(number=1;number<=range;number++)
	{
		var output=document.createElement("p");
		output.setAttribute("id","output");
		output.style.display="flex";
	
		flex.appendChild(output);
		
		if(number>2)
		{
			for(i=2;i<number;i++)
			{
				if(number%i==0)
				{
					prime=false;
					
				}
			}
		}
		if(prime)
		{
			output.innerHTML=number+" is a prime number";
		}
		
		prime=true;
		
	}
}