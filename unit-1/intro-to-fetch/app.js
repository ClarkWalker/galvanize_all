// console.log(`hello there`);
var aTag = document.createElement(`a`);
var content = document.getElementsByClassName(`content`)[0];

fetch(`http://pokeapi.co/api/v2/pokemon/2/`)
  .then(function(response){
    return response.json()
      .then(function(pokeData) {
        aTag.setAttribute(`href`, pokeData.sprites.front_default);
        aTag.setAttribute(`target`, `_blank`);
        aTag.innerText = pokeData.name;
        content.append(aTag)
        // console.log(pokeData);
      })
  })
