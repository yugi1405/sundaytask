 var a=prompt("enter the no");
 while(a>=0)
 {
	 reverse=a%10;
	 a=(a-reverse)/10;
 switch (reverse)
 {
 case 1:
 reverse=document.write("one ");
 break;
 case 2:
 reverse=document.write("two");
 break;
 case 3:
 reverse=document.write("three");
 break;
 case 4:
 reverse=document.write("four");
 break;
 case 5:
 reverse=document.write("five");
 break;
 case 6:
 reverse=document.write("six");
 break;
 case 7:
 reverse=document.write("seven");
 break;
 case 8:
 reverse=document.write("eight");
 break;
 case 9:
 reverse=document.write("nine");
 break;
 case o:
 reverse=document.write("zero");
 break;
 
 default:
 alert("enter value no");
 }

 }
 
