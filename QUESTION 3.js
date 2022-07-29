function reverse(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}

var num=prompt("Enter the number");
console.log(Number(reverse(num)));