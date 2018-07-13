document.body.onload = changeHeader; // console.log(`IT'S WORKING`);

function changeHeader() {
  var el = document.getElementById(`about`);
  // console.log(el);
  el.innerText = `About Clark Walker`
};

function changeListItem() {
  var el = document.getElementsByClassName(`list`);
  el[0].children[1].innerText = `I went to the Galvanize Denver platte campus`;
};

function createParagraph() {
  var newParagraph = document.createElement(`p`);
  var newText = document.createTextNode(`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  newParagraph.append(newText);

  document.getElementById(`new`).append(newParagraph)
};
