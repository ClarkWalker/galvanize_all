var express = require(`express`);
var app = express();

// console.log(app);
app.get('/', function(req, res) {
  res.send(`hello there`);
});

app.listen(3001, function() {
  console.log(`Example app listening on port 3000!`);
});
console.log(`\n\n\n`, `hello universe`);
/** /
function find_average(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
}
console.log(find_average([1,1,1]));
console.log(find_average([1,2,3]));
console.log(find_average([10,22,35,19,83]));
//**/
console.log(`fred shirt`.length);
