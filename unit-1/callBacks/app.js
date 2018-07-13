require('./fs');
/* callbacks * /
function callback(){
  console.log(`I run secod!`);
}

function hostName(cb){
  cb();
}

setTimeout(function(){
  console.log(`I finally ran!`);
}, 5000)

// hostName(callback);

// callback();
/*/
/* more */
function logger(str){
  console.log(str);
}

var interval = setInterval(function(){
  logger(`hello world`);
}, 1000)

setTimeout (function(){
  clearInterval(interval);
  console.log(`END`);
}, 7000)



/**/
