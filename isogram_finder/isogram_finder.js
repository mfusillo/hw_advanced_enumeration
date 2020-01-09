const IsogramFinder = function (word) {
  this.word = word.toLowerCase().split('');
}

IsogramFinder.prototype.isIsogram = function () {

  let set = new Set(this.word);
  const uniqueLetters = [...set];
  return uniqueLetters.length === this.word.length;
}

module.exports = IsogramFinder;
