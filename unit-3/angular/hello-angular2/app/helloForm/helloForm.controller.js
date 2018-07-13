(function() {
  angular.module('myApp').controller('helloForm', helloForm);
  function helloForm() {
    let name = '';
    this.submit = function(str) {
      name = str;
    };
  }
}());
