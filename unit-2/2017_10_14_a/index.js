console.log('\n\n\n\n', 'hi there', '\n');
let animals = [
  {name: 'fluffykins', species: 'bunny'},
  {name: 'Caro', species: 'dog'},
  {name: 'rufas', species: 'dog'},
  {name: 'kiki', species: 'cat'},
  {name: 'poly', species: 'parot'},
  {name: 'rex', species: 'cat'},
  {name: 'toople', species: 'hampster'},
  {name: 'toothman', species: 'fish'},
];

/** /
let dogs = [];
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog') {
    dogs.push(animals[i]);
    // console.log('\n', i, 'dogs\n', dogs);
  }
}

/**//** ///
//       A is passed as argument @ B
//            A               B
//            |               |
//           \|/>>>>>>>>>>>>>\|/
let dogs = animals.filter((animal) => {
  console.log('animal', animal);
  return animal.species === 'dog';
});
console.log('\n', 'animals\n', animals);

/**//**/// composing
let isDog = (animal) => {return animal.species === 'dog';};
let dogs = animals.filter(isDog);
// let otherAnimals = animals.rejecct(isDog);
console.log('\n', 'animals\n', animals);
/**/
console.log('\n', 'dogs\n', dogs);
