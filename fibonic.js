var n=(prompt("enter a number"));

let a=0;
let b=1;  
let c=b;
for (var i=1;i<n;i++){
	c=a+b;
	a=b;
	b=c;
	console.log(c);
}
