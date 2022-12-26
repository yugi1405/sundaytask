var i1=document.createElement("INPUT");
	i1.setAttribute("type","text");
	i1.setAttribute("placeholder","Enter a number:");
	i1.setAttribute("id","table");
	document.body.appendChild(i1);
	document.write('<br/>');
	document.write('<br/>');
	
var i2=document.createElement("INPUT");
	i2.setAttribute("type","text");
	i2.setAttribute("placeholder","Enter a range:")
	i2.setAttribute("id","range");
	i2.setAttribute("className","two");
    document.body.appendChild(i2);
	document.write('<br/>');
	document.write('<br/>');

	button=document.createElement("button");
	button.type="button";
	button.setAttribute("onclick","add()");
	button.innerText="clickme";
   document.body.appendChild(button)


function add()
{
	var val1=document.getElementById("table").value;
	var val2=document.getElementById("range").value;
	var  i=1;
while(i<=val2)
{
 document.write(val1+" * "+i+" = " +i*val1+ "<br>");
i++;
}
}

