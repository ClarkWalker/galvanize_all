const _ = require('underscore');
const express = require('express');

let animals = [
  {name: 'kizzy', species: 'dog'},
  {name: 'rufus', species: 'dog'},
  {name: 'rasco', species: 'dog'},
  {name: 'kiki', species: 'cat'},
  {name: 'queenie', species: 'cat'},
  {name: 'horice', species: 'cat'},
  {name: 'jim', species: 'fish'}
];

let isDog = (animal) => {return animal.species === 'dog';};
let dogs = animals.filter(isDog);
let nonDogs = _.reject(animals, isDog);
console.log(`dogs`, dogs);
console.log(`nonDogs`, nonDogs);

var myString ="this is my string";
// myString = myString.replace(/ /,"%20"); // "this%20is my string"
myString = myString.replace(/i/g,"%20"); // "this%20is%20my%20string"

console.log(myString);
