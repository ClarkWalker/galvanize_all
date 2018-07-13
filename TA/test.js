// sanity check
console.log("Hello,  World");

/**//** /
// write a function that returns the average of at least 6 numbers passed to it
function average() {
	sum = 0
	var i = 0
	while (i < arguments.length) {
		sum += arguments[i]
		i++
	}
	return sum / arguments.length
}

let x = average(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
console.log(x);

let y = average(0, 1, 2, 3, 4, 5, 6, 7, 8)
console.log(y);
/**//**/
function isDivisable(numInQuestion, isDivisableByThisNumber) {
	return numInQuestion % isDivisableByThisNumber === 0;
}
var x = isDivisable(7, 3)
console.log(x);
/**//**/
/**//**/
