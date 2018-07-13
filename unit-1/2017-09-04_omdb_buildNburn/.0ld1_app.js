function elClass(className){
  return document.getElementsByClassName(className)
}
var form = elClass(`movieSearch`)[0];
var movie = ``;
form.addEventListener(`submit`, function(event) {
  event.preventDefault();
  elClass(`movies`)[0].innerHTML = ``;
  movie = event.target.search.value
  // console.log(movie)
  fetch(`https://omdb-api.now.sh/?s=` + movie)
    .then(function(movieData) {
      return movieData.json()
        .then(function(movies) {
          for (var i = 0; i < movies.Search.length; i++) {
            movies.Search[i].Poster
            var imgTag = document.createElement(`img`)
            imgTag.setAttribute(`src`, movies.Search[i].Poster);
            var moviePosterSec = elClass(`movies`)[0];
            moviePosterSec.append(imgTag);
          }
        })
    })
})
