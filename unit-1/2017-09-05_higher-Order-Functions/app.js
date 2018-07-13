/**/
function log(str) {
  console.log(str);
}
doTheThing(1, 5, log)
/*/
function log() {
  return function(str){
    console.log(str);
  }
}
doTheThing(1, 5, log())
/**/
function doTheThing(num1, num2, logger) {
  logger(num1 + num2) // log()
}
