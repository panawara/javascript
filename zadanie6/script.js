var a = 1;
var b = 2;
var value = (a * a) + (2 * a * b) - (b * b);
console.log(value);


if (value>0) {
	console.log("dodatnia")
} else if (value<0) {
	console.log("ujemna")
}

if (value==0) {
	console.log("zero")
} else {
	console.log("nie-zero")
}