function yellPhrase(phrase) {
  if (typeof(phrase) == 'string') {
    return phrase.toUpperCase();
  }
  else if (phrase === null || phrase === undefined) {
    return 'Please input a phrase';
  }
  else {
    return 'Please input a string';
  }
}

module.exports = {
  yellPhrase
};
