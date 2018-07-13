// console.log(`js is connected`);
var form = document.getElementById(`pokeNumber`);

form.addEventListener(`submit`, function(event) {
  event.preventDefault();

  var id = event.target.elements.pokeId.value;

  console.log(id);
});
