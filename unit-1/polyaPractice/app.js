

function returnLargerNumber(num1, num2) {
// var num1 = 0;
// var num2 = 0;
    if (num1 > num2) {
        return num1
    } else if (num1 < num2) {
        return num2
    } else if (num1 === num2) {
        return 'they are the same'
    };
};

console.log(returnLargerNumber(800, 900));
