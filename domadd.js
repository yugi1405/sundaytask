


var i1=document.createElement("INPUT");n
	i1.setAttribute("type","text");
	i1.setAttribute("placeholder","Enter no a");
	i1.setAttribute("id","table");
	document.body.appendChild(i1);n
	document.write('<br/>');
	document.write('<br/>');
	
var i2=document.createElement("INPUT");
	i2.setAttribute("type","text");
	i2.setAttribute("placeholder","Enter no b")
	i2.setAttribute("id","range");
	i2.setAttribute("className","two");
    document.body.appendChild(i2);
	document.write('<br/>');
	document.write('<br/>');

	button=document.createElement("button");
	button.type="button";
	button.setAttribute("onclick","add()");
	button.innerText="add";
    document.body.appendChild(button)

	button=document.createElement("button");
	button.type="button";
	button.setAttribute("onclick","minus()");
	button.innerText="minus";
    document.body.appendChild(button)


	button=document.createElement("button");
	button.type="button";
	button.setAttribute("onclick","div()");
	button.innerText="div";
    document.body.appendChild(button)


	button=document.createElement("button");
	button.type="button";
	button.setAttribute("onclick","mul()");
	button.innerText="mul";
    document.body.appendChild(button)
	function add()
{
	var val1=parseInt(document.getElementById("table").value);
	var val2=parseInt(document.getElementById("range").value);


 document.write(val1+val2+ "<br>");
}



function minus()
{
	var val1=parseInt(document.getElementById("table").value);
	var val2=parseInt(document.getElementById("range").value);


 document.write(val1-val2+ "<br>");
}
function mul()
{
	var val1=parseInt(document.getElementById("table").value);
	var val2=parseInt(document.getElementById("range").value);


 document.write(val1*val2+ "<br>");
}
function div()
{
	var val1=parseInt(document.getElementById("table").value);
	var val2=parseInt(document.getElementById("range").value);


 document.write(val1/val2+ "<br>");
}

