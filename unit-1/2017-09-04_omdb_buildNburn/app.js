// // Discription
// locating the string from the form
//    assign it to a varriable called movieSearchField
// fetch omdb api
//    appending the string movieSearchField to the api url
//    return hose to as omdbMovieData
// // Declaration
function elClass(className, i) {
  return document.getElementsByClassName(className)[i];
}
var form = elClass("movieSearch", 0);
var movieSearchField = "";
var artwork = null;
var imgTag = null;
var posterArea = null;
// // Logic

form.addEventListener("submit", function(event) {
  event.preventDefault();
  elClass("movies", 0).innerHTML = "";
  movieSearchField = event.target.children.search.value;
  // console.log(movieSearchField);
  fetch("https://omdb-api.now.sh/?s=" + movieSearchField)
    .then(function(omdbMovieData) {
      // var data = omdbMovieData.json(); console.log(data);//
      return omdbMovieData.json()



        .then(function(movieArt) {
          for (var i = 0; i < movieArt.Search.length; i++) {
            artwork = movieArt.Search[i].Poster;
            imgTag = document.createElement("img");
            imgTag.setAttribute("src", artwork);
            posterArea = elClass("movies", 0);
            posterArea.append(imgTag);
          }
        });
    });
});
