
var vowels=["a","e","i","o","u"]

function cvowels(str)
{
var count = "";
	for(i=0;i<vowels.length;i++)
	{
		if(str!=vowels)
		{
			count+=str[i];
		}
		return count 
	}
	document.write(count);
}
const string = prompt('Enter a string1: ');

const result = cvowels(string);
//var res=(string-result);
//document.write("the consonenet is"+res);

console.log(result);
//document.write("the string vovel count is"+result);
document.write("<br>");

//const string1 = prompt('Enter a string2: ');

//const result1 = cvowels(string1);
//var res1=string-result;
//document.write("the consonenet is"+res1);


//console.log(result1);
//document.write("the string vovel count 2 is"+result1);
//document.write("<br>");
//const result2 = result+result1;
//var re = res+res1;
//document.write("the two string vovel is"+result2+"<br>");
//document.write("the length of two string"+re);


